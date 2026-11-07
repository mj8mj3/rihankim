(function () {
  var MEDIA = "assets/media/";
  var LANG_KEY = "rihan-lang";
  var lang = "ko";
  try { lang = localStorage.getItem(LANG_KEY) || "ko"; } catch (e) {}

  function t(work) { return work[lang] || work.ko; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  // 정적 문구: data-ko / data-en 속성을 가진 요소를 현재 언어로 바꾼다.
  function applyStatic() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-ko]").forEach(function (el) { el.textContent = el.getAttribute("data-" + lang) || el.getAttribute("data-ko"); });
    document.querySelectorAll(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.lang === lang); });
  }

  function setLang(l) {
    lang = l;
    try { localStorage.setItem(LANG_KEY, l); } catch (e) {}
    render();
  }

  // 마우스를 올리면 짧은 클립을 재생한다. 터치 기기는 포스터만 보여 준다.
  var canHover = window.matchMedia("(hover: hover)").matches;
  function bindHoverVideo(card) {
    var v = card.querySelector("video");
    if (!v || !canHover) return;
    card.addEventListener("mouseenter", function () { if (!v.src) v.src = v.dataset.src; v.play().catch(function () {}); });
    card.addEventListener("mouseleave", function () { v.pause(); });
  }

  var filter = "all";
  function renderGrid() {
    var grid = document.getElementById("work-grid");
    if (!grid) return;
    var filters = document.getElementById("work-filters");
    var used = { all: 1 };
    WORKS.forEach(function (w) { w.tags.forEach(function (g) { used[g] = 1; }); });
    filters.innerHTML = Object.keys(TAGS).filter(function (k) { return used[k]; }).map(function (k) {
      return '<button type="button" data-tag="' + k + '" aria-pressed="' + (k === filter) + '">' + esc(TAGS[k][lang]) + "</button>";
    }).join("");
    filters.querySelectorAll("button").forEach(function (b) { b.onclick = function () { filter = b.dataset.tag; renderGrid(); }; });

    grid.innerHTML = WORKS.filter(function (w) { return filter === "all" || w.tags.indexOf(filter) >= 0; }).map(function (w, i) {
      var d = t(w);
      return '<a class="card' + (i === 0 && filter === "all" ? " card--wide" : "") + '" href="work.html?id=' + w.id + '">' +
        '<div class="card__media"><img src="' + MEDIA + w.media.poster + '" alt="" loading="lazy">' +
        (w.media.clip ? '<video muted loop playsinline preload="none" data-src="' + MEDIA + w.media.clip + '"></video>' : "") +
        "</div>" +
        '<div class="card__meta"><h3>' + esc(d.title) + "</h3><span>" + w.year + "</span></div>" +
        '<p class="card__line">' + esc(d.medium) + "</p></a>";
    }).join("");
    grid.querySelectorAll(".card").forEach(bindHoverVideo);
  }

  function renderDetail() {
    var root = document.getElementById("work-detail");
    if (!root) return;
    var id = new URLSearchParams(location.search).get("id");
    var idx = WORKS.findIndex(function (w) { return w.id === id; });
    if (idx < 0) idx = 0;
    var w = WORKS[idx], d = t(w);
    document.title = d.title + " — 김리한 Kim Rihan";
    var L = lang === "ko"
      ? { medium: "매체", role: "역할", venue: "발표", year: "연도", back: "작품 목록", prev: "이전 작품", next: "다음 작품" }
      : { medium: "Medium", role: "Role", venue: "Context", year: "Year", back: "All works", prev: "Previous", next: "Next" };

    var hero = w.media.clip
      ? '<video class="detail__video" src="' + MEDIA + w.media.clip + '" poster="' + MEDIA + w.media.poster + '" autoplay muted loop playsinline></video>'
      : '<img class="detail__video" src="' + MEDIA + w.media.poster + '" alt="">';

    var html = '<a class="back" href="index.html#works">← ' + L.back + "</a>" +
      '<header class="detail__head"><h1>' + esc(d.title) + '</h1><p class="detail__line">' + esc(d.line) + "</p></header>" +
      '<figure class="detail__hero">' + hero + "</figure>" +
      '<div class="detail__body"><dl class="facts">' +
      "<dt>" + L.year + "</dt><dd>" + w.year + "</dd>" +
      "<dt>" + L.medium + "</dt><dd>" + esc(d.medium) + "</dd>" +
      "<dt>" + L.role + "</dt><dd>" + esc(d.role) + "</dd>" +
      "<dt>" + L.venue + "</dt><dd>" + esc(d.venue) + (d.link ? '<br><a href="' + d.link.href + '" target="_blank" rel="noopener">' + esc(d.link.label) + "</a>" : "") + "</dd>" +
      '</dl><div class="text">' + d.body.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</div></div>";

    if (w.gallery) {
      html += '<section class="gallery" style="--ratio:' + (w.galleryRatio || "auto") + '">' +
        w.gallery.map(function (g) { return '<img src="' + MEDIA + g + '" alt="" loading="lazy">'; }).join("") + "</section>" +
        (d.galleryNote ? '<p class="gallery__note">' + esc(d.galleryNote) + "</p>" : "");
    }
    if (w.series) {
      html += '<section class="series">' + w.series.map(function (s) {
        var st = s[lang] || s.ko;
        return '<article class="series__item"><div class="card__media"><img src="' + MEDIA + s.id + '/poster.jpg" alt="" loading="lazy">' +
          '<video muted loop playsinline preload="none" data-src="' + MEDIA + s.id + '/clip.mp4"></video></div>' +
          "<h3>" + esc(st[0]) + "</h3><p>" + esc(st[1]) + "</p></article>";
      }).join("") + "</section>";
    }
    var prev = WORKS[(idx + WORKS.length - 1) % WORKS.length], next = WORKS[(idx + 1) % WORKS.length];
    html += '<nav class="pager"><a href="work.html?id=' + prev.id + '"><small>' + L.prev + "</small>" + esc(t(prev).title) + "</a>" +
      '<a href="work.html?id=' + next.id + '"><small>' + L.next + "</small>" + esc(t(next).title) + "</a></nav>";
    root.innerHTML = html;
    root.querySelectorAll(".series__item").forEach(bindHoverVideo);
  }

  function render() { applyStatic(); renderGrid(); renderDetail(); }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".lang button").forEach(function (b) { b.onclick = function () { setLang(b.dataset.lang); }; });
    var y = document.getElementById("year"); if (y) y.textContent = new Date().getFullYear();
    render();
  });
})();
