export const Features = (props) => {
  const data = props.data.features;
  return (
    <section id={data.id} className={data.id + " " + data.classes}>
      <div className="container">
        <h2 className="section-title">{data.title}</h2>
        <div className="row gy-3">
          {data.feature.map((d, i) => (
            <div
              key={i}
              className="col-sm-4"
              data-aos="fade-up"
              data-aos-delay={i * 250}
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
