import Header from './components/Header';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import StudentChallenges from './components/sections/StudentChallenges';
import CompanySolutions from './components/sections/CompanySolutions';
import ESProcess from './components/sections/ESProcess';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import { SectionProvider } from './context/SectionContext';

function App() {
  return (
    <SectionProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <Features />
          <StudentChallenges />
          <CompanySolutions />
          <ESProcess />
          <Contact />
        </main>
        <Footer />
      </div>
    </SectionProvider>
  );
}

export default App;