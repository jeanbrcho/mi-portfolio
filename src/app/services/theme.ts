import { Injectable, signal } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  currentTheme = signal<Theme>('dark');
  isAnimating = signal<boolean>(false);
  targetTheme = signal<Theme | null>(null); // Mantiene fijo el tema objetivo durante la animación

  constructor() {
    this.initTheme();
  }

  private initTheme(): void {
    const savedTheme = localStorage.getItem('user-theme') as Theme | null;
    this.setTheme(savedTheme || 'dark');
  }

  toggleTheme(): void {
    if (this.isAnimating()) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const nextTheme: Theme = this.currentTheme() === 'dark' ? 'light' : 'dark';

    if (reducedMotion) {
      this.setTheme(nextTheme);
      return;
    }

    // Fijamos qué tema vamos a activar para que la animación no cambie a mitad de camino
    this.targetTheme.set(nextTheme);
    this.isAnimating.set(true);

    // Cambiamos el color de fondo exactamente cuando el astro está en el punto más alto (700ms)
    setTimeout(() => {
      this.setTheme(nextTheme);
    }, 700);

    // Finalizamos la animación cuando el astro sale completamente de la pantalla (1400ms)
    setTimeout(() => {
      this.isAnimating.set(false);
      this.targetTheme.set(null);
    }, 1400);
  }

  private setTheme(theme: Theme): void {
    this.currentTheme.set(theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('user-theme', theme);
  }
}