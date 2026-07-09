export function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">New Season Drop</span>
          <h1>
            <span className="line">
              <span>Wear Your</span>
            </span>
            <span className="line">
              <span className="accent">Freedom.</span>
            </span>
          </h1>
          <p>
            Fabrics that move before you do. Free Fit designs clothing around real motion — soft
            structure, relaxed cuts, zero compromise.
          </p>
          <div className="hero-actions">
            <a href="#new" className="btn btn-primary">
              Shop New In
            </a>
            <a href="#story" className="btn btn-ghost">
              Our Story
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-img-a">
            <div className="hero-flip-card">
              <img
                src="/images/hero/hero img_01.jpeg"
                alt="Model in Free Fit relaxed jacket"
                fetchPriority="high"
              />
              <img src="/images/hero/hero_02.png" alt="Free Fit street style" />
            </div>
          </div>
          <div className="hero-img-b">
            <div className="hero-flip-card">
              <img src="/images/hero/hero_02.png" alt="Free Fit street style" />
              <img
                src="/images/hero/hero img_01.jpeg"
                alt="Model in Free Fit relaxed jacket"
              />
            </div>
          </div>
          <div className="float-badge">
            <div className="stars">★★★★★</div>
            <p>"A fit that finally moves with me." — Verified Buyer</p>
          </div>
        </div>
      </div>
      <div className="scroll-cue">
        <span className="dot"></span> Scroll to explore
      </div>
    </section>
  );
}
