import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
export const Testimonials = (props) => {
  const data = props.data.testimonials;
  useEffect(() => {
    new Glide(".glide", {
      type: "carousel",
      perView: 2,
      autoplay: 6000,
      animationDuration: 1000,
      breakpoints: {
        768: {
          perView: 1,
        },
        992: {
          perView: 2,
        },
      },
    }).mount();
  });
  return (
    <section id={data.id} className={data.id + " " + data.classes}>
      <div className="container">
        <h2 className="section-title">{data.title}</h2>

        <div className="row g-3 pt-3 glide">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {data.quote.map((d, i) => (
                <li
                  key={i}
                  className="glide__slide"
                  data-aos="fade-up"
                  data-aos-delay={i * 150}
                >
                  <div className="testimonial-image">
                    <img
                      className="card-img-top rounded-circle"
                      src={`./assets/images/testimonials/${d.image}`}
                      alt={d.image}
                    />
                  </div>
                  <div className="testimonial-content">
                    <q>{d.text}</q>
                    <p>~ {d.title}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="glide__arrows" data-glide-el="controls" hidden>
            <button
              className="glide__arrow glide__arrow--left"
              data-glide-dir="<"
            >
              <i className="bi bi-arrow-left-short"></i>
            </button>
            <button
              className="glide__arrow glide__arrow--right"
              data-glide-dir=">"
            >
              <i className="bi bi-arrow-right-short"></i>
            </button>
          </div>
          <div class="glide__bullets" data-glide-el="controls[nav]">
            <button class="glide__bullet" data-glide-dir="=0"></button>
            <button class="glide__bullet" data-glide-dir="=1"></button>
            <button class="glide__bullet" data-glide-dir="=2"></button>
          </div>
        </div>
      </div>
    </section>
  );
};
