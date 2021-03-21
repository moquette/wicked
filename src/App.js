import smoothscroll from "smoothscroll-polyfill";
import React, { Component } from "react";
import JsonData from "./data/data.json";
import MainLayout from "./layouts/MainLayout";
import { Hero } from "./components/hero";
import { Features } from "./components/features";
import { Cta } from "./components/cta";
import { Clients } from "./components/clients";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Portfolio } from "./components/portfolio";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/team";
import { Contact } from "./components/contact";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = JsonData;
  }

  init() {
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
      const position = window.scrollY - 0;
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
        top: elementPos + 1,
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

          const navbar = select("#navbarCollapse");
          if (navbar.classList.contains("show")) {
            navbar.classList.remove("show");
          }
          scrollto(this.hash);
        }
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

  componentDidMount() {
    this.init();
  }

  render() {
    const app = this.state;

    const renderHero = () => {
      if (app.hero) return <Hero data={app} />;
    };
    const renderFeatures = () => {
      if (app.features) return <Features data={app} />;
    };
    const renderCta = () => {
      if (app.cta) return <Cta data={app} />;
    };
    const renderClients = () => {
      if (app.clients) return <Clients data={app} />;
    };
    const renderAbout = () => {
      if (app.about) return <About data={app} />;
    };
    const renderServices = () => {
      if (app.services) return <Services data={app} />;
    };
    const renderPortfolio = () => {
      if (app.portfolio) return <Portfolio data={app} />;
    };
    const renderTestimonials = () => {
      if (app.testimonials) return <Testimonials data={app} />;
    };
    const renderTeam = () => {
      if (app.team) return <Team data={app} />;
    };
    const renderContact = () => {
      if (app.contact) return <Contact data={app} />;
    };
    return (
      <MainLayout data={app}>
        {renderHero()}
        <section id="feature" className="m-0 p-0">
          {renderFeatures()}
          {renderCta()}
          {renderClients()}
        </section>
        {renderAbout()}
        {renderServices()}
        {renderPortfolio()}
        {renderTestimonials()}
        {renderTeam()}
        {renderContact()}
      </MainLayout>
    );
  }
}

export default App;
