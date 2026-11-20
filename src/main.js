
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

const earlyProjects = orderedProjects.filter((project) => project.early);

const header = `
  <header class="site-header">
    <a class="wordmark" href="#/">MASON J. HERMAN</a>
    <nav aria-label="Main navigation">
      <a href="#/about">About</a>
      <a href="#/projects">Projects</a>
      <a href="#/experience">Experience</a>
      <a href="#/recognition">Achievements</a>
      <a href="#/resume">Resume</a>
      <a href="#/contact">Contact</a>
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

function earlyProjectCard(project) {
  return `<a class="exploration-card" href="#/projects/${project.slug}">
    <span class="exploration-icon" aria-hidden="true">${`<i data-lucide="${project.slug === 'passive-solar-house' ? 'house' : project.slug === 'wooden-catapult' ? 'wrench' : 'flask-conical'}"></i>`}</span>
    <span class="exploration-category">${escapeHTML(project.category)}</span>
    <strong>${escapeHTML(project.title)}</strong>
    <span>${escapeHTML(project.summary)}</span><span class="exploration-more">Read project ↗</span>
  </a>`;
}
function earlySection() {
  return `<section class="early-section"><div class="section-heading"><h2>Earlier engineering explorations</h2><span>High school · Selected work</span></div>
    <p class="section-context">Hands-on builds and early research that helped shape my approach to engineering. </p>
    <div class="exploration-grid">${earlyProjects.map(earlyProjectCard).join('')}</div></section>`;
}
function skillCategory(icon, title, summary, items) {
  return `<article class="skill-category"><div class="skill-category-heading"><span class="skill-category-icon" aria-hidden="true"><i data-lucide="${icon}"></i></span><div><h3>${title}</h3><p>${summary}</p></div></div><div class="skill-chips">${items.map(item=>`<span>${escapeHTML(item)}</span>`).join('')}</div></article>`;
}
function portrait(className = '') {
  return `<div class="portrait-frame ${className}"><img src="/images/headshot.jpg" alt="Portrait of Mason Herman" onload="this.parentElement.classList.add('has-photo')" onerror="this.remove()" /><div class="portrait-placeholder"><span>MJH</span></div></div>`;
}
function home() {
  return `<section class="home-hero-new">
    <div class="home-hero-copy"><p class="eyebrow">NORTHEASTERN UNIVERSITY · MECHANICAL ENGINEERING &amp; BIOENGINEERING</p>
      <h1>Engineering through design, experimentation, and discovery.</h1>
      <p class="lead">I'm Mason Herman, an engineering student interested in developing physical technologies at the intersection of mechanical design, biomedical devices, and robotics.</p>
      <p>I enjoy understanding a problem, building a workable solution, testing its limitations, and improving the design. My portfolio brings together engineering teams, hands-on prototypes, biomedical research, and computational projects.</p>
      <div class="hero-actions"><a class="primary-link" href="#/projects">Explore projects ↗</a><a class="text-link" href="#/experience">Experience ↗</a><a class="text-link" href="#/about">About me ↗</a></div>
    </div><aside class="home-portrait">${portrait('home-headshot')}<p>Mechanical design · Biomedical engineering · Robotics</p><a class="text-link" href="#/contact">Get in touch ↗</a></aside>
  </section>
  <section class="home-guide"><div class="section-heading"><h2>Explore my work</h2><span>Start here</span></div><div class="home-guide-grid">
    <a href="#/projects"><span class="guide-number">01 / DESIGN</span><h3>Projects</h3><p>CAD, prototyping, engineering analysis, and experimental results.</p><span>View case studies ↗</span></a>
    <a href="#/experience"><span class="guide-number">02 / PRACTICE</span><h3>Experience</h3><p>Employment, professional responsibilities, and community initiatives.</p><span>Explore experience ↗</span></a>
    <a href="#/recognition"><span class="guide-number">03 / ACHIEVEMENTS</span><h3>Achievements</h3><p>Published research, academic recognition, and milestones.</p><span>View achievements ↗</span></a>
    <a href="#/contact"><span class="guide-number">04 / CONNECT</span><h3>Contact</h3><p>Reach out about engineering opportunities and collaborations.</p><span>Contact me ↗</span></a>
  </div></section>
  <section class="home-experience"><div class="section-heading"><h2>Engineering teams</h2><a class="text-link" href="#/projects">View related projects ↗</a></div><div class="home-experience-grid">
    <a href="#/projects/electric-racing"><span class="home-exp-icon"><i data-lucide="settings"></i></span><h3>Northeastern Electric Racing</h3><p>Powertrain · Mechanical design &amp; analysis</p></a>
    <a href="#/projects/ewb-panama"><span class="home-exp-icon"><i data-lucide="globe-2"></i></span><h3>Engineers Without Borders</h3><p>Infrastructure design · Community engineering</p></a>
    <a href="#/projects/vexu-drivetrain"><span class="home-exp-icon"><i data-lucide="bot"></i></span><h3>VEXU Robotics</h3><p>Drivetrain architecture · Mechanical integration</p></a>
  </div></section>
  <section class="home-skills"><div class="section-heading"><h2>Technical toolkit</h2><span>Selected skills</span></div>
    <p class="skills-intro">The methods and tools I use to design, build, and evaluate engineering systems.</p>
    <div class="skill-category-grid">
      ${skillCategory('wrench','Mechanical design','Modeling, analysis & documentation',['SolidWorks','Assemblies & drawings','SolidWorks Simulation','Material selection','MATLAB'])}
      ${skillCategory('hammer','Fabrication','Physical prototyping & assembly',['3D printing','Laser cutting','Hand & power tools','Soldering','Breadboarding'])}
      ${skillCategory('code-2','Programming','Software, controls & computation',['Python','Java','C#','JavaScript','Git / GitHub','Arduino'])}
      ${skillCategory('activity','Testing','Experimental methods & instrumentation',['Oscilloscope','Digital multimeter','Function generator','Mechanical testing','Data analysis'])}
    </div>
  </section>`;
}
function projectsPage() {
  const design = orderedProjects.filter(p=>!p.early && p.slug!=='ai4all' && p.slug!=='delamain');
  const software = orderedProjects.filter(p=>p.slug==='ai4all' || p.slug==='delamain');
  return `<section class="page-intro"><p class="eyebrow">ENGINEERING PORTFOLIO</p><h1>Projects</h1><p>Selected engineering work, organized once by technical focus. Open any project for design decisions, fabrication, testing, and outcomes.</p><a class="primary-link portfolio-pdf-button" href="#/portfolio-pdf">View printable portfolio PDF ↗</a></section>
  <nav class="project-jump" aria-label="Project categories"><a href="#/projects#design-projects">Mechanical &amp; biomedical</a><a href="#/projects#software-projects">Software &amp; controls</a><a href="#/projects#early-projects">Earlier explorations</a></nav>
  <div id="design-projects">${projectSection('Mechanical & biomedical engineering',design)}</div>
  <div id="software-projects">${projectSection('Software & controls',software)}</div>
  <div id="early-projects">${earlySection()}</div>`;
}
const experiences = [
  {id:'goldeneye',name:'Goldeneye Foundation',kind:'Volunteer teaching · Community education',role:'Certified Coding Teacher · September 2022–May 2024',body:'Taught Python and Java through weekly individual and small-group sessions for secondary students in Jamaica. Adapted lessons to different levels of programming experience, guided students through exercises, and helped them work through debugging and problem-solving challenges.',skills:'Python · Java · Technical instruction · Mentorship'},
  {id:'teachforth',name:'TeachForth',kind:'Employment · Education',role:'Junior Teacher · June–July 2023',body:'Led daily Python instruction and hands-on programming exercises for groups of students. Helped troubleshoot code, answered questions, and worked with other instructors to adapt activities to students’ progress.',skills:'Python · Classroom instruction · Troubleshooting'},
  {id:'glenarbor',name:'GlenArbor Golf Club',kind:'Employment · Hospitality',role:'Kitchen Assistant · May–June 2023',body:'Worked in kitchen operations, preparing ingredients, receiving deliveries, restocking food and supplies, washing dishes, and maintaining clean work areas. Coordinated routine tasks with kitchen staff to support service.',skills:'Operations · Teamwork · Organization'},
  {id:'green-roof-greeley',name:'Green Roof Greeley',kind:'Community initiative · Environmental advocacy',role:'Research and advocacy proposal',body:'Researched and advocated for introducing vegetated rooftops at local buildings and schools in Greeley. The proposal explored low-maintenance planting, including clover, as a way to integrate greenery into everyday spaces, with potential applications in seasonal thermal management and rooftop gardening. The initiative remained at the proposal and advocacy stage.',skills:'Sustainability research · Proposal development · Community advocacy'},
];
function experiencePage() {
  return `<section class="page-intro"><p class="eyebrow">WORK &amp; COMMUNITY</p><h1>Experience</h1><p>Teaching, employment, and community initiatives. Engineering designs and research projects are documented in the Projects section.</p></section>
  <div class="experience-layout"><nav class="experience-sidebar" aria-label="Experience sections"><span class="eyebrow">EXPLORE</span>${experiences.map(e=>`<a href="#/experience#${e.id}" data-experience="${e.id}">${escapeHTML(e.name)}</a>`).join('')}</nav>
  <div class="experience-details">${experiences.map(e=>`<article id="${e.id}" class="experience-detail"><p class="eyebrow">${escapeHTML(e.kind)}</p><h2>${escapeHTML(e.name)}</h2><p class="experience-role">${escapeHTML(e.role)}</p><p>${escapeHTML(e.body)}</p><p class="experience-skills">${escapeHTML(e.skills)}</p></article>`).join('')}</div></div>`;
}
function recognitionPage() {
  return `<section class="page-intro compact-intro"><p class="eyebrow">RESEARCH &amp; MILESTONES</p><h1>Achievements</h1><p>Selected academic and research accomplishments.</p></section>
  <div class="award-list"><article><span class="award-year">2026</span><div><h2>ASEE Northeast Section Conference — Published Paper</h2><p><strong>Pulse Ox+: An Exploratory Model for Melanin-Corrected Pulse Oximetry.</strong> First-listed co-author on an exploratory biomedical engineering study of optical sensing, prototype development, and preliminary participant measurements.</p><p class="award-links"><a href="https://peer.asee.org/58595" target="_blank" rel="noopener noreferrer">Read publication ↗</a><a href="#/projects/pulse-ox">Project details ↗</a></p></div></article><article><span class="award-year">2025</span><div><h2>Northeastern University — Merit Scholarship</h2><p>Recipient of a university merit scholarship awarded in connection with undergraduate admission.</p></div></article></div>`;
}
function contactPage() {
  return `<section class="page-intro compact-intro"><p class="eyebrow">GET IN TOUCH</p><h1>Contact</h1><p>I'm interested in engineering design, biomedical devices, robotics, and opportunities to collaborate on meaningful technical work. Feel free to reach out through any of the channels below.</p></section>
  <div class="contact-grid"><a class="contact-method" href="mailto:herman.mas@northeastern.edu"><span class="contact-icon"><i data-lucide="mail"></i></span><span class="eyebrow">EMAIL</span><h2>University email</h2><p>herman.mas@northeastern.edu</p><span>Send an email ↗</span></a>
  <a class="contact-method" href="https://www.linkedin.com/in/masonjherman/" target="_blank" rel="noopener noreferrer"><span class="contact-icon"><i data-lucide="linkedin"></i></span><span class="eyebrow">PROFESSIONAL NETWORK</span><h2>LinkedIn</h2><p>Connect and view professional updates.</p><span>Visit profile ↗</span></a>
  <a class="contact-method" href="https://github.com/MasonJHerman" target="_blank" rel="noopener noreferrer"><span class="contact-icon"><i data-lucide="github"></i></span><span class="eyebrow">CODE &amp; PROJECTS</span><h2>GitHub</h2><p>Explore repositories and ongoing software work.</p><span>View repositories ↗</span></a>
  <a class="contact-method" href="./resume.pdf" download><span class="contact-icon"><i data-lucide="file-down"></i></span><span class="eyebrow">DOCUMENT</span><h2>Resume</h2><p>Download a copy of my engineering resume.</p><span>Download PDF ↓</span></a></div>`;
}

function projectFigure(src, alt, caption = '') {
  if (!src) return '';
  return `
    <figure class="story-figure">
      <img src="${escapeHTML(src)}" alt="${escapeHTML(alt || '')}" loading="lazy">
      ${caption ? `<figcaption>${escapeHTML(caption)}</figcaption>` : ''}
    </figure>
  `;
}

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
      'Engineering work',
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
        <span><strong>Focus</strong><br>${escapeHTML(project.role)}</span>
        <span><strong>Discipline</strong><br>${escapeHTML(project.category)}</span>
      </div>
      <div class="project-story">${sections.join('')}</div>
      ${additionalFigures}
      ${publication}
      <p class="print-note"></p>
    </article>
  `;
}

function about() {
  return `
    <article class="about-page">
      <header class="about-intro about-intro-with-photo">
        ${portrait('about-headshot')}
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
      <p>If the preview does not load, use the download link above.</p>
    </section>
  `;
}

function render() {
  const hashPath = window.location.hash.slice(1) || '/';
  const [path, sectionAnchor] = hashPath.split('#');
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
  } else if (path === '/experience') {
    content = experiencePage();
  } else if (path === '/recognition') {
    content = recognitionPage();
  } else if (path === '/contact') {
    content = contactPage();
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

  window.lucide?.createIcons();

  if (sectionAnchor) {
    requestAnimationFrame(() => document.getElementById(sectionAnchor)?.scrollIntoView({behavior:'instant',block:'start'}));
  } else { window.scrollTo(0, 0); }
}

document.addEventListener('click', (event) => {
  if (event.target.closest('#download-portfolio-pdf')) {
    downloadPortfolioPdf();
  }
});

window.addEventListener('hashchange', render);
render();

window.addEventListener("load", () => window.lucide?.createIcons());
