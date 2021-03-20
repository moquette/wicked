export const About = (props) => {
  const data = props.data.about;
  return (
    <section id={data.id} className={data.id + " " + data.classes}>
      <div className="container">
        <h2 className="section-title">{data.title}</h2>
        <div className="row">
          <div className="col">
            <p data-aos="fade-up">{data.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
