import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="contact-section">
      <div class="container">
        
        <div class="contact-card">
          <span class="badge">¿Hablamos?</span>
          <h2 class="title">¿Tienes un proyecto o vacante en mente?</h2>
          <p class="subtitle">
            Estoy disponible para proyectos de desarrollo Angular, integración de APIs y oportunidades en análisis de datos.
          </p>

          <div class="contact-buttons">
            <a href="mailto:tu-email@ejemplo.com" class="btn-primary">
              <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Enviar Email Directo
            </a>

            <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener" class="btn-secondary">
              Conectar en LinkedIn
            </a>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    .contact-section {
      padding: 4rem 1.5rem 2rem;
      max-width: 900px;
      margin: 0 auto;
    }

    .contact-card {
      background-color: var(--bg-surface);
      border: 1px solid var(--border-color);
      border-radius: 16px;
      padding: 3rem 2rem;
      text-align: center;
      box-shadow: 0 8px 24px var(--shadow-color);
    }

    .badge {
      display: inline-block;
      padding: 0.3rem 0.8rem;
      background-color: rgba(255, 200, 61, 0.12);
      color: var(--accent);
      border: 1px solid var(--accent);
      border-radius: 9999px;
      font-size: 0.8rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    .title {
      font-size: clamp(1.5rem, 4vw, 2rem);
      font-weight: 800;
      color: var(--text-main);
      margin-bottom: 0.75rem;
    }

    .subtitle {
      color: var(--text-muted);
      font-size: 1rem;
      max-width: 550px;
      margin: 0 auto 2rem auto;
      line-height: 1.6;
    }

    .contact-buttons {
      display: flex;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .btn-primary, .btn-secondary {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      font-size: 0.95rem;
      font-weight: 700;
      text-decoration: none;
      transition: transform 0.2s ease, filter 0.2s ease, border-color 0.2s ease;
    }

    .btn-primary {
      background-color: var(--accent);
      color: var(--accent-contrast);
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      filter: brightness(1.08);
    }

    .btn-secondary {
      background-color: transparent;
      border: 1px solid var(--border-color);
      color: var(--text-main);
    }

    .btn-secondary:hover {
      border-color: var(--accent);
      color: var(--accent);
      transform: translateY(-2px);
    }
  `]
})
export class ContactComponent {}