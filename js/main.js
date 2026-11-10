(function () {
  var MEDIA = "assets/media/";
  var ALL = window.WORKS || [];
  var SIZES = window.MEDIA_SIZES || {};
  // 대표 작업(Works) · 진행 중(Ongoing) · 작은 프로젝트(Small Works 안 Projects). 번호는 각 묶음 안에서 매긴다.
  var WORKS = ALL.filter(function (w) { return !w.school && !w.ongoing; });
  var ONGOING = ALL.filter(function (w) { return w.ongoing; });
  var SCHOOL = ALL.filter(function (w) { return w.school; });
  var REDUCE = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function num(w) { return w.ongoing ? "O" + pad(ONGOING.indexOf(w) + 1) : w.school ? "P" + pad(SCHOOL.indexOf(w) + 1) : pad(WORKS.indexOf(w) + 1); }
  function group(w) { return w.ongoing ? ONGOING : w.school ? SCHOOL : WORKS; }

  // 이미지와 mp4를 같은 방식으로 넣는다. 이미지는 media-sizes.js 목록이 있으면 WebP 여러 폭(srcset).
  function key(src) { return src.replace(/\.(jpg|jpeg|png|webp)$/i, ""); }
  function srcset(k) { return SIZES[k].w.map(function (w) { return MEDIA + k + "-" + w + ".webp " + w + "w"; }).join(", "); }
  function single(src, max) {
    var e = SIZES[key(src)];
    if (!e) return MEDIA + src;
    var w = e.w.filter(function (x) { return x <= (max || 2400); }).pop() || e.w[0];
    return MEDIA + key(src) + "-" + w + ".webp";
  }
  function largest(src) {
    var e = SIZES[key(src)];
    return e ? MEDIA + key(src) + "-" + e.w[e.w.length - 1] + ".webp" : MEDIA + src;
  }
  function media(src, cls, eager, sizes, alt) {
    if (/\.mp4$/.test(src)) return '<video class="' + (cls || "") + '" src="' + MEDIA + src + '" poster="' + MEDIA + src.replace(/.mp4$/, "") + '-poster.webp" autoplay muted loop playsinline controls preload="metadata"></video>';
    var e = SIZES[key(src)];
    var attrs = e
      ? ' src="' + MEDIA + key(src) + "-" + e.w[0] + '.webp" srcset="' + srcset(key(src)) + '" sizes="' + (sizes || "100vw") + '" width="' + e.size[0] + '" height="' + e.size[1] + '"'
      : ' src="' + MEDIA + src + '"';
    return '<img class="' + (cls || "") + '"' + attrs + ' alt="' + esc(alt || "") + '"' + (eager ? ' fetchpriority="high"' : ' loading="lazy" decoding="async"') + ">";
  }
  var HALF = "(max-width: 720px) 100vw, 50vw", THIRD = "(max-width: 720px) 50vw, 33vw";
  function ko(text, tag) { return "<" + (tag || "p") + ' lang="ko">' + esc(text) + "</" + (tag || "p") + ">"; }
  function place(w) { return w.exhibition || w.place || w.credit || ""; }

  // 포스터 크게 보기. 배경·이미지 클릭이나 Esc로 닫고, 닫으면 원래 버튼으로 포커스를 돌린다.
  function lightbox(url, from) {
    var box = document.createElement("div");
    box.className = "lightbox";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    box.setAttribute("aria-label", "Poster");
    box.innerHTML = '<img src="' + url + '" alt=""><button class="lightbox__close" type="button">Close ✕</button>';
    function close() { box.remove(); document.removeEventListener("keydown", onKey); document.documentElement.style.overflow = ""; if (from) from.focus(); }
    function onKey(e) { if (e.key === "Escape") close(); }
    box.addEventListener("click", close);
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    document.body.appendChild(box);
    box.querySelector("button").focus();
  }
  document.addEventListener("click", function (e) {
    var t = e.target.closest && e.target.closest("[data-full]");
    if (t) { e.preventDefault(); lightbox(t.getAttribute("data-full"), t); }
  });

  // ---------- 홈: 번호 매긴 작품 색인 ----------
  var GRID_PATTERN = [8, 4, 4, 4, 4, 6, 6];
  function layoutGrid(grid) {
    var vis = [].slice.call(grid.children).filter(function (t) { return !t.hidden; });
    vis.forEach(function (t, i) {
      var span = GRID_PATTERN[i % GRID_PATTERN.length];
      // 마지막 줄이 비지 않게: 남은 개수에 맞춰 채운다.
      t.style.gridColumn = "span " + span;
      t.querySelector(".tile__img").style.aspectRatio = span === 4 ? "4 / 5" : "3 / 2";
    });
  }

  function renderIndex() {
    var sel = document.getElementById("intro-sel");
    if (sel) sel.innerHTML = WORKS.filter(function (w) { return !w.card; }).slice(0, 5).map(function (w) {
      return '<li><a href="work.html?id=' + w.id + '"><span class="no">' + num(w) + '</span><span lang="ko">' + esc(w.title) + '</span><span class="mono">' + esc(w.tag) + "</span></a></li>";
    }).join("") + '<li class="more"><a href="#works"><span class="no">→</span><span>All works (' + pad(WORKS.length) + ")</span></a></li>";
    var list = document.getElementById("index-list");
    if (!list) return;

    // 표: N° · 제목 · 분야 · 장소/전시 · 연도
    list.innerHTML = WORKS.map(function (w) {
      var inner = '<span class="row__thumb">' + media(w.cover, "", false, "25vw") + "</span>" +
        '<span class="row__no no">' + num(w) + "</span>" +
        '<span class="row__title" lang="ko">' + esc(w.title) + (w.titleEn ? " <em lang=\"en\">" + esc(w.titleEn) + "</em>" : "") + "</span>" +
        '<span class="row__disc mono">' + esc(w.tag) + "</span>" +
        '<span class="row__place" lang="ko">' + esc(place(w)) + "</span>" +
        '<span class="row__year mono">' + esc(w.year || "") + (w.card ? "" : " <i aria-hidden=\"true\">→</i>") + "</span>";
      return '<li class="row" data-tag="' + esc(w.tag) + '" data-cover="' + esc(single(w.cover, 1400)) + '">' +
        (w.card ? "<div>" + inner + "</div>" : '<a href="work.html?id=' + w.id + '">' + inner + "</a>") + "</li>";
    }).join("");

    // 그리드: 같은 작품을 큰 이미지로
    var grid = document.getElementById("index-grid");
    grid.innerHTML = WORKS.map(function (w) {
      var inner = '<figure class="tile__img">' + media(w.cover, "", false, "(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 66vw") + "</figure>" +
        '<span class="tile__meta"><span class="no">' + num(w) + '</span><strong lang="ko">' + esc(w.title) + '</strong><span class="label">' + esc(w.year || "") + "</span>" +
        '<span class="sub mono">' + esc(w.tag) + "</span></span>";
      return w.card ? '<div class="tile" data-tag="' + esc(w.tag) + '">' + inner + "</div>"
        : '<a class="tile" data-tag="' + esc(w.tag) + '" href="work.html?id=' + w.id + '">' + inner + "</a>";
    }).join("");
    layoutGrid(grid);

    // 분야 필터 (개수 표시)
    var filters = document.getElementById("index-filters");
    var tags = ["All"], counts = { All: WORKS.length };
    WORKS.forEach(function (w) { if (tags.indexOf(w.tag) < 0) { tags.push(w.tag); counts[w.tag] = 0; } counts[w.tag]++; });
    filters.innerHTML = tags.map(function (t, i) { return '<button type="button" data-tag="' + esc(t) + '" aria-pressed="' + (i === 0) + '">' + esc(t) + "<sup>" + counts[t] + "</sup></button>"; }).join("");
    filters.querySelectorAll("button").forEach(function (b) {
      b.onclick = function () {
        var t = b.getAttribute("data-tag");
        filters.querySelectorAll("button").forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
        document.querySelectorAll("#index-grid .tile, #index-list .row").forEach(function (c) { c.hidden = t !== "All" && c.getAttribute("data-tag") !== t; });
        layoutGrid(grid);
      };
    });
    document.getElementById("index-count").textContent = "(" + pad(WORKS.length) + ")";

    // 표 ↔ 그리드
    var views = document.querySelectorAll(".view button"), cols = document.querySelector(".idx__cols");
    function setView(v) {
      views.forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-view") === v); });
      grid.hidden = v !== "grid"; list.hidden = v !== "list";
      if (cols) cols.hidden = v !== "list";
      try { localStorage.setItem("rk1-view", v); } catch (e) {}
    }
    views.forEach(function (b) { b.onclick = function () { setView(b.getAttribute("data-view")); }; });
    var saved = null; try { saved = localStorage.getItem("rk1-view"); } catch (e) {}
    if (saved === "grid") setView("grid");

    // 표 위 미리보기(마우스 있는 화면만)
    if (matchMedia("(hover: hover) and (min-width: 721px)").matches) {
      var peek = document.createElement("div");
      peek.className = "peek"; peek.setAttribute("aria-hidden", "true"); peek.innerHTML = '<img alt="">';
      document.body.appendChild(peek);
      var pimg = peek.firstChild;
      list.addEventListener("mousemove", function (e) { peek.style.left = Math.min(e.clientX + 200, innerWidth - 170) + "px"; peek.style.top = e.clientY + "px"; });
      list.querySelectorAll(".row").forEach(function (r) {
        r.addEventListener("mouseenter", function () { pimg.src = r.dataset.cover; peek.classList.add("on"); });
        r.addEventListener("mouseleave", function () { peek.classList.remove("on"); });
      });
    }

    // Ongoing
    var ongoing = document.getElementById("ongoing-grid");
    document.getElementById("ongoing-count").textContent = "(" + pad(ONGOING.length) + ")";
    ongoing.innerHTML = ONGOING.map(function (w) {
      return '<a class="ongo__item" href="work.html?id=' + w.id + '">' +
        "<figure>" + media(w.cover, "", false, "(max-width: 720px) 100vw, 20vw") + "</figure>" +
        '<div class="ongo__body"><div class="top"><span class="no">' + num(w) + '</span><span class="badge">' + esc(w.status) + "</span></div>" +
        '<h3 lang="ko">' + esc(w.title) + "</h3>" +
        '<span class="label">' + esc(w.tag) + " — " + esc(w.period) + "</span>" +
        (w.line ? ko(w.line) : "") +
        '<span class="go">Open — ' + (w.facets || []).map(function (f) { return esc(f.label); }).join(" / ") + " →</span></div></a>";
    }).join("");

    // Small Works: Projects(상세 있으면 상세로, 없으면 이미지 크게) + Reels(인스타그램)
    var small = document.getElementById("small-grid");
    var projects = SCHOOL.map(function (w) {
      var href = w.card ? largest(w.cover) : "work.html?id=" + w.id;
      return '<a class="sm" href="' + href + '"' + (w.card ? ' target="_blank" rel="noopener"' : "") + ">" +
        "<figure>" + media(w.cover, "", false, "(max-width: 720px) 50vw, 25vw") + "</figure>" +
        '<span class="tile__meta"><span class="no">' + num(w) + '</span><strong lang="ko">' + esc(w.title) + '</strong><span class="label">' + esc(w.year || "") + "</span>" +
        '<span class="sub mono">' + esc(w.tag) + "</span></span></a>";
    }).join("");
    var reels = (window.SMALL || []).map(function (s, i) {
      return '<a class="sm sm--reel" href="' + s.url + '" target="_blank" rel="noopener">' +
        "<figure>" + media(s.src, "", false, "(max-width: 720px) 50vw, 25vw") + "</figure>" +
        '<span class="tile__meta"><span class="no">R' + pad(i + 1) + '</span><strong lang="ko">' + esc(s.title) + '</strong><span class="label">↗</span>' +
        '<span class="sub mono">' + esc(s.date) + " — " + esc(s.tool) + "</span></span></a>";
    }).join("");
    small.innerHTML = '<h3 class="small__sub label"><span>Projects</span><span>(' + pad(SCHOOL.length) + ")</span></h3>" + projects +
      '<h3 class="small__sub label"><span>Reels — Instagram</span><span>(' + pad((window.SMALL || []).length) + ")</span></h3>" + reels;
  }

  // ---------- 상세 ----------
  function facts(w) {
    var rows = [
      ["Date", w.period],
      ["Venue", w.place],
      ["Exhibition", w.exhibition],
      ["Organizer", w.organizer],
      ["Support", w.supported],
      ["Medium", w.medium],
      ["Size", w.size],
      ["Duration", w.duration],
      ["Role", w.role],
      ["Credit", w.credit],
      ["Collab.", w.collab],
      ["Artists", w.artists]
    ].filter(function (r) { return r[1]; });
    return '<dl class="facts">' + rows.map(function (r) {
      return "<div><dt>" + r[0] + '</dt><dd lang="ko">' + esc(r[1]) + "</dd></div>";
    }).join("") + "</dl>";
  }

  function cap(b) { return b.cap ? "<figcaption>" + esc(b.cap) + "</figcaption>" : ""; }
  function block(b) {
    switch (b.t) {
      case "text":
        return '<section class="b-text' + (b.lead ? " b-text--lead" : "") + '"><div class="b-text__body">' + b.ko.map(function (p) { return ko(p); }).join("") + "</div></section>";
      case "section":
        return '<section class="b-section"><h2 class="label">' + esc(b.h) + '</h2><div class="b-text__body">' + b.ko.map(function (p) { return ko(p); }).join("") + "</div></section>";
      case "videos":
        // 긴 영상 여러 편: 나란히, 누를 때만 재생(미리 받기 없음).
        return '<section class="b-videos">' + b.items.map(function (v) {
          return '<figure class="b-videos__item" style="flex:' + v.ar + ' 1 0;max-width:calc(80vh * ' + v.ar + ')"><video style="aspect-ratio:' + v.ar + '" src="' + MEDIA + v.src + '" poster="' + MEDIA + v.src.replace(/\.mp4$/, "") + '-poster.webp" controls playsinline preload="none"></video>' +
            "<figcaption>" + esc(v.cap) + "</figcaption></figure>";
        }).join("") + "</section>";
      case "reel":
        return '<section class="b-reel"><div class="b-reel__info"><h2 class="label">' + esc(b.h) + "</h2>" + b.ko.map(function (p) { return ko(p); }).join("") +
          (b.url ? '<p><a class="more" href="' + b.url + '" target="_blank" rel="noopener">Full version on Instagram ↗</a></p>' : "") + "</div>" +
          '<figure class="b-reel__video"><video src="' + MEDIA + b.src + '" poster="' + MEDIA + key(b.src) + '-poster.webp" controls muted playsinline preload="metadata"></video></figure></section>';
      case "link":
        return '<section class="b-text"><p class="b-text__body"><a class="more" href="' + b.url + '" target="_blank" rel="noopener">' + esc(b.label) + "</a></p></section>";
      case "list":
        return '<section class="b-text"><ul class="b-list" lang="ko">' + b.items.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></section>";
      case "full":
        return '<figure class="b-full' + (b.narrow ? " b-full--narrow" : "") + '">' + media(b.src, "", false, b.narrow ? "(max-width: 1100px) 100vw, 66vw" : "100vw") + cap(b) + "</figure>";
      case "pair":
      case "trio":
        return '<figure class="b-row b-row--' + b.src.length + '">' + b.src.map(function (s) { return "<div>" + media(s, "", false, b.src.length === 2 ? HALF : THIRD) + "</div>"; }).join("") + cap(b) + "</figure>";
      case "grid":
        return '<figure class="b-grid" style="--cols:' + (b.cols || 4) + '">' + b.src.map(function (s) { return "<div>" + media(s, "", false, "(max-width: 720px) 50vw, " + Math.round(100 / (b.cols || 4)) + "vw") + "</div>"; }).join("") + cap(b) + "</figure>";
      case "yt":
        return '<figure class="b-yt"><div class="b-yt__frame"><iframe src="https://www.youtube-nocookie.com/embed/' + b.id + '?rel=0" title="Video" loading="lazy" allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe></div></figure>';
      case "process":
        return '<section class="b-process"><h2 class="label">' + esc(b.h || "Process") + "</h2><ol>" + b.steps.map(function (s, i) {
          return "<li><span>" + pad(i + 1) + " — " + esc(s.h) + "</span>" + ko(s.ko) + "</li>";
        }).join("") + "</ol>" + (b.src ? '<div class="b-row b-row--' + b.src.length + '">' + b.src.map(function (s) { return "<div>" + media(s, "", false, THIRD) + "</div>"; }).join("") + "</div>" : "") + "</section>";
    }
    return "";
  }

  // 분야별 섹션: 위쪽 탭(All + 분야), 각 섹션 #앵커, &facet= 로 한 분야만 보기.
  var LETTERS = "ABCDEFGHIJ";
  function facets(w, fc) {
    var base = "work.html?id=" + w.id;
    var tabs = '<nav class="facet-tabs" aria-label="Sections"><a href="' + base + '"' + (fc ? "" : ' aria-current="page"') + ">All</a>" +
      w.facets.map(function (f, i) { return '<a href="' + base + "&facet=" + f.id + '"' + (fc === f ? ' aria-current="page"' : "") + ">" + LETTERS[i] + " — " + esc(f.label) + "</a>"; }).join("") + "</nav>";
    return tabs + (fc ? [fc] : w.facets).map(function (f) {
      var i = w.facets.indexOf(f);
      return '<section class="facet" id="' + f.id + '"><header class="facet__head g"><span class="no">' + LETTERS[i] + "</span><h2>" + esc(f.label) + '</h2><p lang="ko">' + esc(f.credit || "") + "</p>" +
        (fc ? '<a class="facet__link" href="' + base + '">All sections →</a>' : '<a class="facet__link" href="' + base + "&facet=" + f.id + '">Only this section →</a>') + "</header>" +
        '<div class="flow">' + f.blocks.map(block).join("") + "</div></section>";
    }).join("");
  }

  function renderWork() {
    var root = document.getElementById("work");
    if (!root) return;
    var q = new URLSearchParams(location.search);
    var id = q.get("id"), facet = q.get("facet");
    // 예전 주소 호환
    if (id === "nimbus") { id = "garage3"; facet = facet || "object"; }
    if (id === "sdf2026" && /^(team1|book|process)$/.test(facet || "")) { id = "gongbaek"; facet = "branding"; }
    if (id === "sdf2026" && /^(object|research)$/.test(facet || "")) { id = "gongbaek"; facet = "product"; }
    if (id === "sdf2026" && facet === "overview") facet = "brand";
    var w = ALL.filter(function (x) { return x.id === id && !x.card; })[0] || WORKS[0];
    var PAGES = group(w).filter(function (x) { return !x.card; });
    var i = PAGES.indexOf(w);
    var fc = w.facets && facet ? w.facets.filter(function (f) { return f.id === facet; })[0] : null;
    document.title = w.title + (fc ? " — " + fc.label : w.titleEn ? " " + w.titleEn : "") + " — Rihan Kim";
    var url = "https://rihankim.com/work.html?id=" + w.id + (fc ? "&facet=" + fc.id : "");
    [["link[rel=canonical]", "href", url], ['meta[property="og:url"]', "content", url], ['meta[property="og:title"]', "content", document.title]].forEach(function (x) {
      var el = document.querySelector(x[0]); if (el) el.setAttribute(x[1], x[2]);
    });
    var groupName = w.ongoing ? "Ongoing" : w.school ? "Small Works" : "Works";
    var groupHref = w.ongoing ? "index.html#ongoing" : w.school ? "index.html#small" : "index.html#works";

    var hero = w.hero.video
      ? '<video src="' + MEDIA + w.hero.video + '" poster="' + single(w.hero.poster) + '" autoplay muted loop playsinline aria-label="' + esc(w.title) + ' — video excerpt"></video>'
      : media(w.hero.img, "", true, w.hero.tall ? "(max-width: 720px) 100vw, 60vw" : "100vw", w.title);

    var side = facts(w) +
      (w.poster ? '<figure class="poster"><button class="poster__open" type="button" data-full="' + largest(w.poster) + '" aria-label="Poster — view large">' + media(w.poster, "", false, "96px") + '</button><figcaption>Poster<br>Click to enlarge ↗</figcaption></figure>' : "");
    var btns = (w.site ? '<a class="btn btn--solid" href="' + w.site + '" target="_blank" rel="noopener">Visit site <span>↗</span></a>' : "") +
      '<a class="btn" href="#next">Next work <span>↓</span></a>' +
      '<a class="btn" href="#contact">Enquire <span>→</span></a>';

    var html =
      '<div class="w-top g mono"><a href="' + groupHref + '">← ' + groupName + '</a><span class="mid">Rihan Kim — ' + esc(w.tag) + "</span>" +
        '<span class="pos">N° ' + num(w) + " / " + pad(PAGES.length) + "</span></div>" +
      '<header class="w-head g"><span class="no">N° ' + num(w) + "</span>" +
        '<h1 lang="ko">' + esc(w.title) + (w.titleEn ? '<span lang="en">' + esc(w.titleEn) + "</span>" : "") + "</h1>" +
        '<p class="tags mono"><span>' + esc(w.tag) + "</span><span>" + esc(w.year || "") + "</span>" + (w.status ? '<span class="badge">' + esc(w.status) + "</span>" : "") + "</p></header>" +
      '<figure class="w-hero' + (w.hero.tall ? " w-hero--tall" : "") + '">' + hero + "</figure>" +
      '<section class="dossier g">' +
        (w.line ? '<div class="dossier__lead">' + ko(w.line) + '<div class="btns">' + btns + "</div></div>" : "") +
        '<div class="dossier__side">' + side + (w.line ? "" : '<div class="btns" style="display:flex;gap:10px;flex-wrap:wrap">' + btns + "</div>") + "</div>" +
      "</section>" +
      (w.facets ? facets(w, fc) : '<div class="flow">' + (w.blocks || []).map(block).join("") + "</div>");

    var prev = PAGES[(i + PAGES.length - 1) % PAGES.length], next = PAGES[(i + 1) % PAGES.length];
    html += '<nav class="next" id="next" aria-label="More work">' +
      '<a class="next__main" href="work.html?id=' + next.id + '"><span class="label">Next — N° ' + num(next) + " · " + esc(next.tag) + "</span>" +
        '<strong lang="ko">' + esc(next.title) + " →</strong><figure>" + media(next.cover, "", false, "(max-width: 720px) 100vw, 25vw") + "</figure></a>" +
      '<div class="next__sub">' +
        '<a href="work.html?id=' + prev.id + '"><span class="label">← Previous — N° ' + num(prev) + '</span><span lang="ko">' + esc(prev.title) + "</span></a>" +
        '<a href="' + groupHref + '"><span class="label">Index</span><span>All ' + groupName.toLowerCase() + " (" + pad(PAGES.length) + ")</span></a>" +
        '<a href="about.html"><span class="label">Information</span><span>About &amp; CV →</span></a>' +
      "</div></nav>";
    root.innerHTML = html;
    if (location.hash && location.hash !== "#next") { var t = document.querySelector(location.hash); if (t) t.scrollIntoView(); }
  }

  // ---------- Press ----------
  function renderPress() {
    var list = document.getElementById("press-list");
    if (!list) return;
    var related = (window.PRESS_WORKS || []).map(function (id) {
      var w = WORKS.filter(function (x) { return x.id === id; })[0];
      return w ? '<a href="work.html?id=' + w.id + '" lang="ko">' + esc(w.title) + "</a>" : "";
    }).filter(Boolean).join(", ");
    document.getElementById("press-related").innerHTML = related;
    var P = window.PRESS || [];
    document.getElementById("press-count").textContent = "(" + pad(P.length) + ")";
    list.innerHTML = P.map(function (p, n) {
      return '<li><a href="' + p.url + '" target="_blank" rel="noopener">' +
        '<span class="pr__no no">' + pad(n + 1) + "</span>" +
        '<span class="pr__date mono">' + esc(p.date) + "</span>" +
        '<span class="pr__outlet" lang="ko">' + esc(p.outlet) + (p.kind ? " <em>" + esc(p.kind) + "</em>" : "") + "</span>" +
        '<span class="pr__title" lang="ko">' + esc(p.title) + "</span>" +
        '<span class="pr__go" aria-hidden="true">↗</span></a></li>';
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
  function clock() {
    var els = document.querySelectorAll(".js-clock");
    if (!els.length) return;
    function tick() {
      var s = new Date().toLocaleTimeString("en-GB", { timeZone: "Asia/Seoul", hour: "2-digit", minute: "2-digit" });
      els.forEach(function (e) { e.textContent = s + " KST"; });
    }
    tick(); setInterval(tick, 30000);
  }
  // 화면에 들어올 때 살짝 떠오르게. 움직임 줄이기 설정이면 없음.
  function reveal() {
    if (REDUCE || !("IntersectionObserver" in window)) return;
    var els = document.querySelectorAll(".tile, .sm, .ongo__item, .flow > *, .facet__head, .cv__sec, .next");
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -5% 0px", threshold: 0.02 });
    els.forEach(function (e) { e.classList.add("rv"); io.observe(e); });
  }
  // 움직임 줄이기: 자동 재생 영상은 멈추고 포스터만.
  function calmVideos() {
    if (!REDUCE) return;
    document.querySelectorAll("video[autoplay]").forEach(function (v) { v.removeAttribute("autoplay"); v.pause(); v.setAttribute("controls", ""); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderIndex(); renderWork(); renderPress(); renderMail(); clock(); calmVideos(); reveal();
    var here = document.body.getAttribute("data-page");
    document.querySelectorAll(".nav a").forEach(function (a) { if (a.getAttribute("data-page") === here) a.setAttribute("aria-current", "page"); });
  });
})();
