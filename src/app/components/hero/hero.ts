import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero">
      <div class="hero-container">
        
        <!-- Badge de especialidad -->
        <span class="badge">Angular & Software Developer</span>

        <!-- Título principal -->
        <h1 class="name">Jean Bracho</h1>
        <h2 class="role">Desarrollador de Software</h2>

        <!-- Propuesta de valor breve -->
        <p class="description">
          Especializado en la creación de interfaces web modernas, limpias y reactivas con Angular, 
          integración de APIs REST y análisis de datos.
        </p>

        <!-- Botón CV y Redes principales -->
        <div class="actions">
          <a href="assets/cv.pdf" download class="btn-cv">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
            Descargar CV
          </a>

          <div class="social-group">
            <a href="https://github.com/tu-usuario" target="_blank" rel="noopener" class="icon-link" aria-label="GitHub">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>

            <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener" class="icon-link" aria-label="LinkedIn">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            <button class="icon-link" (click)="copyEmail()" title="Copiar Email" aria-label="Copiar Email">
              <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 80vh;
      display: flex;
      align-items: center;
      padding: 5rem 1.5rem 2rem;
      max-width: 850px;
      margin: 0 auto;
    }

    .hero-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .badge {
      display: inline-block;
      padding: 0.35rem 0.85rem;
      background-color: rgba(255, 200, 61, 0.12);
      color: var(--accent);
      border: 1px solid var(--accent);
      border-radius: 9999px;
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.03em;
      margin-bottom: 1.25rem;
    }

    .name {
      font-size: clamp(2.25rem, 5vw, 3.5rem);
      font-weight: 800;
      color: var(--text-main);
      line-height: 1.1;
      margin-bottom: 0.25rem;
    }

    .role {
      font-size: clamp(1.25rem, 3vw, 1.75rem);
      font-weight: 600;
      color: var(--accent);
      margin-bottom: 1rem;
    }

    .description {
      font-size: 1.1rem;
      color: var(--text-muted);
      line-height: 1.6;
      max-width: 620px;
      margin-bottom: 2rem;
    }

    .actions {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      flex-wrap: wrap;
    }

    .btn-cv {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      background-color: var(--accent);
      color: var(--accent-contrast);
      font-weight: 700;
      font-size: 0.95rem;
      border-radius: 8px;
      text-decoration: none;
      transition: transform 0.2s ease, filter 0.2s ease;
    }

    .btn-cv:hover {
      transform: translateY(-2px);
      filter: brightness(1.08);
    }

    .social-group {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .icon-link {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 42px;
      height: 42px;
      border-radius: 8px;
      background-color: var(--bg-surface);
      color: var(--text-main);
      border: 1px solid var(--border-color);
      cursor: pointer;
      text-decoration: none;
      transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
    }

    .icon-link:hover {
      border-color: var(--accent);
      color: var(--accent);
      background-color: var(--bg-surface-hover);
    }
  `]
})
export class HeroComponent {
  copyEmail(): void {
    navigator.clipboard.writeText('tu-email@ejemplo.com');
    alert('Email copiado al portapapeles');
  }
}