import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/in/sebastian-rivera-novillo',
      color: '#0077b5'
    },
    {
      name: 'GitHub',
      icon: '💻',
      url: 'https://github.com/SbRivera',
      color: '#333'
    },
    {
      name: 'WhatsApp',
      icon: '📱',
      url: 'https://wa.me/593995085689',
      color: '#25d366'
    },
    {
      name: 'Email Personal',
      icon: '✉️',
      url: 'mailto:sebastianriv2112@gmail.com',
      color: '#ea4335'
    },
    {
      name: 'Email Institucional',
      icon: '🎓',
      url: 'mailto:sbrivera2@espe.edu.ec',
      color: '#34a853'
    }
  ];

  return (
    <section id="contact" className="section">
      <div className="animate-fade-in-up">
        <h2 className="section-title font-cinzel">
          {t('contact.title')}
        </h2>
        
        <p style={{ 
          textAlign: 'center', 
          fontSize: '1.2rem', 
          marginBottom: '3rem',
          color: 'var(--text-secondary)',
          maxWidth: '600px',
          margin: '0 auto 3rem auto'
        }}>
          {t('contact.description')}
        </p>

        <div className="grid grid-2" style={{ alignItems: 'start' }}>
          {/* Información de contacto y redes sociales */}
          <div className="animate-fade-in-left">
            <div className="card">
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '2rem',
                color: 'var(--accent-color)',
                fontFamily: 'var(--font-heading)'
              }}>
                Conecta Conmigo
              </h3>

              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                marginBottom: '2rem'
              }}>
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '1rem',
                      background: 'var(--background-secondary)',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      color: 'var(--text-color)',
                      transition: 'all 0.3s ease',
                      border: '1px solid var(--border-color)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = link.color;
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'var(--background-secondary)';
                      e.currentTarget.style.color = 'var(--text-color)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <span style={{ fontSize: '1.5rem' }}>{link.icon}</span>
                    <span style={{ fontWeight: '500' }}>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Botón de contacto directo */}
          <div className="animate-fade-in-right">
            <div className="card">
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '1.5rem',
                color: 'var(--accent-color)',
                fontFamily: 'var(--font-heading)',
                textAlign: 'center'
              }}>
                ¿Tienes una propuesta?
              </h3>
              
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.6',
                color: 'var(--text-secondary)',
                textAlign: 'center',
                marginBottom: '2rem'
              }}>
                Estoy siempre abierto a nuevas oportunidades y colaboraciones. 
                No dudes en contactarme directamente.
              </p>

              <a
                href="mailto:sebastianriv2112@gmail.com?subject=Oportunidad%20Profesional&body=Hola%20Sebastián,%0D%0A%0D%0AMe%20gustaría%20contactarte%20para%20discutir%20una%20oportunidad%20profesional.%0D%0A%0D%0ASaludos,"
                className="btn"
                style={{
                  width: '100%',
                  fontSize: '1.2rem',
                  padding: '1rem 2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  textDecoration: 'none',
                  marginBottom: '1rem'
                }}
              >
                <span style={{ fontSize: '1.5rem' }}>📧</span>
                <span>{t('contact.buttons.email')}</span>
              </a>

              <a
                href="https://wa.me/593995085689?text=Hola%20Sebastián,%20me%20gustaría%20contactarte%20para%20discutir%20una%20oportunidad%20profesional.%20Saludos!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  width: '100%',
                  fontSize: '1.2rem',
                  padding: '1rem 2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  textDecoration: 'none',
                  backgroundColor: '#25d366',
                  borderColor: '#25d366'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#128c7e';
                  e.currentTarget.style.borderColor = '#128c7e';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#25d366';
                  e.currentTarget.style.borderColor = '#25d366';
                }}
              >
                <span style={{ fontSize: '1.5rem' }}>📱</span>
                <span>{t('contact.buttons.whatsapp')}</span>
              </a>

              <div style={{
                marginTop: '1.5rem',
                padding: '1rem',
                backgroundColor: 'var(--background-secondary)',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <p style={{
                  margin: 0,
                  fontSize: '0.95rem',
                  color: 'var(--text-secondary)'
                }}>
                  <strong style={{ color: 'var(--accent-color)' }}>Email:</strong> sebastianriv2112@gmail.com<br/>
                  <strong style={{ color: 'var(--accent-color)' }}>Teléfono:</strong> +593 995085689
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Referencias Profesionales */}
        <div className="animate-fade-in-up" style={{ marginTop: '4rem' }}>
          <h3 className="section-subtitle font-cinzel" style={{ 
            textAlign: 'center', 
            marginBottom: '3rem',
            color: 'var(--accent-color)',
            fontSize: '2rem'
          }}>
            {t('contact.references.title')}
          </h3>

          <div className="grid grid-3">
            {Object.entries(t('contact.references.contacts', { returnObjects: true }) as Record<string, any>).map(([key, ref]) => (
              <div 
                key={key}
                className="card animate-fade-in-up"
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '12px',
                  padding: '2rem',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ 
                  fontSize: '3rem', 
                  marginBottom: '1rem',
                  color: 'var(--accent-color)'
                }}>
                  👨‍💼
                </div>
                
                <h4 style={{
                  fontSize: '1.2rem',
                  marginBottom: '0.5rem',
                  color: 'var(--accent-color)',
                  fontFamily: 'var(--font-heading)'
                }}>
                  {ref.name}
                </h4>
                
                <p style={{
                  fontSize: '0.95rem',
                  marginBottom: '1.5rem',
                  color: 'var(--text-secondary)',
                  fontStyle: 'italic'
                }}>
                  {ref.title}
                </p>
                
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    gap: '0.5rem',
                    color: 'var(--text-color)'
                  }}>
                    <span>📞</span>
                    <span style={{ fontSize: '0.9rem' }}>{ref.phone}</span>
                  </div>
                  
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    gap: '0.5rem',
                    color: 'var(--text-color)'
                  }}>
                    <span>✉️</span>
                    <span style={{ fontSize: '0.9rem' }}>{ref.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
