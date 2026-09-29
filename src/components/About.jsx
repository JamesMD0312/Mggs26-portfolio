import { useEffect, useState } from "react";

export default function About() {
  const images = [
    {
      src: "/images/about-1.JPEG",
      alt: "Creative work and production",
    },
    {
      src: "/images/about-2.JPG",
      alt: "Creative project",
    },
    {
      src: "/images/about-3.JPG",
      alt: "Behind the scenes",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [images.length]);

  function goToPrevious() {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }

  function goToNext() {
    setCurrent((prev) => (prev + 1) % images.length);
  }

  return (
    <section id="about" className="section about">
      <div className="container about-grid">

        <div className="eyebrow reveal">
          01 — About
        </div>

        <div className="about-gallery reveal">
          <div className="about-carousel">
            {images.map((image, index) => (
              <div
                key={image.src}
                className={`about-slide ${
                  index === current ? "active" : ""
                }`}
              >
                <img src={image.src} alt={image.alt} />
              </div>
            ))}

            <div className="about-controls">
              <button
                type="button"
                onClick={goToPrevious}
                aria-label="Previous image"
              >
                ←
              </button>

              <span>
                {String(current + 1).padStart(2, "0")} /{" "}
                {String(images.length).padStart(2, "0")}
              </span>

              <button
                type="button"
                onClick={goToNext}
                aria-label="Next image"
              >
                →
              </button>
            </div>
          </div>
        </div>

        <div className="about-content reveal">
          <p className="about-lead">
            Hi, I’m <strong>Gill</strong>!
          </p>

          <p className="about-intro">
            A Social Media Marketer who likes turning <strong>“what if?”</strong> into
            <strong>“let’s try it.”</strong>
          </p>

          <div className="about-copy">
            <p>
              I work across content, social media, branding, and campaign
              planning, taking ideas from the brainstorming stage all the way
              to production. I enjoy figuring out what makes people stop,
              look, and connect with a brand.
            </p>

            <p>
              I’m curious by nature, always up for trying something new, and
              probably already thinking of three different ways to turn an
              idea into content.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}