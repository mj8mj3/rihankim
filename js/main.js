(function () {
  var MEDIA = "assets/media/";
  var ALL = window.WORKS || [];
  var SIZES = window.MEDIA_SIZES || {};
  // 대표 작업(Works)과 작은 작업(Small Works)을 나눈다. 번호는 각 묶음 안에서 매긴다.
  var WORKS = ALL.filter(function (w) { return !w.small; });
  var SMALLW = ALL.filter(function (w) { return w.small; });

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function num(w) { return w.small ? "S" + pad(SMALLW.indexOf(w) + 1) : pad(WORKS.indexOf(w) + 1); }

  // 이미지와 mp4를 같은 방식으로 넣는다. mp4는 소리 없이 반복 재생.
  // 이미지는 js/media-sizes.js 목록이 있으면 WebP 여러 폭(srcset)으로, 없으면 파일 그대로 넣는다.
  function key(src) { return src.replace(/\.(jpg|jpeg|png|webp)$/i, ""); }
  function srcset(k) {
    return SIZES[k].w.map(function (w) { return MEDIA + k + "-" + w + ".webp " + w + "w"; }).join(", ");
  }
  // 포스터처럼 한 장만 쓸 때: 2400 이하에서 가장 큰 것.
  function single(src) {
    var e = SIZES[key(src)];
    if (!e) return MEDIA + src;
    var w = e.w.filter(function (x) { return x <= 2400; }).pop() || e.w[0];
    return MEDIA + key(src) + "-" + w + ".webp";
  }
  function media(src, cls, eager, sizes) {
    if (/\.mp4$/.test(src)) return '<video class="' + (cls || "") + '" src="' + MEDIA + src + '" poster="' + MEDIA + key(src) + '-poster.webp" autoplay muted loop playsinline preload="metadata"></video>';
    var e = SIZES[key(src)];
    var attrs = e
      ? ' src="' + MEDIA + key(src) + "-" + e.w[0] + '.webp" srcset="' + srcset(key(src)) + '" sizes="' + (sizes || "100vw") + '" width="' + e.size[0] + '" height="' + e.size[1] + '"'
      : ' src="' + MEDIA + src + '"';
    return '<img class="' + (cls || "") + '"' + attrs + ' alt=""' + (eager ? ' fetchpriority="high"' : ' loading="lazy" decoding="async"') + ">";
  }
  var HALF = "(max-width: 600px) 100vw, 50vw", THIRD = "(max-width: 600px) 100vw, 33vw", CARD = "(max-width: 600px) 50vw, 33vw", HERO = "(max-width: 900px) 100vw, 66vw";
  function ko(text, tag) { return "<" + (tag || "p") + ' lang="ko">' + esc(text) + "</" + (tag || "p") + ">"; }

  // ---------- 메인: 작품 색인 ----------
  function renderIndex() {
    var grid = document.getElementById("index-grid");
    if (!grid) return;
    // 카드: 상세 페이지가 없는 작업(card: true)은 링크 없이 작은 이미지와 메타만.
    grid.innerHTML = WORKS.map(function (w) {
      var inner = '<span class="card__no">' + num(w) + '<span class="card__tag">' + esc(w.tag) + "</span></span>" +
        '<figure class="card__img">' + media(w.cover, "", false, CARD) + "</figure>" +
        '<span class="card__title" lang="ko">' + esc(w.title) + (w.titleEn ? " <em>" + esc(w.titleEn) + "</em>" : "") + "</span>" +
        '<span class="card__meta">' + esc(w.period || w.year || "") + "</span>" +
        (w.card ? '<span class="card__medium" lang="ko">' + esc([w.medium, w.size].filter(Boolean).join(" · ")) + "</span>" : "");
      return w.card
        ? '<div class="card card--plain" data-tag="' + esc(w.tag) + '">' + inner + "</div>"
        : '<a class="card" data-tag="' + esc(w.tag) + '" href="work.html?id=' + w.id + '">' + inner + "</a>";
    }).join("");

    var filters = document.getElementById("index-filters");
    if (filters) {
      var tags = ["All"];
      WORKS.forEach(function (w) { if (tags.indexOf(w.tag) < 0) tags.push(w.tag); });
      filters.innerHTML = tags.map(function (t, i) { return '<button type="button" aria-pressed="' + (i === 0) + '">' + esc(t) + "</button>"; }).join("");
      filters.querySelectorAll("button").forEach(function (b) {
        b.onclick = function () {
          filters.querySelectorAll("button").forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
          grid.querySelectorAll(".card").forEach(function (c) { c.hidden = b.textContent !== "All" && c.getAttribute("data-tag") !== b.textContent; });
        };
      });
    }

    var small = document.getElementById("small-grid"), toggle = document.getElementById("small-toggle");
    if (small && toggle) {
      // Projects: 상세가 있으면 상세로, 없으면(card) 이미지를 새 탭으로. Reels: 인스타 게시물.
      var projects = SMALLW.map(function (w) {
        var href = w.card ? MEDIA + w.cover : "work.html?id=" + w.id;
        return '<a class="small__item small__item--project" href="' + href + '"' + (w.card ? ' target="_blank" rel="noopener"' : "") + ">" +
          '<figure class="small__img small__img--project">' + media(w.cover, "", false, "240px") + "</figure>" +
          '<span class="card__title" lang="ko">' + esc(w.title) + "</span>" +
          '<span class="card__meta">' + esc(w.year || "") + "</span>" +
          '<span class="card__medium" lang="ko">' + esc(w.medium || "") + "</span></a>";
      }).join("");
      var reels = (window.SMALL || []).map(function (s) {
        return '<a class="small__item" href="' + s.url + '" target="_blank" rel="noopener">' +
          '<figure class="small__img">' + media(s.src) + "</figure>" +
          '<span class="card__title" lang="ko">' + esc(s.title) + "</span>" +
          '<span class="card__meta">' + esc(s.date) + " — Instagram ↗</span></a>";
      }).join("");
      small.innerHTML = '<h3 class="label small__sub">Projects</h3><div class="small__row">' + projects + "</div>" +
        '<h3 class="label small__sub">Reels</h3><div class="small__row">' + reels + "</div>";
      toggle.onclick = function () {
        var open = small.hidden;
        small.hidden = !open;
        toggle.setAttribute("aria-expanded", open);
      };
      if (location.hash === "#small") toggle.onclick();
    }
  }

  // ---------- 상세 ----------
  function facts(w) {
    var rows = [
      ["Date", [w.period, w.place].filter(Boolean).join(" — ")],
      ["Exhibition", w.exhibition],
      ["Organized & supported by", w.organizer],
      ["Supported by", w.supported],
      ["Medium", w.medium],
      ["Size", w.size],
      ["Duration", w.duration],
      ["Role", w.role],
      ["Credit", w.credit],
      ["Collaboration", w.collab],
      ["Artists", w.artists]
    ].filter(function (r) { return r[1]; });
    return '<dl class="facts">' + rows.map(function (r) {
      return "<dt>" + r[0] + '</dt><dd lang="ko">' + esc(r[1]) + "</dd>";
    }).join("") + "</dl>";
  }

  function block(b) {
    switch (b.t) {
      case "text":
        return '<section class="b-text' + (b.lead ? " b-text--lead" : "") + '"><div class="b-text__body">' + b.ko.map(function (p) { return ko(p); }).join("") + "</div></section>";
      case "section":
        return '<section class="b-section"><h2 class="label">' + esc(b.h) + '</h2><div class="b-text__body">' + b.ko.map(function (p) { return ko(p); }).join("") + "</div></section>";
      case "reel":
        // 세로 영상: 가운데 화면 높이 안쪽으로, 옆에 설명. 소리는 컨트롤로 켠다.
        return '<section class="b-reel"><div class="b-reel__info"><h2 class="label">' + esc(b.h) + "</h2>" + b.ko.map(function (p) { return ko(p); }).join("") +
          (b.url ? '<a class="more" href="' + b.url + '" target="_blank" rel="noopener">Full version on Instagram ↗</a>' : "") + "</div>" +
          '<figure class="b-reel__video"><video src="' + MEDIA + b.src + '" poster="' + MEDIA + key(b.src) + '-poster.webp" controls muted playsinline preload="metadata"></video></figure></section>';
      case "list":
        return '<section class="b-text"><ul class="b-list" lang="ko">' + b.items.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></section>";
      case "full":
        return '<figure class="b-full' + (b.narrow ? " b-full--narrow" : "") + '">' + media(b.src, "", false, b.narrow ? "(max-width: 1100px) 100vw, 1100px" : "100vw") + cap(b) + "</figure>";
      case "pair":
      case "trio":
        return '<figure class="b-row b-row--' + b.src.length + '">' + b.src.map(function (s) { return "<div>" + media(s, "", false, b.src.length === 2 ? HALF : THIRD) + "</div>"; }).join("") + cap(b) + "</figure>";
      case "grid":
        return '<figure class="b-grid" style="--cols:' + (b.cols || 4) + '">' + b.src.map(function (s) { return "<div>" + media(s, "", false, "(max-width: 600px) 50vw, " + Math.round(100 / (b.cols || 4)) + "vw") + "</div>"; }).join("") + cap(b) + "</figure>";
      case "yt":
        return '<figure class="b-yt"><div class="b-yt__frame"><iframe src="https://www.youtube-nocookie.com/embed/' + b.id + '?rel=0" title="Video" loading="lazy" allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe></div></figure>';
      case "process":
        return '<section class="b-process"><h2 class="label">' + esc(b.h || "Process") + "</h2><ol>" + b.steps.map(function (s, i) {
          return "<li><span>" + pad(i + 1) + " " + esc(s.h) + "</span>" + ko(s.ko) + "</li>";
        }).join("") + "</ol>" + (b.src ? '<div class="b-row b-row--' + b.src.length + '">' + b.src.map(function (s) { return "<div>" + media(s, "", false, THIRD) + "</div>"; }).join("") + "</div>" : "") + "</section>";
    }
    return "";
  }
  // 분야별 섹션: 위쪽 탭(All + 분야), 각 섹션 #앵커, &facet= 로 한 분야만 보기.
  function facets(w, fc) {
    var base = "work.html?id=" + w.id;
    var tabs = '<nav class="facet-tabs" aria-label="Sections"><a href="' + base + '"' + (fc ? "" : ' aria-current="page"') + ">All</a>" +
      w.facets.map(function (f) { return '<a href="' + base + "&facet=" + f.id + '"' + (fc === f ? ' aria-current="page"' : "") + ">" + esc(f.label) + "</a>"; }).join("") + "</nav>";
    return tabs + (fc ? [fc] : w.facets).map(function (f) {
      return '<section class="facet" id="' + f.id + '"><header class="facet__head"><h2>' + esc(f.label) + '</h2><p lang="ko">' + esc(f.credit || "") + "</p>" +
        (fc ? "" : '<a class="facet__link" href="' + base + "&facet=" + f.id + '">View only this section →</a>') + "</header>" +
        f.blocks.map(block).join("") + "</section>";
    }).join("");
  }
  function cap(b) { return b.cap ? "<figcaption>" + esc(b.cap) + "</figcaption>" : ""; }

  function renderWork() {
    var root = document.getElementById("work");
    if (!root) return;
    var q = new URLSearchParams(location.search);
    var id = q.get("id"), facet = q.get("facet");
    // 예전 NIMBUS 주소는 Garage Project 3의 Object 섹션으로 보낸다.
    if (id === "nimbus") { id = "garage3"; facet = facet || "object"; }
    var w = ALL.filter(function (x) { return x.id === id && !x.card; })[0] || WORKS[0];
    var PAGES = (w.small ? SMALLW : WORKS).filter(function (x) { return !x.card; });
    var i = PAGES.indexOf(w);
    document.title = w.title + (w.titleEn ? " " + w.titleEn : "") + " — Rihan Kim";
    var fc = w.facets && facet ? w.facets.filter(function (f) { return f.id === facet; })[0] : null;
    if (fc) document.title = w.title + " — " + fc.label + " — Rihan Kim";
    var url = "https://rihankim.com/work.html?id=" + w.id + (fc ? "&facet=" + fc.id : "");
    [["link[rel=canonical]", "href", url], ['meta[property="og:url"]', "content", url], ['meta[property="og:title"]', "content", document.title]].forEach(function (x) {
      var el = document.querySelector(x[0]); if (el) el.setAttribute(x[1], x[2]);
    });

    var hero = w.hero.video
      ? '<video src="' + MEDIA + w.hero.video + '" poster="' + single(w.hero.poster) + '" autoplay muted loop playsinline></video>'
      : media(w.hero.img, "", true, w.hero.tall ? "(max-width: 900px) 100vw, 640px" : HERO);

    var html =
      '<div class="run"><span>Rihan Kim — Portfolio</span><span>N° ' + num(w) + " / " + esc(w.titleEn || w.title) + "</span></div>" +
      '<section class="opener' + (w.hero.tall ? " opener--tall" : "") + '">' +
        '<div class="opener__info">' +
          '<p class="opener__no">' + num(w) + " — " + esc(w.tag) + "</p>" +
          '<h1 lang="ko">' + esc(w.title) + (w.titleEn ? '<span lang="en">' + esc(w.titleEn) + "</span>" : "") + "</h1>" +
          (w.line ? '<p class="opener__line" lang="ko">' + esc(w.line) + "</p>" : "") +
          facts(w) +
          (w.poster ? '<figure class="poster"><figcaption>Poster</figcaption>' + media(w.poster, "", true, "132px") + "</figure>" : "") +
        "</div>" +
        '<figure class="opener__media">' + hero + "</figure>" +
      "</section>" +
      (w.facets ? facets(w, fc) : w.blocks.map(block).join(""));

    var prev = PAGES[(i + PAGES.length - 1) % PAGES.length], next = PAGES[(i + 1) % PAGES.length];
    html += '<nav class="pager"><a href="work.html?id=' + prev.id + '"><small>Previous — ' + num(prev) + '</small><span lang="ko">' + esc(prev.title) + "</span></a>" +
      (w.small ? '<a href="index.html#small"><small>Index</small><span>Small Works</span></a>' : '<a href="index.html#works"><small>Index</small><span>All works</span></a>') +
      '<a href="work.html?id=' + next.id + '"><small>Next — ' + num(next) + '</small><span lang="ko">' + esc(next.title) + "</span></a></nav>";
    root.innerHTML = html;
  }

  // ---------- Press ----------
  function renderPress() {
    var list = document.getElementById("press-list");
    if (!list) return;
    var related = (window.PRESS_WORKS || []).map(function (id) {
      var w = WORKS.filter(function (x) { return x.id === id; })[0];
      return w ? '<a href="work.html?id=' + w.id + '" lang="ko">' + esc(w.title) + "</a>" : "";
    }).join(", ");
    var rel = document.getElementById("press-related");
    if (rel) rel.innerHTML = related;
    list.innerHTML = (window.PRESS || []).map(function (p) {
      return '<li><a href="' + p.url + '" target="_blank" rel="noopener">' +
        '<span class="pr__date">' + p.date + "</span>" +
        '<span class="pr__outlet" lang="ko">' + esc(p.outlet) + (p.kind ? " <em>" + esc(p.kind) + "</em>" : "") + "</span>" +
        '<span class="pr__title" lang="ko">' + esc(p.title) + "</span>" +
        '<span class="pr__go">↗</span></a></li>';
    }).join("");
  }

  // 메일 주소는 화면에서 조립한다(긁어가기 방지용 간단한 인코딩).
  function renderMail() {
    document.querySelectorAll(".js-mail").forEach(function (a) {
      var addr = a.getAttribute("data-u").split("").reverse().join("") + "@" + a.getAttribute("data-d");
      a.href = "mailto:" + addr;
      a.textContent = addr;
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderIndex(); renderWork(); renderPress(); renderMail();
    var here = document.body.getAttribute("data-page");
    document.querySelectorAll(".nav a").forEach(function (a) { if (a.getAttribute("data-page") === here) a.setAttribute("aria-current", "page"); });
  });
})();
