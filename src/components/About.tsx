import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: '📍',
      label: "Ubicación",
      value: t('about.location')
    },
    {
      icon: '✉️',
      label: "Correo Electrónico",
      value: t('about.email')
    },
    {
      icon: '📱',
      label: "Teléfono",
      value: t('about.phone')
    },
    {
      icon: '🎓',
      label: 'Educación',
      value: t('about.education')
    },
    {
      icon: '🌐',
      label: 'Idiomas',
      value: t('about.languages')
    }
  ];

  return (
    <section id="about" className="section">
      <div className="animate-fade-in-up">
        <h2 className="section-title font-cinzel">
          {t('about.title')}
        </h2>

        <div className="grid grid-2" style={{ alignItems: 'center' }}>
          <div className="animate-fade-in-left">
            <div className="card">
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                {t('about.description')}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '1rem',
                      padding: '0.5rem 0',
                      borderBottom: '1px solid var(--border-color)'
                    }}
                  >
                    <span style={{ fontSize: '1.5rem' }}>{info.icon}</span>
                    <div>
                      <strong style={{ color: 'var(--accent-primary)' }}>
                        {info.label}:
                      </strong>
                      <span style={{ marginLeft: '0.5rem', color: 'var(--text-secondary)' }}>
                        {info.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="animate-fade-in-right">
            <div className="card" style={{ textAlign: 'center' }}>
              {/* Placeholder para imagen de perfil - Reemplazar con tu foto */}
              <div 
                style={{
                  width: '250px',
                  height: '250px',
                  borderRadius: '50%',
                  background: 'var(--gradient-accent)',
                  margin: '0 auto 2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '4rem',
                  color: 'var(--bg-primary)',
                  border: '4px solid var(--accent-primary)',
                  boxShadow: '0 10px 30px var(--shadow-accent)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Uncomment and use this img tag when you have your profile photo */}
                <img 
                  src={`${process.env.PUBLIC_URL}/xd1.png`}
                  alt="Sebastian Rivera Profile"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%'
                  }}
                />
                
                {/* Remove this emoji when you add your photo */}
                
              </div>
              
              <h3 className="font-playfair" style={{ 
                fontSize: '1.5rem', 
                color: 'var(--accent-primary)',
                marginBottom: '1rem'
              }}>
                Sebastián Rivera
              </h3>
              
              <p style={{ 
                color: 'var(--text-secondary)',
                fontStyle: 'italic',
                fontSize: '1.1rem'
              }}>
                "La excelencia no es una habilidad, es una actitud."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
