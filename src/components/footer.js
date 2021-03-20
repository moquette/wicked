import logo from "../logo.svg";
const currentYear = new Date().getFullYear();
export const Footer = (props) => {
  const data = props.data.footer;
  return (
    <footer id={data.id} className={data.id + " " + data.classes}>
      <p>
        &copy;{currentYear} {props.data.company.name}. All rights reserved
        <br />
        Designed with <span>&hearts;</span> in Sacramento
        <br />
        Powered by Dovebox
        <br />~ Thanks to many ~
      </p>
      <img src={logo} className="logo" alt="logo" />
    </footer>
  );
};
