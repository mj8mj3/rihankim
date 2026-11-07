(function () {
  var MEDIA = "assets/media/";
  var WORKS = window.WORKS || [];

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function num(w) { return pad(WORKS.indexOf(w) + 1); }

  // 이미지와 mp4를 같은 방식으로 넣는다. mp4는 소리 없이 반복 재생.
  function media(src, cls, eager) {
    if (/\.mp4$/.test(src)) return '<video class="' + (cls || "") + '" src="' + MEDIA + src + '" autoplay muted loop playsinline preload="metadata"></video>';
    return '<img class="' + (cls || "") + '" src="' + MEDIA + src + '" alt=""' + (eager ? "" : ' loading="lazy"') + ">";
  }
  function ko(text, tag) { return "<" + (tag || "p") + ' lang="ko">' + esc(text) + "</" + (tag || "p") + ">"; }

  // ---------- 메인: 작품 색인 ----------
  function renderIndex() {
    var grid = document.getElementById("index-grid");
    if (!grid) return;
    // 카드: 상세 페이지가 없는 작업(card: true)은 링크 없이 작은 이미지와 메타만.
    grid.innerHTML = WORKS.map(function (w) {
      var inner = '<span class="card__no">' + num(w) + '<span class="card__tag">' + esc(w.tag) + "</span></span>" +
        '<figure class="card__img">' + media(w.cover) + "</figure>" +
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
      small.innerHTML = (window.SMALL || []).map(function (s) {
        return '<a class="small__item" href="' + s.url + '" target="_blank" rel="noopener">' +
          '<figure class="small__img">' + media(s.src) + "</figure>" +
          '<span class="card__title" lang="ko">' + esc(s.title) + "</span>" +
          '<span class="card__meta">' + esc(s.date) + " — Instagram ↗</span></a>";
      }).join("");
      toggle.onclick = function () {
        var open = small.hidden;
        small.hidden = !open;
        toggle.setAttribute("aria-expanded", open);
      };
    }
  }

  // ---------- 상세 ----------
  function facts(w) {
    var rows = [
      ["Date", [w.period, w.place].filter(Boolean).join(" — ")],
      ["Exhibition", w.exhibition],
      ["Supported by", w.supported],
      ["Medium", w.medium],
      ["Size", w.size],
      ["Duration", w.duration],
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
      case "full":
        return '<figure class="b-full' + (b.narrow ? " b-full--narrow" : "") + '">' + media(b.src) + cap(b) + "</figure>";
      case "pair":
      case "trio":
        return '<figure class="b-row b-row--' + b.src.length + '">' + b.src.map(function (s) { return "<div>" + media(s) + "</div>"; }).join("") + cap(b) + "</figure>";
      case "grid":
        return '<figure class="b-grid" style="--cols:' + (b.cols || 4) + '">' + b.src.map(function (s) { return "<div>" + media(s) + "</div>"; }).join("") + cap(b) + "</figure>";
      case "yt":
        return '<figure class="b-yt"><div class="b-yt__frame"><iframe src="https://www.youtube-nocookie.com/embed/' + b.id + '?rel=0" title="Video" loading="lazy" allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe></div></figure>';
      case "process":
        return '<section class="b-process"><h2 class="label">Process</h2><ol>' + b.steps.map(function (s, i) {
          return "<li><span>" + pad(i + 1) + " " + esc(s.h) + "</span>" + ko(s.ko) + "</li>";
        }).join("") + "</ol>" + (b.src ? '<div class="b-row b-row--' + b.src.length + '">' + b.src.map(function (s) { return "<div>" + media(s) + "</div>"; }).join("") + "</div>" : "") + "</section>";
    }
    return "";
  }
  function cap(b) { return b.cap ? "<figcaption>" + esc(b.cap) + "</figcaption>" : ""; }

  function renderWork() {
    var root = document.getElementById("work");
    if (!root) return;
    var id = new URLSearchParams(location.search).get("id");
    var PAGES = WORKS.filter(function (x) { return !x.card; });
    var w = PAGES.filter(function (x) { return x.id === id; })[0] || PAGES[0];
    var i = PAGES.indexOf(w);
    document.title = w.title + (w.titleEn ? " " + w.titleEn : "") + " — Rihan Kim";

    var hero = w.hero.video
      ? '<video src="' + MEDIA + w.hero.video + '" poster="' + MEDIA + w.hero.poster + '" autoplay muted loop playsinline></video>'
      : media(w.hero.img, "", true);

    var html =
      '<div class="run"><span>Rihan Kim — Portfolio</span><span>N° ' + num(w) + " / " + esc(w.titleEn || w.title) + "</span></div>" +
      '<section class="opener' + (w.hero.tall ? " opener--tall" : "") + '">' +
        '<div class="opener__info">' +
          '<p class="opener__no">' + num(w) + " — " + esc(w.tag) + "</p>" +
          '<h1 lang="ko">' + esc(w.title) + (w.titleEn ? '<span lang="en">' + esc(w.titleEn) + "</span>" : "") + "</h1>" +
          (w.line ? '<p class="opener__line" lang="ko">' + esc(w.line) + "</p>" : "") +
          facts(w) +
          (w.poster ? '<figure class="poster"><figcaption>Poster</figcaption>' + media(w.poster, "", true) + "</figure>" : "") +
        "</div>" +
        '<figure class="opener__media">' + hero + "</figure>" +
      "</section>" +
      w.blocks.map(block).join("");

    var prev = PAGES[(i + PAGES.length - 1) % PAGES.length], next = PAGES[(i + 1) % PAGES.length];
    html += '<nav class="pager"><a href="work.html?id=' + prev.id + '"><small>Previous — ' + num(prev) + '</small><span lang="ko">' + esc(prev.title) + "</span></a>" +
      '<a href="index.html#works"><small>Index</small><span>All works</span></a>' +
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
