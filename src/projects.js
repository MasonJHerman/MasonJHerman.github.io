export const projects = [
  {
    slug: 'electric-racing', pdfFeatured: true, priority: 1, featured: true,
    contributionLabels: [
      "Statics analysis",
      "Bearing selection",
      "Design review",
      "SolidWorks simulation",
      "CAD drafting"
    ],
    title: 'Electric Racing — Powertrain', category: 'Mechanical Engineering',
    tags: [
      "SolidWorks",
      "Statics",
      "Bearing Selection",
      "Stress Analysis"
    ],
    summary: "As a powertrain team member, I independently calculated differential bearing loads, compared SKF bearings, and presented a bearing recommendation approved by a team lead. I also completed CAD and simulation tasks in SolidWorks.",
    role: 'Powertrain team member',
    contributions: [
      "Calculated differential bearing loads and support reactions using statics equations, using the previous year’s calculations to check my work",
      "Compared SKF bearings based on load requirements and expected service life, then presented a recommendation approved by a team lead",
      "Reviewed the previous year’s differential design and calculations to assess the existing bearing arrangement",
      "Ran a SolidWorks stress simulation on a rotor plate mount",
      "Worked with existing SolidWorks models and completed smaller drafting tasks, including a hinge"
    ],
    results: "Completed a differential bearing assessment and received team-lead approval for the recommended bearing model. I also completed CAD drafting and preliminary simulation work on other mechanical components.",},
  {
    slug: 'pulse-ox', pdfFeatured: true, priority: 2, featured: true,
    contributionLabels: [
      "Research and design",
      "Data analysis",
      "Research writing",
      "Troubleshooting",
      "Prototype development"
    ],
    title: 'Pulse Ox+ — Biomedical Research', category: 'Biomedical Engineering',
    tags: [
      "Biomedical Research",
      "Data Analysis",
      "Prototyping",
      "Technical Writing"
    ],
    summary: "Researched design methods, analyzed experimental data, and helped develop and document a pulse oximeter prototype studying the effects of skin pigmentation on readings.",
    role: 'Research contributor and first-listed co-author',
    image: '/images/pulse-ox/FinalPrototype2.png',
    imageAlt: 'Final Pulse Ox+ experimental prototype with sensing hardware and display',
    overview: "Our four-person team built an experimental pulse oximeter combining red and infrared sensing with RGB-based skin-tone measurements. We explored whether skin-tone information could help address differences in pulse oximeter readings. I focused on research, design planning, data analysis, and writing, and also helped troubleshoot the prototype.",
    contributions: [
      "Researched pulse oximetry, skin-tone classification, and published studies to support the team’s design decisions",
      "Organized measurements, performed calculations, created graphs, and helped interpret experimental results",
      "Drafted the initial version of most of the research paper and worked with teammates on revisions before publication",
      "Helped diagnose circuit and programming problems, suggested fixes, and worked with teammates to test solutions",
      "Assisted with circuit development, some CAD design and 3D printing, and prototype assembly"
    ],
    process: [
      "Researched pulse oximetry and skin-tone measurement methods to guide the prototype design",
      "Worked with the team to combine optical sensing with RGB-based skin-tone measurements and explore Monk Skin Tone Scale classification",
      "Helped troubleshoot sensor, circuit, and programming issues through several prototype versions",
      "Organized and analyzed preliminary readings from five participants, including comparisons with a commercial pulse oximeter",
      "Drafted much of the initial research paper and worked with teammates to revise and present the results"
    ],
    figures: [
  {
    src: '/images/pulse-ox/FinalCircuit.png',
    alt: 'Electronic circuit assembly for the Pulse Ox+ prototype',
    caption: 'Electronic circuit assembly used during experimental prototype development.'
  },
  {
    src: '/images/pulse-ox/3DSimpleWristBox.png',
    alt: 'CAD design of a wrist-mounted enclosure',
    caption: 'Proposed wrist-mounted enclosure explored during mechanical design.'
  },
  {
    src: '/images/pulse-ox/SampleData.png',
    alt: 'Experimental data collected during Pulse Ox+ testing',
    caption: 'Preliminary experimental measurements used to evaluate the prototype.'
  }
  ],
    results: "Our team built an experimental prototype and collected preliminary measurements from five participants. We observed trends worth further study, but the optical and RGB sensors operated separately. The proposed correction method was not clinically validated, and further testing would be needed to assess accuracy.",
    publication: {title:'Pulse Ox+: An Exploratory Model for Melanin-Corrected Pulse Oximetry',venue:'2026 ASEE Northeast Section Conference · March 27, 2026',url:'https://peer.asee.org/58595',doi:'10.18260/1-2--58595'}
  },
  {
    slug: 'delamain', priority: 3, featured: false,
    contributionLabels: ['Software design', 'Data privacy'],
    title: 'DelamainOS — Personal AI Platform', category: 'Software',
    tags: ['AI', 'Software Architecture'],
    summary: 'An in-progress, privacy-focused AI platform designed for local operation and modular model integration.',
    role: 'Independent developer',
    contributions: [
      'Developing a modular architecture for local AI models',
      'Prioritizing local processing and user control of data'
    ],
    results: 'Development ongoing'
  },
  {
    slug: 'ai4all', priority: 4, featured: false,
    contributionLabels: ['Control programming', 'Simulation testing'],
    title: 'Autonomous Aircraft Control — AI4ALL', category: 'Software',
    tags: ['Python', 'Control Systems', 'Computer Vision'],
    summary: 'Collaborative image-based feedback control for aircraft taxiing in the X-Plane simulator.',
    role: 'Program participant',
    contributions: [
      'Implemented PID control and navigation algorithms',
      'Evaluated model behavior in simulation'
      ],
    results: 'Developed and tested control approaches in simulation'
  },
  {
    slug: 'heliostat', pdfFeatured: true, priority: 5, coursework: true,
    contributionLabels: [
      "Reflector design",
      "CAD revisions",
      "3D printing and assembly",
      "Programming",
      "Materials and testing",
      "Documentation"
    ],
    title: 'Heliostat — Light-Tracking Reflector', category: 'Mechanical / Electromechanical',
    tags: [
      "SolidWorks",
      "Mechanical Design",
      "3D Printing",
      "Programming"
    ],
    summary: "Designed the curved reflector and support structure for a light-tracking heliostat, completed the CAD and 3D printing, and helped develop the tracking program.",
    role: 'Mechanical design, fabrication, programming, and analysis',
    image: '/images/heliostat/HelioFinal.png',
    imageAlt: 'Completed heliostat prototype with reflector and supporting assembly',
    overview: "Our team built a single-axis heliostat that uses light sensors and a servo motor to move a reflector. I designed the reflector and support structure, completed the SolidWorks models and 3D printing, and handled most of the mechanical assembly. I also worked with a teammate on the tracking program and testing.",
    contributions: [
      "Compared reflector shapes and used parabolic equations, focal-point calculations, and reflection geometry to design a curved reflector",
      "Created the SolidWorks models and revised the base, wall thickness, and supports to reduce material use and printing time",
      "Completed all 3D printing and most assembly, fixing fit, mounting, and stability problems through test prints and adjustments",
      "Co-developed the tracking program with a teammate, including servo control, threshold changes, and troubleshooting",
      "Researched and sourced materials, tested assembly stability, and helped evaluate tracking behavior",
      "Prepared most of the project documentation and presentation"
    ],
    process: [
      "Compared flat and curved reflector ideas, then used parabolic equations and reflection geometry to develop a design with a proposed focal point for a future receiver",
      "Modeled the reflector in SolidWorks and revised the base, thickness, and supports after trial prints and failures",
      "Printed and assembled the parts, correcting mounting, fit, and stability problems along the way",
      "Worked with a teammate to write and troubleshoot the light-tracking code, including sensor thresholds and servo movement",
      "Tested the assembled prototype for stability and basic tracking behavior and documented the results"
    ],
    figures: [
    {
      src: '/images/heliostat/HelioDraft.png',
      alt: 'Early heliostat prototype design',
      caption: 'Early mechanical arrangement developed during prototype design.'
    },
    {
      src: '/images/heliostat/HelioFinalReflector.png',
      alt: 'Final heliostat reflector design',
      caption: 'Final reflector design following mechanical iterations.'
    },
    {
      src: '/images/heliostat/Reflector3DPrint.png',
      alt: '3D-printed reflector component',
      caption: 'Fabricated reflector component produced during prototype development.'
    }
  ],
    results: "Completed a working prototype with a 3D-printed reflector and servo-controlled movement. My design changes reduced estimated printing time from about 18 hours to 4.5 hours, a 75% reduction. The proposed focal point was intended for a future receiver; optical performance and tracking accuracy were not formally measured.",
  },
  {
    slug: 'wind-turbine', pdfFeatured: true, priority: 6, coursework: true,
    contributionLabels: [
      "Blade design",
      "Mechanical design",
      "Fabrication and assembly",
      "Design revisions",
      "Testing and analysis",
      "Documentation"
    ],
    title: 'Prototype Wind Turbine', category: 'Mechanical / Energy Systems',
    tags: [
      "AutoCAD",
      "Laser Cutting",
      "Mechanical Assembly",
      "Data Analysis"
    ],
    summary: "Designed and tested laser-cut turbine blades, led most of the mechanical construction, and analyzed rotor speed and voltage measurements from a small wind turbine.",
    role: "Mechanical design, fabrication, and data analysis",
    image: '/images/wind-turbine/WTFinalProject.png',
    imageAlt: 'Completed student-built wind turbine prototype',
    overview: "Our three-person team built a small wind turbine to study how fan distance affected rotor speed and electrical output. I led much of the mechanical design and construction, including blade design in AutoCAD, laser cutting, and shaft and bearing assembly. I also analyzed the test data and prepared the report and presentation.",
    contributions: [
      "Designed turbine blades in AutoCAD and revised them through several laser-cut wooden prototypes",
      "Led component layout and material selection, working with teammates to design and adjust the turbine assembly",
      "Completed most construction, including laser cutting, mounting bearings, installing the shaft and provided rotor, and attaching electrical components",
      "Redesigned and adjusted parts to address alignment, weight, and fitting problems during assembly",
      "Calculated results from recorded test data and interpreted changes in rotor speed and voltage at different fan distances",
      "Prepared the full project report and presentation"
    ],
    process: [
      "Designed turbine blades in AutoCAD and tested several laser-cut wooden versions before choosing the final design",
      "Planned the component layout, selected materials, and built the mechanical support structure",
      "Mounted the bearings, shaft, provided rotor, and electrical components, adjusting the parts for fit and alignment",
      "Redesigned parts when weight, alignment, and mounting problems appeared during construction",
      "Tested the turbine at 1 m, 2 m, and 3 m, then calculated and interpreted speed and voltage results"
    ],
    figures: [
    {
      src: '/images/wind-turbine/Shaft&Bearings.png',
      alt: 'Shaft and bearing components of the wind turbine',
      caption: 'Mechanical shaft and bearing assembly used in the turbine.'
    },
    {
      src: '/images/wind-turbine/WTCircuitry.png',
      alt: 'Electrical circuitry of the wind turbine prototype',
      caption: 'Circuitry integrated into the turbine for testing and measurement.'
    }
  ],
    results: "The turbine reached 88 RPM and 0.52 V at 1 m, and 68 RPM and 0.41 V at 2 m. At 3 m, we recorded no rotation or voltage. These were preliminary measurements; we did not fully measure airflow speed, electrical load, or conversion efficiency.",
  }
];
export const orderedProjects = [...projects].sort((a,b)=>a.priority-b.priority);
