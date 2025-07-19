import React from 'react';
import { useTranslation } from 'react-i18next';

const Skills: React.FC = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: t('skills.categories.mobile'),
      icon: '📱',
      skills: [
        { name: t('skills.items.flutter'), level: 90 },
        { name: t('skills.items.ui_design'), level: 85 },
        { name: t('skills.items.mobile_dev'), level: 88 },
        { name: t('skills.items.algorithms'), level: 82 }
      ]
    },
    {
      title: t('skills.categories.programming'),
      icon: '💻',
      skills: [
        { name: t('skills.items.java'), level: 88 },
        { name: t('skills.items.javascript'), level: 85 },
        { name: t('skills.items.python'), level: 80 },
        { name: 'Dart', level: 90 }
      ]
    },
    {
      title: t('skills.categories.database'),
      icon: '🗄️',
      skills: [
        { name: t('skills.items.sql'), level: 92 },
        { name: t('skills.items.data_analysis'), level: 85 },
        { name: 'Database Design', level: 78 }
      ]
    },
    {
      title: t('skills.categories.analytics'),
      icon: '📊',
      skills: [
        { name: t('skills.items.kpi'), level: 85 },
        { name: 'Performance Metrics', level: 80 },
        { name: 'Data Visualization', level: 75 }
      ]
    },
    {
      title: t('skills.categories.tools'),
      icon: '🛠️',
      skills: [
        { name: 'Git/GitHub', level: 88 },
        { name: 'VS Code', level: 92 },
        { name: 'Android Studio', level: 85 },
        { name: 'Debugging', level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="animate-fade-in-up">
        <h2 className="section-title font-cinzel">
          {t('skills.title')}
        </h2>

        <div className="grid grid-3">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className={`card animate-fade-in-${categoryIndex % 2 === 0 ? 'left' : 'right'}`}
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--border-color)',
                borderRadius: '12px',
                padding: '2rem',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '2rem'
              }}>
                <span style={{ fontSize: '2.5rem' }}>{category.icon}</span>
                <h3 style={{
                  fontSize: '1.3rem',
                  color: 'var(--accent-color)',
                  fontFamily: 'var(--font-heading)',
                  margin: 0
                }}>
                  {category.title}
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.5rem'
                    }}>
                      <span style={{
                        color: 'var(--text-color)',
                        fontWeight: '500'
                      }}>
                        {skill.name}
                      </span>
                      <span style={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.9rem'
                      }}>
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div style={{
                      width: '100%',
                      height: '6px',
                      backgroundColor: 'var(--background-secondary)',
                      borderRadius: '3px',
                      overflow: 'hidden'
                    }}>
                      <div 
                        style={{
                          width: `${skill.level}%`,
                          height: '100%',
                          backgroundColor: 'var(--accent-color)',
                          borderRadius: '3px',
                          transition: 'width 1s ease-in-out'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
