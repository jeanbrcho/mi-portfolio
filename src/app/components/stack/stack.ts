import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface StackCategory {
  name: string;
  skills: { name: string; highlight?: boolean }[];
}

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="stack-section">
      <div class="container">
        <header class="section-header">
          <h2 class="title">Stack Técnico</h2>
          <p class="subtitle">Tecnologías y herramientas que utilizo en mi flujo diario de desarrollo.</p>
        </header>

        <div class="categories-grid">
          <div *ngFor="let cat of categories" class="category-card">
            <h3 class="category-title">{{ cat.name }}</h3>
            <div class="skills-list">
              <span 
                *ngFor="let skill of cat.skills" 
                class="skill-chip" 
                [class.highlight]="skill.highlight">
                {{ skill.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .stack-section {
      padding: 3rem 1.5rem;
      max-width: 900px;
      margin: 0 auto;
    }

    .section-header {
      margin-bottom: 2rem;
    }

    .title {
      font-size: 1.75rem;
      font-weight: 800;
      color: var(--text-main);
      margin-bottom: 0.5rem;
    }

    .subtitle {
      color: var(--text-muted);
      font-size: 0.95rem;
    }

    .categories-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 1.5rem;
    }

    .category-card {
      background-color: var(--bg-surface);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 1.5rem;
    }

    .category-title {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--text-main);
      margin-bottom: 1rem;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid var(--border-color);
    }

    .skills-list {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .skill-chip {
      padding: 0.35rem 0.75rem;
      border-radius: 6px;
      font-size: 0.825rem;
      font-weight: 500;
      background-color: rgba(255, 255, 255, 0.04);
      border: 1px solid var(--border-color);
      color: var(--text-main);
      transition: border-color 0.2s ease, background-color 0.2s ease;
    }

    .skill-chip.highlight {
      border-color: var(--accent);
      color: var(--accent);
      background-color: rgba(255, 200, 61, 0.08);
      font-weight: 600;
    }
  `]
})
export class StackComponent {
  categories: StackCategory[] = [
    {
      name: 'Frontend Core',
      skills: [
        { name: 'Angular Standalone', highlight: true },
        { name: 'TypeScript', highlight: true },
        { name: 'HTML5 / CSS3', highlight: false },
        { name: 'RxJS', highlight: false },
        { name: 'Arquitectura SPA', highlight: false }
      ]
    },
    {
      name: 'Datos & Backend APIs',
      skills: [
        { name: 'REST APIs', highlight: true },
        { name: 'Ciencia de Datos (En curso)', highlight: true },
        { name: 'Manejo de JSON / Data Fetching', highlight: false },
        { name: 'Filtrado de datos en cliente', highlight: false }
      ]
    },
    {
      name: 'Herramientas & Entorno',
      skills: [
        { name: 'Git & GitHub', highlight: true },
        { name: 'VS Code', highlight: false },
        { name: 'Optimización de Hardware', highlight: false },
        { name: 'npm / CLI', highlight: false }
      ]
    }
  ];
}