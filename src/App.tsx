import { AnnouncementBar } from './components/AnnouncementBar';
import CustomCursor from './components/shared/CustomCursor';
import GradientBg from './components/GradientBg';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Stats from './components/Stats';
import Services from './components/sections/Services';
import Gallery from './components/sections/Gallery';
import Reviews from './components/sections/Reviews';
import Footer from './components/layout/Footer';
import FloatingActions from './components/FloatingActions';
import { useTheme } from './hooks/useTheme';
import { EmberParticles } from './components/EmberParticles';

export default function App() {
  const { isDark, toggle } = useTheme();

  return (
    <>

      <CustomCursor />
      <GradientBg />
      <Navbar isDark={isDark} onToggleTheme={toggle} />

      <main>
        <AnnouncementBar
          items={[
            "✂️ Schneiden, Föhnen & Styling",
            "💈 Herrenschnitt ab 25€",
            "🌈 Balayage & Highlights",
            "🧴 Haarkur & Pflege",
          ]}
          speed="28s"
          position="static"
          className="border-b border-glass-border mt-20 fixed"
        />
        <Hero />
        <EmberParticles />
        <div className="divider" />
        <About />
        <div className="divider" />

        <Services />
        <div className="divider" />
        <Gallery />
        <Reviews />
      </main>
      <AnnouncementBar
        items={[
          "📞 +49 1525 9269888",
          "✉️ info@gery-salon.de",
          "📍 Mainz & Umgebung",
          "📱 24/7 Terminanfrage",
          "✂️ Fachgerecht & sauber",
        ]}
        speed="30s"
        position="static"
      />
      <Footer />
      <FloatingActions />
    </>
  );
}
