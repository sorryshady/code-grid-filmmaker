import React from "react";
import "./Home.css";

import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="page home">
      <section className="hero">
        <div className="hero-img">
          <img src="/home/hero.jpg" alt="" />
        </div>

        <div className="hero-header">
          <h1>Nico</h1>
          <h1>Palmer</h1>
        </div>
      </section>

      <section className="sticky-titles">
        <h2>Lumlens is a creative video agency based in London.</h2>

        {/* <h2>It creates lasting brand-customer connections.</h2>

        <h2>We achieve this through technology, and design.</h2> */}
      </section>

      <section className="sticky-work-header">
        <h1>Palmer selects</h1>
      </section>

      <section className="home-work">
        <div className="home-work-list">
          <div className="work-item">
            <p className="primary sm">01 - 05</p>
            <h3>Fragments of Light</h3>
            <div className="work-item-img">
              <img src="/work/work-1.jpg" alt="" />
            </div>
            <h4>Documentary</h4>
          </div>

          <div className="work-item">
            <p className="primary sm">02 - 05</p>
            <h3>Market Pulse</h3>
            <div className="work-item-img">
              <img src="/work/work-2.jpg" alt="" />
            </div>
            <h4>Documentary</h4>
          </div>

          <div className="work-item">
            <p className="primary sm">03 - 05</p>
            <h3>The Stillness Project</h3>
            <div className="work-item-img">
              <img src="/work/work-3.jpg" alt="" />
            </div>
            <h4>Documentary</h4>
          </div>

          <div className="work-item">
            <p className="primary sm">04 - 05</p>
            <h3>Chroma/City</h3>
            <div className="work-item-img">
              <img src="/work/work-4.jpg" alt="" />
            </div>
            <h4>Documentary</h4>
          </div>

          <div className="work-item">
            <p className="primary sm">05 - 05</p>
            <h3>Echoes of Silence</h3>
            <div className="work-item-img">
              <img src="/work/work-5.jpg" alt="" />
            </div>
            <h4>Documentary</h4>
          </div>
        </div>
      </section>

      <section className="reviews">
        <h3>"</h3>
        <h4 id="review-copy">
          Lumlens exceeded our expectations with a stunning video, great
          attention to detail, and seamless communication.
        </h4>
        <h4 id="review-author">- Paul Shaw</h4>

        <div className="reviews-list">
          <div className="review-thumbnail active">
            <img src="/work/work-1.jpg" alt="" />
          </div>
          <div className="review-thumbnail">
            <img src="/work/work-2.jpg" alt="" />
          </div>
          <div className="review-thumbnail">
            <img src="/work/work-3.jpg" alt="" />
          </div>
        </div>
      </section>

      <section className="hobbies">
        <div className="hobby">
          <h4>Cinematography</h4>
        </div>
        <div className="hobby">
          <h4>Cinematography</h4>
        </div>
        <div className="hobby">
          <h4>Cinematography</h4>
        </div>
        <div className="hobby">
          <h4>Cinematography</h4>
        </div>
      </section>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
