const points = [
  {
    number: '01',
    title: 'Cultural Awareness',
    text: 'Discover places that reflect the history, identity, traditions, and character of Pangasinan.'
  },
  {
    number: '02',
    title: 'Empathy for Visitors',
    text: 'Promotes understanding across different cultures and encourages visitors to be respectful of local customs and practices.'
  },
  {
    number: '03',
    title: 'Heritage Appreciation',
    text: 'Encourage people to value the natural and cultural treasures that make Pangasinan distinctive.'
  }
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="page-width">
        <div className="section-intro">
          <div>
            <p className="section-label">OUR PURPOSE</p>
            <h2>About the <em>Showcase</em></h2>
          </div>
          <p className="section-lead">
            A digital space created to make Pangasinan&apos;s heritage easier to discover, appreciate, and remember.
          </p>
        </div>

        <div className="purpose-grid">
          {points.map((point) => (
            <article className="purpose-card" key={point.number}>
              <span className="card-number">{point.number}</span>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
