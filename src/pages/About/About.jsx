import React from "react";
import "./About.css";

import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

import ReactLenis from "lenis/react";

const About = () => {
  return (
    <ReactLenis root>
      <div className="page about">
        <section className="about-header">
          <h1>Est</h1>
          <h1>1997</h1>
        </section>

        <section className="about-hero">
          <div className="about-hero-img">
            <img src="/about/about-hero.jpg" alt="" />
          </div>
        </section>

        <section className="about-me-copy">
          <div className="about-me-copy-wrapper">
            <h3>
              Lumlens was founded in 2020 as a bold vision to redefine the art
              of video production. Established by a passionate team of creative
              professionals.
            </h3>

            <h3>
              At Lumlens , we believe that video is more than just content—it's
              a canvas for creativity and a tool for impact. Our goal is to
              craft visuals that not only tell compelling stories but also evoke
              emotions and drive action.
            </h3>

            <h3>
              At Lumlens, we’re committed to shaping the future of video with
              innovation and heart, proving that when you combine creativity
              with purpose, you create something truly extraordinary.
            </h3>
          </div>
        </section>

        <section className="services">
          <div className="services-col">
            <div className="services-banner">
              <img src="/about/services-banner.jpg" alt="" />
            </div>
            <p className="primary">Building with Passion</p>
          </div>
          <div className="services-col">
            <h4>
              Every project is an opportunity to tell a story that resonates.
              Whether it’s film, brand, or visual content — let’s create
              something truly unforgettable.
            </h4>

            <div className="services-list">
              <div className="service-list-row">
                <div className="service-list-col">
                  <h5>Filmmaking</h5>
                </div>
                <div className="service-list-col">
                  <p>
                    From concept to final cut, I create cinematic films that
                    spark emotion and leave a lasting impact. Whether it's a
                    short narrative, a documentary, or branded content, I
                    approach each frame with purpose and precision. I believe in
                    storytelling that not only entertains but also connects with
                    audiences on a deeper level.
                  </p>
                </div>
              </div>

              <div className="service-list-row">
                <div className="service-list-col">
                  <h5>Brand Design</h5>
                </div>
                <div className="service-list-col">
                  <p>
                    I help brands find their voice through thoughtful design and
                    storytelling. From logo creation to full identity systems, I
                    craft visuals that communicate values, spark recognition,
                    and build trust. Every detail is intentional — designed to
                    stand out and scale across every platform.
                  </p>
                </div>
              </div>

              <div className="service-list-row">
                <div className="service-list-col">
                  <h5>Creative Direction</h5>
                </div>
                <div className="service-list-col">
                  <p>
                    I lead the creative vision of each project to ensure a
                    unified aesthetic and emotional tone. From pre-production
                    planning to final execution, I oversee the alignment of
                    visuals, story, and strategy. My goal is to bring clarity,
                    originality, and meaning to every piece of content we
                    produce.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-banner-img">
          <div className="about-banner-img-wrapper">
            <img src="/about/about-banner.jpg" alt="" />
          </div>
        </section>

        <section className="fav-tools">
          <div className="fav-tools-header">
            <p className="primary sm">Daily Stack</p>
            <h2>Favourite Tools</h2>
            <p className="secondary">
              My favorite stack includes Framer, Figma, and other cutting-edge
              technologies to ensure seamless and dynamic designs.
            </p>
          </div>

          <div className="fav-tools-list">
            <div className="fav-tools-list-row">
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src="/about/tool-1.jpg" alt="" />
                </div>
                <h4>DaVinci Resolve</h4>
                <p className="primary sm">Color Grading</p>
              </div>
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src="/about/tool-2.jpg" alt="" />
                </div>
                <h4>Adobe Premiere Pro</h4>
                <p className="primary sm">Video Editing</p>
              </div>
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src="/about/tool-3.jpg" alt="" />
                </div>
                <h4>Blackmagic Pocket</h4>
                <p className="primary sm">Cinematic Shooting</p>
              </div>
            </div>
            <div className="fav-tools-list-row">
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src="/about/tool-4.jpg" alt="" />
                </div>
                <h4>ShotDeck</h4>
                <p className="primary sm">Visual References</p>
              </div>
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src="/about/tool-5.jpg" alt="" />
                </div>
                <h4>Frame.io</h4>
                <p className="primary sm">Remote Collaboration</p>
              </div>
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src="/about/tool-6.jpg" alt="" />
                </div>
                <h4>Celtx</h4>
                <p className="primary sm">Scriptwriting Tool</p>
              </div>
            </div>
          </div>
        </section>

        <ContactForm />

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default About;
