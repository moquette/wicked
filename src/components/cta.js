export const Cta = (props) => {
  const data = props.data.cta;
  return (
    <section id={data.id} className={`${data.id} ${data.classes}`}>
      <div className="container">
        <h2>{data.title}</h2>
        <p>{data.text}</p>
        <a
          href="#contact"
          className="btn btn-dark"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {data.button}
        </a>
      </div>
    </section>
  );
};
