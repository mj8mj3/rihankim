(function () {
  var MEDIA = "assets/media/";
  var WORKS = window.WORKS || [];

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function num(w) { return pad(WORKS.indexOf(w) + 1); }

  // 이미지와 mp4를 같은 방식으로 넣는다. mp4는 소리 없이 반복 재생.
  function media(src, cls) {
    if (/\.mp4$/.test(src)) return '<video class="' + (cls || "") + '" src="' + MEDIA + src + '" autoplay muted loop playsinline preload="metadata"></video>';
    return '<img class="' + (cls || "") + '" src="' + MEDIA + src + '" alt="" loading="lazy">';
  }
  function ko(text, tag) { return "<" + (tag || "p") + ' lang="ko">' + esc(text) + "</" + (tag || "p") + ">"; }

  // ---------- 메인: 작품 색인 ----------
  function renderIndex() {
    var grid = document.getElementById("index-grid");
    if (!grid) return;
    grid.innerHTML = WORKS.filter(function (w) { return !w.other; }).map(function (w) {
      return '<a class="card" href="work.html?id=' + w.id + '">' +
        '<span class="card__no">' + num(w) + "</span>" +
        '<figure class="card__img">' + media(w.cover) + "</figure>" +
        '<span class="card__title" lang="ko">' + esc(w.title) + "</span>" +
        '<span class="card__meta">' + esc(w.period || w.year || "") + "</span></a>";
    }).join("");

    var list = document.getElementById("other-list");
    if (list) list.innerHTML = WORKS.filter(function (w) { return w.other; }).map(function (w) {
      return '<li><a href="work.html?id=' + w.id + '">' +
        '<span class="ol__no">' + num(w) + "</span>" +
        '<span class="ol__title" lang="ko">' + esc(w.title) + (w.titleEn ? " <em>" + esc(w.titleEn) + "</em>" : "") + "</span>" +
        '<span class="ol__medium">' + esc(w.medium || "") + "</span>" +
        '<span class="ol__year">' + esc(w.year || "") + "</span></a></li>";
    }).join("");
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
    var w = WORKS.filter(function (x) { return x.id === id; })[0] || WORKS[0];
    var i = WORKS.indexOf(w);
    document.title = w.title + (w.titleEn ? " " + w.titleEn : "") + " — Rihan Kim";

    var hero = w.hero.video
      ? '<video src="' + MEDIA + w.hero.video + '" poster="' + MEDIA + w.hero.poster + '" autoplay muted loop playsinline></video>'
      : media(w.hero.img);

    var html =
      '<div class="run"><span>Rihan Kim — Portfolio</span><span>N° ' + num(w) + " / " + esc(w.titleEn || w.title) + "</span></div>" +
      '<section class="opener' + (w.hero.tall ? " opener--tall" : "") + '">' +
        '<div class="opener__info">' +
          '<p class="opener__no">' + num(w) + "</p>" +
          '<h1 lang="ko">' + esc(w.title) + (w.titleEn ? '<span lang="en">' + esc(w.titleEn) + "</span>" : "") + "</h1>" +
          (w.line ? '<p class="opener__line" lang="ko">' + esc(w.line) + "</p>" : "") +
          facts(w) +
          (w.poster ? '<figure class="poster"><figcaption>Poster</figcaption>' + media(w.poster) + "</figure>" : "") +
        "</div>" +
        '<figure class="opener__media">' + hero + "</figure>" +
      "</section>" +
      w.blocks.map(block).join("");

    var prev = WORKS[(i + WORKS.length - 1) % WORKS.length], next = WORKS[(i + 1) % WORKS.length];
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
