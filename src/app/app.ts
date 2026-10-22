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
    ContactComponent
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
      <p>© {{ currentYear }} — Construido con Angular Standalone</p>
    </footer>
  `,
  styles: [`
    .footer {
      text-align: center;
      padding: 2rem 1.5rem;
      font-size: 0.85rem;
      color: var(--text-muted);
      border-top: 1px solid var(--border-color);
      margin-top: 2rem;
    }
  `]
})
export class AppComponent {
  currentYear = new Date().getFullYear();
}