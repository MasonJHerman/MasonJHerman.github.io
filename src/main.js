
import './style.css';
import { orderedProjects } from './projects.js';


import {
  portfolioPdfPage,
  downloadPortfolioPdf,
} from './portfolio-pdf.js';


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
  (project) => !project.featured && !project.coursework
);
const courseworkProjects = orderedProjects.filter(
  (project) => project.coursework
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
    <a class="project-row ${project.image ? 'has-image' : ''}" href="#/projects/${project.slug}">
      <span class="project-index">
        ${String(project.priority).padStart(2, '0')}
      </span>

      <span class="project-info">
        <strong>${escapeHTML(project.title)}</strong>
        <small>${escapeHTML(project.tags.slice(0, 3).join(' · '))}</small>
        <span class="project-summary">${escapeHTML(project.summary)}</span>
      </span>

      ${project.image ? `<img class="project-thumb" src="${escapeHTML(project.image)}" alt="${escapeHTML(project.imageAlt || project.title)}" loading="lazy">` : ''}
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

function publicationBlock() {
  return `
    <section class="publication">
      <p class="eyebrow">PUBLISHED RESEARCH · 2026</p>
      <h2>Pulse Ox+: An Exploratory Model for Melanin-Corrected Pulse Oximetry</h2>
      <p>First-listed co-author · 2026 ASEE Northeast Section Conference</p>
      <a class="text-link" href="https://peer.asee.org/58595" target="_blank" rel="noopener noreferrer">Read the published paper ↗</a>
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
    ${publicationBlock()}
    ${projectSection('Other technical projects', otherProjects)}
    ${projectSection('Cornerstone engineering projects', courseworkProjects)}
  `;
}

function projectsPage() {
  return `
    <section class="page-intro">
      <p class="eyebrow">SELECTED WORK</p>
      <h1>Projects</h1>
      <p><a class="text-link" href="#/portfolio-pdf">View / Download Engineering Portfolio PDF ↗</a></p>

      <p>
        Mechanical design and biomedical research first, followed by
        software, controls, and smaller builds. Ordered by relevance,
        not recency.
      </p>
    </section>

    ${projectSection('Featured engineering work', featuredProjects)}
    ${projectSection('Other technical projects', otherProjects)}
    ${projectSection('Cornerstone engineering projects', courseworkProjects)}
  `;
}

// Render an original project image with its associated caption.
function projectFigure(src, alt, caption = '') {
  if (!src) return '';
  return `
    <figure class="story-figure">
      <img src="${escapeHTML(src)}" alt="${escapeHTML(alt || '')}" loading="lazy">
      ${caption ? `<figcaption>${escapeHTML(caption)}</figcaption>` : ''}
    </figure>
  `;
}

// Reusable two-column section. The media column can appear on either side.
function storySection(title, content, figure = '', imageOnLeft = false) {
  return `
    <section class="story-section ${figure ? 'has-media' : ''} ${imageOnLeft ? 'image-left' : ''}">
      <div class="story-copy">
        <h2>${escapeHTML(title)}</h2>
        ${content}
      </div>
      ${figure ? `<div class="story-media">${figure}</div>` : ''}
    </section>
  `;
}

function projectPage(project) {
  const figures = project.figures || [];
  const sections = [];
  const usedFigures = new Set();

  // Pair the finished prototype with the project overview.
  sections.push(storySection(
    'Project overview',
    `<p>${escapeHTML(project.overview || project.summary)}</p>`,
    projectFigure(project.image, project.imageAlt || project.title)
  ));

  // Put the first supporting image beside your personal contributions.
  if (project.contributions?.length) {
    const figure = figures[0];
    if (figure) usedFigures.add(0);
    sections.push(storySection(
      'My contributions',
      `<ul>${project.contributions.map((item, index) => `<li>${project.contributionLabels?.[index] ? `<strong>${escapeHTML(project.contributionLabels[index])}:</strong> ` : ''}${escapeHTML(item)}</li>`).join('')}</ul>`,
      figure ? projectFigure(figure.src, figure.alt, figure.caption) : '',
      true
    ));
  }

  // Put the next image beside the engineering process.
  if (project.process?.length) {
    const figure = figures[1];
    if (figure) usedFigures.add(1);
    sections.push(storySection(
      'Engineering process',
      `<ol>${project.process.map((step) => `<li>${escapeHTML(step)}</li>`).join('')}</ol>`,
      figure ? projectFigure(figure.src, figure.alt, figure.caption) : ''
    ));
  }

  // Put a results chart beside the results text when available.
  const resultsFigure = figures[2];
  if (resultsFigure) usedFigures.add(2);
  sections.push(storySection(
    'Results and limitations',
    `<p>${escapeHTML(project.results)}</p>`,
    resultsFigure ? projectFigure(resultsFigure.src, resultsFigure.alt, resultsFigure.caption) : '',
    true
  ));

  // Never silently omit images if a project has additional figures.
  const remainingFigures = figures.filter((_, index) => !usedFigures.has(index));
  const additionalFigures = remainingFigures.length ? `
    <section class="extra-documentation">
      <h2>Additional documentation</h2>
      <div class="figure-grid">
        ${remainingFigures.map((figure) => projectFigure(figure.src, figure.alt, figure.caption)).join('')}
      </div>
    </section>
  ` : '';

  const publication = project.publication ? `
    <section class="paper-link">
      <p class="eyebrow">PUBLICATION</p>
      <h2>${escapeHTML(project.publication.title)}</h2>
      <p>${escapeHTML(project.publication.venue)} · DOI: ${escapeHTML(project.publication.doi)}</p>
      <a class="text-link" href="${escapeHTML(project.publication.url)}" target="_blank" rel="noopener noreferrer">View paper on ASEE Peer ↗</a>
    </section>
  ` : '';

  return `
    <article class="case-study">
      <a class="back" href="#/projects">← All projects</a>
      <p class="eyebrow">${escapeHTML(project.tags.join(' / '))}</p>
      <h1>${escapeHTML(project.title)}</h1>
      <p class="lead">${escapeHTML(project.summary)}</p>
      <div class="case-meta">
        <span><strong>My role</strong><br>${escapeHTML(project.role)}</span>
        <span><strong>Discipline</strong><br>${escapeHTML(project.category)}</span>
      </div>
      <div class="project-story">${sections.join('')}</div>
      ${additionalFigures}
      ${publication}
      <p class="print-note">Use Print → Save as PDF for a printable case study.</p>
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
  } else if (path === '/portfolio-pdf') {
    content = portfolioPdfPage();
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

document.addEventListener('click', (event) => {
  if (event.target.closest('#download-portfolio-pdf')) {
    downloadPortfolioPdf();
  }
});

window.addEventListener('hashchange', render);
render();
