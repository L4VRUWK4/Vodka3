import React, { useState } from 'react';
import Header from './components/Header';
import BonusFeatures from './components/BonusFeatures';
import Instructions from './components/Instructions';
import TelegramGuide from './components/TelegramGuide';
import FAQ from './components/FAQ';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  const [isPromoCopied, setIsPromoCopied] = useState(false);

  const handleCopyPromo = async () => {
    try {
      await navigator.clipboard.writeText('BON150');
      setIsPromoCopied(true);
      setTimeout(() => setIsPromoCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = 'BON150';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setIsPromoCopied(true);
      setTimeout(() => setIsPromoCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen">
      <Header isPromoCopied={isPromoCopied} onCopyPromo={handleCopyPromo} />
      <BonusFeatures />
      <Instructions />
      <TelegramGuide />
      <FAQ />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;