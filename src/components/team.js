export const Team = (props) => {
  const data = props.data.team;
  return (
    <section id={data.id} className={data.id + " " + data.classes}>
      <div className="container">
        <h2 className="section-title">{data.title}</h2>
        <div className="row g-3 pt-3">
          {data.member.map((d, i) => (
            <div key={i} className="col-md-4 text-center" data-aos="zoom-in">
              <div className="py-4 border rounded">
                <img
                  src={`./assets/images/team/${d.image}`}
                  alt={d.image}
                  className="rounded-circle"
                />
                <div className="caption">
                  <h3 className="m-0">{d.name}</h3>
                  <p>{d.title}</p>
                  <p className="small px-4">{d.quote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
