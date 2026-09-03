'use client';

export default function Header() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="site-header">
      <button className="brand" onClick={() => scrollTo('home')} aria-label="Pangasinan Heritage home">
        <span>PANGASINAN</span>
        <small>HERITAGE</small>
      </button>

      <nav className="site-nav" aria-label="Primary navigation">
        <button onClick={() => scrollTo('home')}>Home</button>
        <button onClick={() => scrollTo('sites')}>Heritage Sites</button>
        <button onClick={() => scrollTo('about')}>About</button>
      </nav>
    </header>
  );
}
