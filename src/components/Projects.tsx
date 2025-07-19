import React from 'react';
import { useTranslation } from 'react-i18next';

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const educationItems = [
    {
      institution: t('projects.items.university.name'),
      degree: t('projects.items.university.degree'),
      location: t('projects.items.university.location'),
      period: t('projects.items.university.period'),
      status: t('projects.items.university.status'),
      icon: '🎓',
      type: 'university'
    },
    {
      institution: t('projects.items.highschool.name'),
      degree: t('projects.items.highschool.degree'),
      location: t('projects.items.highschool.location'),
      period: t('projects.items.highschool.period'),
      status: t('projects.items.highschool.status'),
      icon: '🏫',
      type: 'highschool'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="animate-fade-in-up">
        <h2 className="section-title font-cinzel">
          {t('projects.title')}
        </h2>

        <div className="grid grid-2">
          {educationItems.map((item, index) => (
            <div 
              key={index}
              className={`card project-card animate-fade-in-${index % 2 === 0 ? 'left' : 'right'}`}
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--border-color)',
                borderRadius: '12px',
                padding: '2rem',
                transition: 'all 0.3s ease',
                height: 'auto'
              }}
            >
              <div style={{ 
                fontSize: '3rem', 
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                {item.icon}
              </div>
              
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '1rem',
                color: 'var(--accent-color)',
                fontFamily: 'var(--font-heading)'
              }}>
                {item.degree}
              </h3>
              
              <h4 style={{
                fontSize: '1.2rem',
                marginBottom: '1rem',
                color: 'var(--text-color)',
                fontWeight: '600'
              }}>
                {item.institution}
              </h4>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  color: 'var(--text-secondary)'
                }}>
                  <span>📍</span>
                  <span>{item.location}</span>
                </div>
                
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  color: 'var(--text-secondary)'
                }}>
                  <span>📅</span>
                  <span>{item.period}</span>
                </div>
              </div>
              
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                backgroundColor: item.status === 'En curso' || item.status === 'In progress' 
                  ? 'var(--accent-color)' 
                  : 'var(--success-color)',
                color: 'white',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: '500'
              }}>
                <span>{item.status === 'En curso' || item.status === 'In progress' ? '⏳' : '✅'}</span>
                <span>{item.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
