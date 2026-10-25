
import './style.css';
import { orderedProjects } from './projects.js';

const app = document.querySelector('#app');

function escapeHTML(text) {
  return String(text).replace(/[&<>"']/g, (character) => {
    const replacements = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };

    return replacements[character];
  });
}

const featuredProjects = orderedProjects.filter((project) => project.featured);
const otherProjects = orderedProjects.filter(
  (project) => !project.featured && project.slug !== 'cornerstone'
);
const courseworkProjects = orderedProjects.filter(
  (project) => project.slug === 'cornerstone'
);

const header = `
  <header class="site-header">
    <a class="wordmark" href="#/">MASON J. HERMAN</a>
    <nav aria-label="Main navigation">
      <a href="#/projects">Work</a>
      <a href="#/about">About</a>
      <a href="#/resume">Resume</a>
      <a href="mailto:herman.mas@northeastern.edu">Contact</a>
    </nav>
  </header>
`;

const footer = `
  <footer>
    <span>© ${new Date().getFullYear()} Mason J. Herman</span>
    <span>
      <a href="https://github.com/MasonJHerman">GitHub</a> ·
      <a href="https://www.linkedin.com/in/masonjherman/">LinkedIn</a>
    </span>
  </footer>
`;

function projectRow(project) {
  return `
    <a class="project-row" href="#/projects/${project.slug}">
      <span class="project-index">
        ${String(project.priority).padStart(2, '0')}
      </span>

      <span class="project-info">
        <strong>${escapeHTML(project.title)}</strong>
        <small>${escapeHTML(project.tags.slice(0, 3).join(' · '))}</small>
        <span class="project-summary">${escapeHTML(project.summary)}</span>
      </span>

      <span class="project-arrow" aria-hidden="true">↗</span>
    </a>
  `;
}

function projectSection(title, projects) {
  const count = projects.length === 1 ? 'project' : 'projects';

  return `
    <section class="work-section">
      <div class="section-heading">
        <h2>${escapeHTML(title)}</h2>
        <span>${projects.length} ${count}</span>
      </div>

      <div class="project-list">
        ${projects.map(projectRow).join('')}
      </div>
    </section>
  `;
}

function home() {
  return `
    <section class="hero">
      <p class="eyebrow">
        MECHANICAL ENGINEERING · BIOENGINEERING · SOFTWARE
      </p>

      <h1>Engineering through design, experimentation, and code.</h1>

      <p class="lead">
        I'm Mason, a Mechanical Engineering and Bioengineering student
        at Northeastern University. I work across mechanical design,
        biomedical technology, and computational systems.
      </p>

      <a class="text-link" href="#/projects">
        Explore all projects ↗
      </a>
    </section>

    ${projectSection('Featured engineering work', featuredProjects)}
    ${projectSection('Other technical projects', otherProjects)}
    ${projectSection('Selected coursework & smaller builds', courseworkProjects)}
  `;
}

function projectsPage() {
  return `
    <section class="page-intro">
      <p class="eyebrow">SELECTED WORK</p>
      <h1>Projects</h1>

      <p>
        Mechanical design and biomedical research first, followed by
        software, controls, and smaller builds. Ordered by relevance,
        not recency.
      </p>
    </section>

    ${projectSection('Featured engineering work', featuredProjects)}
    ${projectSection('Other technical projects', otherProjects)}
    ${projectSection('Selected coursework & smaller builds', courseworkProjects)}
  `;
}

function projectPage(project) {
  return `
    <article class="case-study">
      <a class="back" href="#/projects">← All projects</a>

      <p class="eyebrow">${escapeHTML(project.tags.join(' / '))}</p>
      <h1>${escapeHTML(project.title)}</h1>
      <p class="lead">${escapeHTML(project.summary)}</p>

      <div class="case-meta">
        <span>
          <strong>Role</strong><br>
          ${escapeHTML(project.role)}
        </span>

        <span>
          <strong>Discipline</strong><br>
          ${escapeHTML(project.category)}
        </span>
      </div>

      <h2>Engineering process</h2>
      <ol>
        ${project.process.map((step) => `<li>${escapeHTML(step)}</li>`).join('')}
      </ol>

      <h2>Results and next steps</h2>
      <p>${escapeHTML(project.results)}</p>

      <p class="print-note">
        Use Print → Save as PDF for a printable case study.
      </p>
    </article>
  `;
}

function about() {
  return `
    <section class="page-intro">
      <p class="eyebrow">ABOUT</p>
      <h1>Design, experiment, iterate.</h1>

      <p>
        I'm studying Mechanical Engineering and Bioengineering at
        Northeastern University, with interests spanning medical device
        development, electromechanical systems, and software.
        This portfolio documents the questions, decisions, prototypes,
        and results behind my work.
      </p>

      <p>
        <a href="mailto:herman.mas@northeastern.edu">Get in touch ↗</a>
      </p>
    </section>
  `;
}

function resume() {
  return `
    <section class="page-intro">
      <p class="eyebrow">RESUME</p>
      <h1>Resume</h1>

      <p>
        A summary of my engineering experience, education, and technical skills.
      </p>

      <p>
        <a class="text-link" href="./resume.pdf" download>
          Download resume PDF ↗
        </a>
      </p>
    </section>
  `;
}

function render() {
  const path = window.location.hash.slice(1) || '/';
  let content;

  if (path === '/') {
    content = home();
  } else if (path === '/projects') {
    content = projectsPage();
  } else if (path.startsWith('/projects/')) {
    const slug = path.split('/')[2];
    const project = orderedProjects.find((item) => item.slug === slug);

    content = project ? projectPage(project) : '<h1>Project not found</h1>';
  } else if (path === '/about') {
    content = about();
  } else if (path === '/resume') {
    content = resume();
  } else {
    content = '<h1>Page not found</h1>';
  }

  app.innerHTML = `
    ${header}
    <main id="main">${content}</main>
    ${footer}
  `;

  window.scrollTo(0, 0);
}

window.addEventListener('hashchange', render);
render();
