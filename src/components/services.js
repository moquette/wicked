export const Services = (props) => {
  const data = props.data.services;
  return (
    <section id={data.id} className={data.id + " " + data.classes}>
      <div className="container">
        <h2 className="section-title">{data.title}</h2>
        <div className="row g-3 pt-3">
          {data.service.map((d, i) => (
            <div
              key={i}
              className="col-sm-6"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <h3>{d.title}</h3>
              <p>{d.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
