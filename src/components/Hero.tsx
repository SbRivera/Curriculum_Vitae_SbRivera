import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title font-cinzel">
          {t('hero.title')}
        </h1>
        <p className="hero-subtitle font-playfair">
          {t('hero.subtitle')}
        </p>
        <p className="hero-description">
          {t('hero.description')}
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            className="btn"
            onClick={() => scrollToSection('contact')}
          >
            {t('contact.title')}
          </button>
          <a
            href="https://drive.google.com/file/d/1HbK7f_AeUo5d5LQM0AyaDMNW6ppqtu3H/view?usp=sharing"
            className="btn btn-outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('buttons.downloadCV')}
          </a>
        </div>
      </div>

      {/* Decoración gótica */}
      <div 
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '2rem',
          color: 'var(--accent-primary)',
          animation: 'fadeInUp 2s ease-out 1s both',
          cursor: 'pointer'
        }}
        onClick={() => scrollToSection('about')}
      >
        ⟱
      </div>
    </section>
  );
};

export default Hero;
