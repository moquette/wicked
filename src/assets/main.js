import bootstrap from "bootstrap/dist/js/bootstrap.min.js";
import smoothscroll from "smoothscroll-polyfill";
import AOS from "aos";

function init() {
  AOS.init({
    once: true,
  });
  smoothscroll.polyfill();

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    const element = el.trim();
    if (all) {
      return [...document.querySelectorAll(element)];
    }
    return document.querySelector(element);
  };

  const navbar = select("#navbarCollapse");
  const bsCollapse = new bootstrap.Collapse(navbar, {
    toggle: false,
  });

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    const selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Navbar links active state on scroll
   */
  const navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    const position = window.scrollY + 61;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      const section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    const elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos + -60,
      behavior: "smooth",
    });
  };

  /**
   * Back to top button
   */
  const backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Scroll with ofset on links with a class name .scrollto
   */
  on(
    "click",
    ".scrollto",
    function (e) {
      if (select(this.hash)) {
        e.preventDefault();
        bsCollapse.hide();
        scrollto(this.hash);
      }
    },
    true
  );

  on(
    "click",
    ".top",
    function (e) {
      if (select(this.hash)) {
        e.preventDefault();
        scrollto(this.hash);
      }
    },
    true
  );
  on(
    "click",
    "body",
    function (e) {
      e.preventDefault();
      bsCollapse.hide();
    },
    true
  );

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener("load", () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });

  /**
   * Preloader
   */
  setTimeout(() => document.getElementById("preloader").remove(), 1000);
}

init();
