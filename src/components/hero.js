export const Hero = (props) => {
  const data = props.data.hero;
  return (
    <section id={data.id} className={data.id + " " + data.classes}>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h2 data-aos="fade-up">{props.data.company.name}</h2>
            <p data-aos="fade-up" data-aos-delay="150">
              {data.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
