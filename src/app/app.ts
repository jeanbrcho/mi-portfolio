import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero';
import { ProjectsComponent } from './components/projects/projects';
import { StackComponent } from './components/stack/stack';
import { ContactComponent } from './components/contact/contact';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ThemeToggleComponent,
    HeroComponent,
    ProjectsComponent,
    StackComponent,
    ContactComponent,
  ],
  template: `
    <!-- Botón sticky flotante de cambio de tema -->
    <app-theme-toggle />

    <main>
      <!-- 1. Presentación directa (sin scroll) -->
      <app-hero />

      <!-- 2. Proyectos destacados -->
      <app-projects />

      <!-- 3. Stack técnico -->
      <app-stack />

      <!-- 4. Contacto -->
      <app-contact />
    </main>

    <footer class="footer">
      <button class="scroll-up" (click)="scrollToTop()" aria-label="Volver al inicio">
        <svg
          class="chevron c1"
          width="48"
          height="10"
          viewBox="0 0 48 10"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M2 8l22-6 22 6" />
        </svg>
        <svg
          class="chevron c2"
          width="48"
          height="10"
          viewBox="0 0 48 10"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M2 8l22-6 22 6" />
        </svg>
        <svg
          class="chevron c3"
          width="48"
          height="10"
          viewBox="0 0 48 10"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M2 8l22-6 22 6" />
        </svg>
      </button>

      <p>© {{ currentYear }} — Construido con Angular Standalone</p>
    </footer>
  `,
  styles: [
    `
  .footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  padding: 2rem 1.5rem;
  font-size: 0.85rem;
  color: var(--text-muted);
  border-top: 1px solid var(--border-color);
  margin-top: 2rem;
}

.footer p {
  margin: 0;
}

.scroll-up {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 1rem;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-muted);
  transition: color 0.2s ease, transform 0.2s ease;
}

.scroll-up:hover {
  color: var(--accent);
  transform: translateY(-3px);
}

.scroll-up:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 4px;
  border-radius: 8px;
}

.chevron {
  opacity: 0.15;
  animation: chevron-glow 1.8s ease-in-out infinite;
}

/* El brillo sube: primero la de abajo (c3), al final la de arriba (c1) */
.c3 { animation-delay: 0s; }
.c2 { animation-delay: 0.25s; }
.c1 { animation-delay: 0.5s; }

@keyframes chevron-glow {
  0%, 100% { opacity: 0.15; color: var(--text-muted); }
  30%      { opacity: 1;    color: var(--accent); filter: drop-shadow(0 0 6px var(--accent)); }
  60%      { opacity: 0.15; color: var(--text-muted); }
}

@media (prefers-reduced-motion: reduce) {
  .chevron { animation: none; opacity: 0.6; }
}
    `,
  ],
})
export class AppComponent {
  currentYear = new Date().getFullYear();

  scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
}
