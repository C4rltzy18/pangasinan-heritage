export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content page-width">
        <p className="eyebrow">DISCOVER · LEARN · EXPLORE</p>
        <h1>The Heritage <span>of Pangasinan</span></h1>
        <p className="hero-description">
          Exploring an undiscovered city reveals hidden history and natural attractions, giving us a remarkable new experience.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#sites">Explore Heritage</a>
          <a className="button button-secondary" href="#about">Discover More</a>
        </div>
      </div>
      <div className="hero-location">
        <span>Lingayen, Pangasinan</span>
      </div>
      <div className="hero-scroll">SCROLL TO EXPLORE<span>↓</span></div>
    </section>
  );
}
