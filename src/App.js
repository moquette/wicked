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
  componentDidMount() {
    const onscroll = (el, listener) => {
      el.addEventListener("scroll", listener);
    };

    setTimeout(() => document.getElementById("preloader").remove(), 1000);

    const backtotop = document.getElementById("back-to-top");
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
