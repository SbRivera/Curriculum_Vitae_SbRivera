import React from 'react';
import { useTranslation } from 'react-i18next';

const Experience: React.FC = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      company: t('experience.companies.company1.name'),
      position: t('experience.companies.company1.position'),
      period: t('experience.companies.company1.period'),
      description: t('experience.companies.company1.description'),
      technologies: ['Flutter', 'Dart', 'Mobile Development', 'UI/UX Design']
    },
    {
      company: t('experience.companies.company2.name'),
      position: t('experience.companies.company2.position'),
      period: t('experience.companies.company2.period'),
      description: t('experience.companies.company2.description'),
      technologies: ['Programming Education', 'Digital Tools', 'Workshop Facilitation', 'Curriculum Design']
    },
    {
      company: t('experience.companies.company3.name'),
      position: t('experience.companies.company3.position'),
      period: t('experience.companies.company3.period'),
      description: t('experience.companies.company3.description'),
      technologies: ['Mathematics', 'Physics', 'Personalized Tutoring', 'Academic Support']
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="animate-fade-in-up">
        <h2 className="section-title font-cinzel">
          {t('experience.title')}
        </h2>

        <div style={{ position: 'relative' }}>
          {/* Línea de tiempo */}
          <div 
            style={{
              position: 'absolute',
              left: '50%',
              top: '0',
              bottom: '0',
              width: '2px',
              background: 'var(--gradient-accent)',
              transform: 'translateX(-50%)',
              zIndex: 1
            }}
          />

          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="animate-fade-in-up"
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '4rem',
                position: 'relative'
              }}
            >
              {/* Punto en la línea de tiempo */}
              <div 
                style={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: 'var(--accent-primary)',
                  border: '4px solid var(--bg-primary)',
                  zIndex: 2
                }}
              />

              {/* Card de experiencia */}
              <div 
                className="card"
                style={{
                  width: '45%',
                  marginLeft: index % 2 === 0 ? '0' : '55%'
                }}
              >
                <div style={{ marginBottom: '1rem' }}>
                  <h3 className="font-playfair" style={{ 
                    color: 'var(--accent-primary)',
                    fontSize: '1.5rem',
                    marginBottom: '0.5rem'
                  }}>
                    {exp.position}
                  </h3>
                  <h4 style={{ 
                    color: 'var(--text-secondary)',
                    fontSize: '1.2rem',
                    marginBottom: '0.5rem'
                  }}>
                    {exp.company}
                  </h4>
                  <p style={{ 
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem',
                    fontStyle: 'italic'
                  }}>
                    {exp.period}
                  </p>
                </div>

                <p style={{ 
                  marginBottom: '1.5rem',
                  lineHeight: '1.6'
                }}>
                  {exp.description}
                </p>

                <div style={{ 
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}>
                  {exp.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      style={{
                        background: 'var(--gradient-accent)',
                        color: 'var(--bg-primary)',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '15px',
                        fontSize: '0.8rem',
                        fontWeight: '600'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
