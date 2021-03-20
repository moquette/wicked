export const Testimonials = (props) => {
  const data = props.data.testimonials;
  return (
    <section id={data.id} className={data.id + " " + data.classes}>
      <div className="container">
        <h2 className="section-title">{data.title}</h2>
        <div className="row g-3 pt-3">
          {data.quote.map((d, i) => (
            <div
              key={i}
              className="col-md-4 pb-5"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <div className="testimonial-image">
                <img
                  className="card-img-top rounded-circle"
                  src={`img/testimonials/${d.image}`}
                  alt={d.image}
                />
              </div>
              <div className="testimonial-content">
                <q>{d.text}</q>
                <p>~ {d.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
