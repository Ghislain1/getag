import { AnnouncementBar } from './components/AnnouncementBar';
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
