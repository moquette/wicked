export const Clients = (props) => {
  const data = props.data.clients;
  return (
    <section id={data.id} className={data.id + " " + data.classes}>
      <div className="container">
        <div className="row d-flex align-items-center" data-aos="zoom-in">
          {data.client.map((d, i) => (
            <div className="col-lg-2 col-md-4 col-4" key={i}>
              <img
                className="img-fluid"
                src={`./img/clients/${d.image}`}
                alt={d.title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
