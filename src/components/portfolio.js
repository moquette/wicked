export const Portfolio = (props) => {
  const data = props.data.portfolio;
  return (
    <section id={data.id} className={data.id + " " + data.classes}>
      <div className="container">
        <h2 className="section-title">{data.title}</h2>
        <div className="row row-cols-1 row-cols-xl-4 row-cols-md-2 row-cols-sm-2 g-3 pt-3">
          {data.project.map((d, i) => (
            <div
              key={i}
              className="col-sm-6"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <div className="card">
                <img
                  className="card-img-top"
                  src={`./assets/images/portfolio/${d.image}`}
                  alt={d.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{d.title}</h5>
                  <p className="card-text">{d.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
