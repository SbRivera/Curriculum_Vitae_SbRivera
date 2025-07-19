import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../hooks/useTheme';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const navItems = [
    { id: 'about', label: t('navigation.about') },
    { id: 'experience', label: t('navigation.experience') },
    { id: 'skills', label: t('navigation.skills') },
    { id: 'projects', label: t('navigation.projects') },
    { id: 'contact', label: t('navigation.contact') },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a 
          href="#hero" 
          className="nav-logo"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
        >
          SR
        </a>

        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-controls">
          <button
            className="control-btn"
            onClick={toggleTheme}
            title={theme === 'dark' ? (t('buttons.lightMode') as string) : (t('buttons.darkMode') as string)}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          <button
            className="control-btn"
            onClick={() => changeLanguage(i18n.language === 'es' ? 'en' : 'es')}
            title="Cambiar idioma / Change language"
          >
            {i18n.language === 'es' ? '🇺🇸' : '🇪🇸'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
