import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { ProjectGrid } from './components/ProjectGrid';
import { Company } from './components/Profile';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AIConsultant } from './components/AIConsultant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-ok-black font-sans selection:bg-ok-black selection:text-white">
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <ProjectGrid />
        <Company />
        <Contact />
      </main>
      <Footer />
      <AIConsultant />
    </div>
  );
};

export default App;