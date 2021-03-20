import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Top } from "../components/top";
import { Preloader } from "../components/preloader";
import "./MainLayout.module.scss";

const MainLayout = (props) => {
  const data = props.data;

  return (
    <>
      <header
        id={data.header.id}
        className={`${data.header.id} ${data.header.classes}`}
      >
        <Header data={data} />
      </header>
      <main>{props.children}</main>
      <footer
        id={data.footer.id}
        className={`${data.footer.id} ${data.footer.classes}`}
      >
        <Footer data={data} />
      </footer>
      <Top />
      <Preloader />
    </>
  );
};

export default MainLayout;
