export default function Hero() {
  return (
    <section className="hero hero-cover">

      <div className="hero-cover-image">
        <picture>
          {/* Mobile image */}
          <source
            media="(max-width: 560px)"
            srcSet="/images/hero-mobile.png"
          />

          {/* Desktop image */}
          <img
            src="/images/hero.png"
            alt="Creative portfolio cover"
          />
        </picture>
      </div>

      {/* Overlay */}
      <div className="hero-cover-overlay" />

      {/* Hero Content */}
      <div className="hero-cover-content">

        <div className="hero-brand">
          <span className="hero-brand-mark">✦</span>

          <span className="hero-brand-name">
            Gillesia Seduco
          </span>
        </div>

        <h1 className="hero-cover-title">
          <span>CREATIVE</span>
          <span>PORTFOLIO</span>
        </h1>

        <div className="hero-cover-year">
          2026
        </div>

        <div className="hero-cover-meta">
          PHOTOGRAPHY&nbsp;&nbsp;•&nbsp;&nbsp;FILM&nbsp;&nbsp;•&nbsp;&nbsp;CREATIVE
        </div>

      </div>
    </section>
  );
}