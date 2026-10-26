
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


function professionalLinks(extraClass = '') {
  return `
    <div class="professional-links ${extraClass}" aria-label="Professional profiles">
      <a href="https://github.com/MasonJHerman" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">GitHub ↗</a>
      <a href="https://www.linkedin.com/in/masonjherman/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">LinkedIn ↗</a>
    </div>
  `;
}

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
        I'm a Mechanical Engineering and Bioengineering student at Northeastern University
        with a minor in Artificial Intelligence. My interests include mechanical design, computing, and biomedical technology.
      </p>

      <p class="lead">
        I've always been curious about how things work, from the fundamental principles of
        physics to the complexity of the human body. Engineering gives me a way to turn that
        curiosity into something practical. I especially enjoy hands-on design, working
        through technical problems, and seeing ideas take shape.
      </p>

      <p class="lead">
        My long-term goal is to help develop technologies that improve people's lives,
        while continuing to explore the different fields that make those innovations possible.
      </p>

      <div class="hero-actions">
        <a class="text-link" href="#/projects">Explore all projects ↗</a>
        ${professionalLinks()}
      </div>
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
        software, controls, and smaller builds. Ordered by relevance and impact. The PDF highlights the complete works, while the website includes all works and more detailed documentation including some in-progress developmental projects.
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
    <article class="about-page">
      <header class="about-intro">
        <p class="eyebrow">ABOUT ME</p>
        <h1>Curious about how things work. Even more interested in what we can build.</h1>
        <p class="about-lead">I'm studying Mechanical Engineering and Bioengineering at Northeastern University. I love the part of engineering where reasoning and design turn something I've learned into something I can actually build.</p>
      </header>

      <section class="about-section">
        <h2>How I got here</h2>
        <p>I've been interested in science for as long as I can remember. I was first drawn to theoretical physics and the idea that there are underlying rules to how the world works. Growing up around medicine and neuroscience gave me another subject to be curious about: the human body. The more I learned about it, the more fascinated I became by the many systems that have to work together to keep us alive.</p>
        <p>Volunteering also shaped what I wanted to do with that curiosity. I considered medicine, but I found myself more interested in designing tools that I felt could help the most people with my skills. Biomedical engineering felt like a way to bring together my interest in biology, my love of tinkering, and my desire to do work that matters to others.</p>
        <p>My path to engineering wasn't entirely direct. I originally planned to study computer science because I was fascinated by how computers work and the boundless potential of what we can do with them. I still love programming. Eventually, though, I realized I wanted to use those skills alongside mechanical design and biology rather than limit myself to one area. That's what led me to my combined major.</p>
      </section>

      <section class="about-section">
        <h2>How I approach my work</h2>
        <p>I believe we're defined by what we do, not just by what we say we care about. I try to carry that into my work by following through on commitments, owning my mistakes, and putting in the effort to make something I'm proud to stand behind. I try to hold myself to the definition of integrity that matters to me, especially when doing something properly takes more time than taking the easy route — Even if I love trying to find an elegant and efficient solution to most problems.</p>
        <p>I also know that learning usually involves getting things wrong first. Some of my favorite moments in a project happen when a design doesn't work the way I expected and I have to figure out why. I won't say I love debugging but find it rewarding when I solve a complex issue or test iterations towards a goal. I like working with people who can take the problem seriously without making the whole experience feel serious. A little humor makes the long hours and failed prototypes a lot more enjoyable especially when the nature of the field is often challenging.</p>
      </section>

      <section class="about-section">
        <h2>Outside engineering</h2>
        <p>I'm interested in plenty of things that don't fit neatly into an engineering portfolio. I enjoy game design, drawing, boxing, and Kali, a Filipino martial art. I love watching and talking about films, and I spend a lot of time exploring philosophy and psychology while hoping to find time for hobbies like art, cooking or languages.</p>
        <p>I strongly value perspective and love finding new  interests because each one gives me another way to look at the world. I don't know exactly where they'll all lead, but I hope I never stop finding new things worth learning to hold as encompassing of a world view as I can.</p>
      </section>

      <section class="about-connect" aria-label="Connect">
        <h2>Connect</h2>
        <p>Feel free to reach out or take a look at what I'm working on.</p>
        <div class="about-connect-links">
          <a class="text-link" href="mailto:herman.mas@northeastern.edu">Email me ↗</a>
          ${professionalLinks()}
        </div>
      </section>
    </article>
  `;
}

function resume() {
  return `
    <section class="page-intro resume-intro">
      <p class="eyebrow">RESUME</p>
      <h1>Resume</h1>
      <p class="resume-subtitle">Mechanical Engineering &amp; Bioengineering · Northeastern University</p>
      <p>I'm interested in mechanical design, biomedical device development, and product R&amp;D. My experience includes CAD, engineering analysis, prototyping, and interdisciplinary research.</p>
      <div class="resume-actions">
        <a class="resume-download" href="./resume.pdf" download>Download resume PDF ↓</a>
        ${professionalLinks()}
      </div>
    </section>
    <section class="resume-preview" aria-label="Resume PDF preview">
      <h2>Resume preview</h2>
      <iframe src="./resume.pdf#toolbar=0" title="Resume PDF" loading="lazy"></iframe>
      <p>If the preview does not load, use the download link above after adding your resume PDF.</p>
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
