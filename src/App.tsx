import CustomCursor from './components/CustomCursor';
import GradientBg from './components/GradientBg';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import MobileService from './components/MobileService';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import { useTheme } from './hooks/useTheme';
import { EmberParticles } from './components/EmberParticles';
import { AnnouncementBar } from './components/AnnouncementBar';

export default function App() {
  const { isDark, toggle } = useTheme();

  return (
    <>
      <CustomCursor />
      <GradientBg />
      <Navbar isDark={isDark} onToggleTheme={toggle} />
      <AnnouncementBar />
      <main>
        <Hero />
        <EmberParticles />
        <div className="divider" />
        <Stats />
        <Services />
        <div className="divider" />
        <MobileService />
        <Gallery />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
