import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Portfolio } from './sections/Portfolio';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Contact } from './sections/Contact';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <a className="skip-link" href="#sobre">
        Pular para o conteúdo
      </a>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
