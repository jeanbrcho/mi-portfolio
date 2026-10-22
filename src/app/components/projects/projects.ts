import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  details: string;
  stack: string[];
  githubUrl?: string;
  demoUrl?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="projects-section">
      <div class="container">
        
        <header class="section-header">
          <h2 class="title">Proyectos Destacados</h2>
          <p class="subtitle">Haz clic en cualquier proyecto para ver la arquitectura y tecnologías aplicadas.</p>
        </header>

        <!-- Grilla de Tarjetas -->
        <div class="projects-grid">
          <article 
            *ngFor="let p of projects" 
            class="project-card" 
            (click)="selectProject(p)">
            
            <div class="card-body">
              <span class="category">{{ p.category }}</span>
              <h3 class="card-title">{{ p.title }}</h3>
              <p class="summary">{{ p.summary }}</p>
            </div>

            <div class="card-footer">
              <div class="tags">
                <span *ngFor="let tech of p.stack" class="tag">{{ tech }}</span>
              </div>
            </div>

          </article>
        </div>

        <!-- Modal de Detalle del Proyecto -->
        <div class="modal-backdrop" *ngIf="activeProject()" (click)="closeModal()">
          <div class="modal-card" (click)="$event.stopPropagation()">
            
            <button class="close-btn" (click)="closeModal()" aria-label="Cerrar modal">×</button>
            
            <span class="category">{{ activeProject()?.category }}</span>
            <h2 class="modal-title">{{ activeProject()?.title }}</h2>
            
            <p class="modal-text">{{ activeProject()?.details }}</p>

            <div class="stack-block">
              <h4 class="stack-label">Stack y Herramientas:</h4>
              <div class="tags">
                <span *ngFor="let tech of activeProject()?.stack" class="tag active-tag">{{ tech }}</span>
              </div>
            </div>

            <div class="modal-actions">
              <a *ngIf="activeProject()?.githubUrl" [href]="activeProject()?.githubUrl" target="_blank" rel="noopener" class="btn-secondary">
                Ver Código (GitHub)
              </a>
              <a *ngIf="activeProject()?.demoUrl" [href]="activeProject()?.demoUrl" target="_blank" rel="noopener" class="btn-primary">
                Ver Demo En Vivo
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    .projects-section {
      padding: 4rem 1.5rem;
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

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
    }

    .project-card {
      background-color: var(--bg-surface);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 1.5rem;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
    }

    .project-card:hover {
      transform: translateY(-4px);
      border-color: var(--accent);
      box-shadow: 0 8px 24px var(--shadow-color);
      background-color: var(--bg-surface-hover);
    }

    .category {
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--accent);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .card-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--text-main);
      margin: 0.35rem 0 0.75rem 0;
    }

    .summary {
      font-size: 0.9rem;
      color: var(--text-muted);
      line-height: 1.5;
      margin-bottom: 1.25rem;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
    }

    .tag {
      padding: 0.2rem 0.6rem;
      border-radius: 4px;
      font-size: 0.75rem;
      font-weight: 500;
      background-color: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--border-color);
      color: var(--text-main);
    }

    .active-tag {
      border-color: var(--accent);
      color: var(--accent);
    }

    /* Estilos del Modal */
    .modal-backdrop {
      position: fixed;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.7);
      backdrop-filter: blur(4px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2000;
      padding: 1rem;
    }

    .modal-card {
      background-color: var(--bg-surface);
      border: 1px solid var(--border-color);
      border-radius: 16px;
      padding: 2rem;
      max-width: 540px;
      width: 100%;
      position: relative;
      box-shadow: 0 16px 32px var(--shadow-color);
    }

    .close-btn {
      position: absolute;
      top: 1.25rem;
      right: 1.25rem;
      background: none;
      border: none;
      font-size: 1.75rem;
      color: var(--text-muted);
      cursor: pointer;
      line-height: 1;
    }

    .close-btn:hover {
      color: var(--text-main);
    }

    .modal-title {
      font-size: 1.5rem;
      font-weight: 800;
      color: var(--text-main);
      margin: 0.25rem 0 1rem 0;
    }

    .modal-text {
      color: var(--text-muted);
      font-size: 0.95rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .stack-block {
      margin-bottom: 1.75rem;
    }

    .stack-label {
      font-size: 0.85rem;
      color: var(--text-main);
      margin-bottom: 0.5rem;
    }

    .modal-actions {
      display: flex;
      gap: 0.75rem;
      flex-wrap: wrap;
    }

    .btn-primary, .btn-secondary {
      padding: 0.6rem 1.2rem;
      border-radius: 6px;
      font-size: 0.875rem;
      font-weight: 600;
      text-decoration: none;
      transition: background-color 0.2s ease;
    }

    .btn-primary {
      background-color: var(--accent);
      color: var(--accent-contrast);
    }

    .btn-secondary {
      background-color: transparent;
      border: 1px solid var(--border-color);
      color: var(--text-main);
    }

    .btn-secondary:hover {
      border-color: var(--accent);
    }
  `]
})
export class ProjectsComponent {
  activeProject = signal<Project | null>(null);

  projects: Project[] = [
    {
      id: 'guau-corte',
      title: 'Guau que corte!',
      category: 'Plataforma Web',
      summary: 'Sistema web de registro y gestión de turnos comerciales.',
      details: 'Desarrollado con arquitectura Angular Standalone, consumo de servicios REST API y maquetación responsiva orientada a agilizar el flujo de reservas y clientes.',
      stack: ['Angular', 'TypeScript', 'HTML5/CSS3', 'REST API'],
      githubUrl: 'https://github.com/tu-usuario/guau-que-corte'
    },
    {
      id: 'metar-app',
      title: 'Aplicación Meteorológica METAR',
      category: 'Herramienta de Aviación',
      summary: 'Visualizador y decodificador de datos meteorológicos aeronáuticos en tiempo real.',
      details: 'Consume APIs aeronáuticas internacionales para decodificar informes METAR/TAF. Procesa parámetros complejos de clima en interfaces sencillas e intuitivas.',
      stack: ['Angular', 'TypeScript', 'RxJS', 'APIs REST'],
      githubUrl: 'https://github.com/tu-usuario/metar-app'
    },
    {
      id: 'turnos-web',
      title: 'Sistema Web de Turnos',
      category: 'Gestión de Servicios',
      summary: 'Plataforma interactiva para asignación y control de agenda.',
      details: 'Enfocado en la experiencia de usuario y validaciones en cliente para evitar solapamiento de horarios y optimizar la comunicación con la API.',
      stack: ['Angular Standalone', 'TypeScript', 'Git'],
      githubUrl: 'https://github.com/tu-usuario/sistema-turnos'
    },
    {
      id: 'vehiculos-web',
      title: 'Portal de Venta de Vehículos',
      category: 'E-Commerce / Catalogo',
      summary: 'Interface moderna con filtros en tiempo real para catálogo automotriz.',
      details: 'Desarrollo de interfaz dinámica para exploración de vehículos, filtrado multicriterio y catálogo optimizado para dispositivos móviles.',
      stack: ['Angular', 'CSS3', 'TypeScript', 'Data Filtering'],
      githubUrl: 'https://github.com/tu-usuario/portal-vehiculos'
    }
  ];

  selectProject(project: Project): void {
    this.activeProject.set(project);
  }

  closeModal(): void {
    this.activeProject.set(null);
  }
}