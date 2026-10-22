import { Component, inject, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      class="toggle-btn" 
      [class.scrolled]="isScrolled()"
      (click)="themeService.toggleTheme()" 
      [attr.aria-label]="themeService.currentTheme() === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'">
      <span class="icon">{{ themeService.currentTheme() === 'dark' ? '☀️' : '🌙' }}</span>
      <span class="label">
        {{ themeService.currentTheme() === 'dark' ? '¿Hacemos de día?' : '¿Volvemos a la noche?' }}
      </span>
    </button>

    <!-- Overlay de animación -->
    <div class="theme-animation-overlay" *ngIf="themeService.isAnimating()">
      <div *ngIf="themeService.targetTheme() === 'light'" class="sun-orb"></div>
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
      justify-content: center;
      gap: 0.5rem;
      padding: 0.6rem 1.1rem;
      height: 42px;
      border-radius: 9999px;
      border: 1px solid var(--border-color);
      background-color: var(--bg-surface);
      color: var(--text-main);
      font-size: 0.875rem;
      font-weight: 500;
      cursor: pointer;
      box-shadow: 0 4px 16px var(--shadow-color);
      /* Transición suave para todos los cambios de tamaño y forma */
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .toggle-btn:hover {
      transform: translateY(-2px);
      border-color: var(--accent);
    }

    .icon {
      font-size: 1rem;
      line-height: 1;
      flex-shrink: 0;
    }

    .label {
      white-space: nowrap;
      display: inline-block;
      max-width: 180px;
      opacity: 1;
      overflow: hidden;
      /* Transición fluida de texto */
      transition: max-width 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
    }

    /* Colapsa al hacer scroll */
    .toggle-btn.scrolled {
        padding: 0;
        width: 42px;
        height: 42px;
        gap: 0;
        border-radius: 50%;
      }

      /* Colapso progresivo del texto */
      .toggle-btn.scrolled .label {
        max-width: 0;
        opacity: 0;
      }
  `]
})
export class ThemeToggleComponent {
  themeService: ThemeService = inject(ThemeService);
  isScrolled = signal<boolean>(false);

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 30);
  }
}