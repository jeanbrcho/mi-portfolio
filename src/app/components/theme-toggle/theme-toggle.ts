import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      class="toggle-btn" 
      (click)="themeService.toggleTheme()" 
      [attr.aria-label]="themeService.currentTheme() === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'">
      <span class="icon">{{ themeService.currentTheme() === 'dark' ? '☀️' : '🌙' }}</span>
      <span class="label">
        {{ themeService.currentTheme() === 'dark' ? '¿Hacemos de día?' : '¿Volvemos a la noche?' }}
      </span>
    </button>

    <!-- Overlay de animación -->
    <div class="theme-animation-overlay" *ngIf="themeService.isAnimating()">
      <!-- Si vamos hacia el día: aparece SOL (de izquierda a derecha) -->
      <div *ngIf="themeService.targetTheme() === 'light'" class="sun-orb"></div>

      <!-- Si vamos hacia la noche: aparece LUNA (de derecha a izquierda) -->
      <div *ngIf="themeService.targetTheme() === 'dark'" class="moon-orb"></div>
    </div>
  `,
  styles: [`
    .toggle-btn {
      position: fixed;
      top: 1.25rem;
      right: 1.25rem;
      z-index: 1000;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.6rem 1.1rem;
      border-radius: 9999px;
      border: 1px solid var(--border-color);
      background-color: var(--bg-surface);
      color: var(--text-main);
      font-size: 0.875rem;
      font-weight: 500;
      cursor: pointer;
      box-shadow: 0 4px 16px var(--shadow-color);
      transition: transform 0.2s ease, border-color 0.2s ease;
    }

    .toggle-btn:hover {
      transform: translateY(-2px);
      border-color: var(--accent);
    }

    .icon {
      font-size: 1rem;
    }
  `]
})
export class ThemeToggleComponent {
  themeService: ThemeService = inject(ThemeService);
}