# Personal Portfolio — Software Developer & Angular Developer

Un portfolio web moderno, responsivo e interactivo en formato Single Page Application (SPA), diseñado para presentar proyectos de desarrollo frontend y soluciones de datos con un alto enfoque en experiencia de usuario (UX) y rendimiento.

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

**Demo en vivo:** [https://jeanbracho.vercel.app/](https://jeanbracho.vercel.app/)

---

## Características Principales

- **Arquitectura Angular Standalone:** Desarrollado con componentes independientes (`standalone: true`) y Signals para una gestión de estado limpia y reactiva.
- **Sistema de Temas Dinámico (Oscuro / Claro):**
  - **Animación Orbital:** Transición personalizada con astros (Sol y Luna) que recorren la pantalla trazando un arco en la cima del cambio de tema.
  - **Persistencia:** Guarda la preferencia en `localStorage` y respeta `prefers-color-scheme` y `prefers-reduced-motion`.
  - **Botón Adaptativo al Scroll:** Botón flotante que colapsa de forma fluida a un formato circular en scroll (tanto en móvil como en escritorio).
- **Above the Fold Optimizado:** Nombre, especialidad, propuesta de valor, botón de descarga de CV y redes sociales accesibles sin necesidad de scroll.
- **Notificación Toast:** Confirmación flotante elegante y temporal al copiar el correo electrónico al portapapeles.
- **Showcase de Proyectos con Modal:** Galería de proyectos interactiva con vista detallada de arquitectura, stack técnico y enlaces a demos/código.

---

## Stack Técnico

- **Framework:** Angular Standalone
- **Lenguaje:** TypeScript
- **Estilos:** CSS3 puro con variables dinámicas (`--bg-main`, `--accent`, `--border-color`)
- **Estado & Reactividad:** Angular Signals & `@HostListener`
- **Control de Versiones & Deploy:** Git, GitHub & Vercel

---

## Estructura del Proyecto

```text
src/
├── app/
│   ├── components/
│   │   ├── contact/       # Sección de contacto directo
│   │   ├── hero/          # Cabecera principal y Toast flotante de correo
│   │   ├── projects/      # Tarjetas de proyectos y modal de detalles
│   │   ├── stack/         # Desglose de habilidades por categorías
│   │   └── theme-toggle/  # Botón adaptativo y animación de órbita (Sol/Luna)
│   ├── services/
│   │   └── theme.service.ts # Gestión de tema con Signals y localStorage
│   ├── app.ts             # Componente raíz SPA
│   └── app.config.ts      # Configuración de la aplicación Angular
└── styles.css             # Paleta de colores globales y animaciones @keyframes
```

## Instalación y Ejecución Local

Para clonar y ejecutar este proyecto localmente en tu máquina:

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/jeanbrcho/mi-portfolio.git
   cd mi-portfolio
   ```

2. **Instalar las dependencias:**

   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**

   ```bash
   ng serve
   ```

4. Abrir la dirección [http://localhost:4200/](http://localhost:4200/) en tu navegador.

---

## Contacto

- **LinkedIn:** [linkedin.com/in/jeanbracho](https://linkedin.com/in/jeanbracho)
- **GitHub:** [@jeanbrcho](https://github.com/jeanbrcho)
- **Email:** [jeancbs18ar@gmail.com](mailto:jeancbs18ar@gmail.com)
