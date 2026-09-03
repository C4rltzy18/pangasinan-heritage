const sites = [
  {
    number: '01',
    name: 'Hundred Islands',
    location: 'Alaminos City',
    description: 'A beautiful group of islands surrounded by clear blue waters, attracting tourists for its natural beauty and recreational activities.',
    image: '/images/hundred-islands-cover-watermark.jpg'
  },
  {
    number: '02',
    name: 'Bolinao Falls',
    location: 'Bolinao',
    description: 'A beautiful waterfall surrounded by lush greenery in Bolinao, Pangasinan.',
    image: '/images/bolinao-falls-in-pangasinan-4529623_960_720.jpg'
  },
  {
    number: '03',
    name: 'Balungao Hilltop Adventure',
    location: 'Balungao',
    description: 'A scenic view of lush green hills and winding roads in Balungao, Pangasinan, perfect for adventure seekers and nature lovers.',
    image: '/images/balungao-026.jpg'
  }
];

export default function Sites() {
  return (
    <section id="sites" className="sites-section">
      <div className="sites-top">
        <div className="page-width">
          <p className="section-label">HERITAGE SITES</p>
          <div className="sites-title-row">
            <h2>Places worth <em>Visiting</em></h2>
            <p>Selected destinations that showcase the natural and cultural character of Pangasinan.</p>
          </div>
        </div>
      </div>
      <div className="page-width site-grid">
        {sites.map((site) => (
          <article className="destination-card" key={site.name}>
            <div className="destination-image" style={{ backgroundImage: `url("${site.image}")` }}>
              <span className="destination-number">{site.number}</span>
              <span className="destination-location">{site.location}, Pangasinan</span>
            </div>
            <div className="destination-body">
              <h3>{site.name}</h3>
              <p>{site.description}</p>
              <a href="#story">Learn more <span>→</span></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
