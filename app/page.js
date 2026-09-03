import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Sites from '../components/Sites';
import Story from '../components/Story';
import Footer from '../components/Footer';
import './globals.css';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Sites />
        <Story />
      </main>
      <Footer />
    </>
  );
}
