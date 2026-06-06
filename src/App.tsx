import { AnnouncementBar } from './components/AnnouncementBar';
import CustomCursor from './components/shared/CustomCursor';
import GradientBg from './components/GradientBg';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Stats from './components/Stats';
import Services from './components/sections/Services';
import Gallery from './components/sections/Gallery';
import Footer from './components/layout/Footer';
import FloatingActions from './components/FloatingActions';
import { useTheme } from './hooks/useTheme';
import { EmberParticles } from './components/EmberParticles';

export default function App() {
  const { isDark, toggle } = useTheme();

  return (
    <>
      <AnnouncementBar />
      <CustomCursor />
      <GradientBg />
      <Navbar isDark={isDark} onToggleTheme={toggle} />
      <main>
        <Hero />
        <EmberParticles />
        <About />
        <div className="divider" />
        <Stats />
        <Services />
        <div className="divider" />
        <Gallery />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
