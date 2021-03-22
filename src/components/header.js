export const Header = (props) => {
  const data = props.data.header;
  return (
    <nav
      id="navbar"
      className="navbar navbar-light bg-white navbar-expand-md fixed-top"
    >
      <div className="container-fluid bg-white shadow-sm">
        <a className="navbar-brand top" href="#hero">
          Wicked
        </a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarCollapse" className="navbar-collapse collapse">
          <div className="me-auto mb-2 mb-md-0"></div>
          <ul className="navbar-nav d-flex">
            {data.nav.map((d, i) => (
              <li key={i}>
                <a href={d.link} className="nav-link scrollto">
                  {d.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
