import { orderedProjects } from './projects.js';
import './portfolio-pdf.css';

const esc = (v = '') => String(v ?? '').replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
// Optional contribution labels are shared with the website.
// New projects without labels render as ordinary bullets.
function itemsHTML(items, ordered = false, labels = []) {
  if (!Array.isArray(items) || !items.length) return '';
  const tag = ordered ? 'ol' : 'ul';
  return `<${tag}>${items.map((item, index) => {
    const label = Array.isArray(labels) ? labels[index] : '';
    return `<li>${label ? `<strong class="pdf-contribution-label">${esc(label)}:</strong> ` : ''}${esc(item)}</li>`;
  }).join('')}</${tag}>`;
}
const skillTags = (project) => {
  const tags = Array.isArray(project.tags) ? project.tags.filter(Boolean).slice(0, 5) : [];
  return tags.length ? `<div class="pdf-skills" aria-label="Project technical skills"><span class="pdf-skills-label">TOOLS &amp; SKILLS</span>${tags.map(tag => `<span class="pdf-skill">${esc(tag)}</span>`).join('')}</div>` : '';
};
const section = (title, body) => body ? `<section class="pdf-section"><h3>${title}</h3>${body}</section>` : '';

function figuresHTML(project) {
  // No image count limit: future projects automatically include all their figures.
  const figures = [
    ...(project.image ? [{ src: project.image, alt: project.imageAlt || project.title, caption: project.imageCaption || 'Prototype / system overview' }] : []),
    ...(Array.isArray(project.figures) ? project.figures : []),
  ].filter(f => f && f.src);
  if (!figures.length) return '';
  return `<div class="pdf-figures" aria-label="Project figures">${figures.map((f, i) => `
    <figure class="pdf-figure">
      <div class="pdf-image-area"><img src="${esc(f.src)}" alt="${esc(f.alt || '')}" /></div>
      ${f.caption ? `<figcaption><span class="pdf-fig-num">Fig. ${i + 1}.</span> ${esc(f.caption)}</figcaption>` : ''}
    </figure>`).join('')}</div>`;
}

function projectHTML(project, index) {
  const overview = project.overview || project.summary;
  const publication = project.publication;
  return `<article class="pdf-project">
    <header class="pdf-project-header">
      <span class="pdf-number">${String(index + 1).padStart(2, '0')}</span>
      <div><h2>${esc(project.title || 'Untitled project')}</h2>
      <p class="pdf-meta">${[project.category, project.role].filter(Boolean).map(esc).join(' · ')}</p></div>
    </header>
    ${section('Project synopsis', overview ? `<p>${esc(overview)}</p>` : '')}
    ${skillTags(project)}
    ${figuresHTML(project)}
    ${section('My technical contributions', itemsHTML(project.contributions, false, project.contributionLabels))}
    ${section('Engineering process', itemsHTML(project.process, true))}
    ${section('Results and limitations', project.results ? `<p>${esc(project.results)}</p>` : '')}
    ${publication ? `<p class="pdf-publication"><strong>Publication:</strong> ${esc(publication.title || '')}${publication.venue ? ` · ${esc(publication.venue)}` : ''}${publication.url ? ` <a href="${esc(publication.url)}">${esc(publication.doi || 'View publication')}</a>` : ''}</p>` : ''}
  </article>`;
}

export function portfolioPdfPage() {
  const marked = orderedProjects.filter(p => p.pdfFeatured === true);
  const selected = marked.length ? marked : orderedProjects.filter(p => p.featured === true);
  return `<div class="pdf-controls"><a href="#/projects">← Back to projects</a><button id="download-portfolio-pdf" type="button">Save portfolio as PDF</button></div>
    <div class="pdf-document"><header class="pdf-title-block">
      <p class="pdf-kicker">SELECTED ENGINEERING WORK</p><h1>Mason J. Herman</h1>
      <p>Mechanical Engineering &amp; Bioengineering · Northeastern University</p>
      <p class="pdf-contact"><a href="mailto:herman.mas@northeastern.edu">herman.mas@northeastern.edu</a> · <a href="https://masonjherman.github.io/">masonjherman.github.io</a></p>
    </header>${selected.map(projectHTML).join('')}</div>`;
}

export async function downloadPortfolioPdf() {
  const button = document.getElementById('download-portfolio-pdf');
  const oldTitle = document.title;
  if (button) { button.disabled = true; button.textContent = 'Preparing PDF…'; }
  try {
    if (document.fonts?.ready) await document.fonts.ready;
    const imgs = [...document.querySelectorAll('.pdf-document img')];
    await Promise.all(imgs.map(img => img.complete ? Promise.resolve() : new Promise(resolve => {
      img.addEventListener('load', resolve, { once: true });
      img.addEventListener('error', resolve, { once: true });
    })));
    document.title = 'Mason_Herman_Engineering_Portfolio';
    window.print();
  } finally {
    // Print dialogs control the final filename; title is only a suggestion.
    window.addEventListener('afterprint', () => { document.title = oldTitle; }, { once: true });
    if (button) { button.disabled = false; button.textContent = 'Save portfolio as PDF'; }
  }
}
