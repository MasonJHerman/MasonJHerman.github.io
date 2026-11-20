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
    summary: "Applied statics and bearing-life considerations to assess an electric race car differential, compare SKF bearing options, and recommend a component for the powertrain. Extended the work through SolidWorks component modeling, drawings, and preliminary structural simulation.",
    role: 'Powertrain mechanical design and analysis',
    contributions: [
      "Calculated differential bearing loads and support reactions using statics, checking earlier calculations against the revised design considerations",
      "Compared SKF bearings based on load requirements and expected service life, then presented a recommendation approved by a team lead",
      "Reviewed the previous year’s differential design and calculations to assess the existing bearing arrangement under new design considerations",
      "Performed preliminary SolidWorks stress simulations on components including a rotor plate mount",
      "Updated existing SolidWorks models and drafted smaller components, including hinges and enclosures for electrical hardware"
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
    title: 'Pulse Ox+ — Published Research', category: 'Biomedical Engineering',
    tags: [
      "Biomedical Research",
      "Data Analysis",
      "Prototyping",
      "Technical Writing"
    ],
    summary: "Investigated skin-tone-related variation in pulse oximetry through prototype development, experimental data analysis, and research writing for a published team project.",
    role: 'Biomedical research, prototyping, and publication',
    image: '/images/pulse-ox/FinalPrototype2.png',
    imageAlt: 'Final Pulse Ox+ experimental prototype with sensing hardware and display',
    overview: "Developed and investigated an experimental pulse oximetry approach combining optical sensing with RGB-based skin-tone measurement. The four-person research project spanned literature review, design planning, iterative hardware troubleshooting, experimental data analysis, and preparation of a peer-reviewed conference paper. The work explored feasibility and measurement limitations, not a clinically validated correction algorithm.",
    contributions: [
      "Researched pulse oximetry, skin-tone classification, and published studies to support the team’s design decisions",
      "Organized measurements, performed calculations, created graphs, and helped interpret experimental results",
      "Drafted the initial version of the research paper and worked with teammates on revisions before publication",
      "Helped diagnose circuit and programming problems, suggested fixes, and worked with teammates to test solutions",
      "Assisted with circuit development, some CAD design and 3D printing along with prototype assembly"
    ],
    process: [
      "Researched pulse oximetry and skin-tone measurement methods to guide the prototype design",
      "Worked with the team to combine optical sensing with RGB based skin-tone measurements and explore Monk Skin Tone Scale classification",
      "Helped troubleshoot sensor, circuit, and programming issues through several prototype versions",
      "Organized and analyzed preliminary readings from participants, including comparisons with a commercial pulse oximeter",
      "Drafted the initial research paper and worked with teammates to revise and present the results"
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
    results: "The team completed several prototype iterations and collected preliminary participant measurements. The optical and RGB measurements were not integrated into a validated correction system, and component limitations restricted performance. The results were exploratory and do not establish clinical accuracy.",
    publication: {title:'Pulse Ox+: An Exploratory Model for Melanin-Corrected Pulse Oximetry',venue:'2026 ASEE Northeast Section Conference · March 27, 2026',url:'https://peer.asee.org/58595',doi:'10.18260/1-2--58595'}
  },

  {
    slug: 'ewb-panama', priority: 3, featured: true,
    title: 'Engineers Without Borders — Panama Solar Farm Fence', category: 'Civil / Mechanical Design',
    tags: ['CAD', 'Material Selection', 'Design Constraints', 'Cost Analysis'],
    summary: 'Developed a protective perimeter fence design for a community solar installation in Panama, balancing security, site conditions, access, materials, and practical construction requirements.',
    role: 'Engineering design and project planning',
    overview: 'Designed a perimeter fence concept for a solar installation in Panama. The engineering work considered a rectangular site, a vehicle-access gate, anti-climb mesh and barbed-wire security, local weather, debris exposure, material availability, and contractor implementation. CAD drawings, engineering checks, and material and cost comparisons informed the proposed solution.',
    contributions: [
      'Developed CAD drawings and evaluated the layout, access gate, and perimeter security requirements',
      'Researched materials and installation options in light of site exposure, maintenance, and constructability',
      'Performed dimensional and engineering checks and compared material and cost considerations',
      'Coordinated design decisions with the project team and considered contractor execution requirements'
    ],
    process: ['Established site and security constraints, including access and exposure', 'Compared fence components and material choices against constructability and cost', 'Developed and reviewed CAD layouts and dimensional checks', 'Prepared the proposed design for contractor-oriented implementation planning'],
    results: 'Prepared a design and implementation plan for the proposed fence. The project progressed through design and contractor-oriented implementation planning.'
  },
  {
    slug: 'vexu-drivetrain', priority: 4, featured: true,
    title: 'VEXU — 24-inch Drivetrain Design', category: 'Robotics / Mechanical Design',
    tags: ['Robot Drivetrains', 'CAD', 'Mechanism Selection', 'Design Tradeoffs'],
    summary: 'Explored drivetrain architectures for a 24-inch competition robot, balancing maneuverability, packaging, mechanical complexity, and integration with intake and lift systems.',
    role: 'Drivetrain design',
    overview: 'Developed drivetrain design options for a 24-inch VEXU robot with significant central space reserved for the intake and lift. The design exploration compared X-drive and swerve concepts, accounting for field debris, control and autonomous-operation complexity, chassis construction, and the available manufacturing approach.',
    contributions: ['Evaluated wheel and drivetrain architecture tradeoffs against competition and subsystem constraints', 'Considered chassis structure, motor and gearing decisions, and central packaging needs', 'Developed design reasoning and next steps for integration with lift, intake, and programming work'],
    process: ['Established packaging and competition requirements', 'Compared drivetrain configurations and operational tradeoffs', 'Reviewed chassis and wheel-module concepts', 'Identified integration and prototype-validation questions'],
    results: 'Completed drivetrain concept evaluation and integration planning for the 24-inch robot.'
  },
  {
    slug: 'passive-solar-house', priority: 20, early: true,
    title: 'Passive Solar House — Thermal Design Model', category: 'Early Engineering Exploration',
    tags: ['Passive Solar Design', 'Thermal Testing', 'Fabrication', 'Prototyping'],
    summary: 'Researched passive heating strategies, built a foam-and-wood house model by hand, and investigated its thermal response using a heat lamp, digital thermometer, and timer.',
    role: 'Research, design, fabrication, and testing',
    overview: 'Working with a teammate, researched passive solar heating principles and designed a model house around building shape, window placement, and seasonal heat gain. The foam-and-wood model was drafted, cut, and assembled using hand and power tools, with repeated physical adjustments during construction.',
    contributions: ['Researched the rationale for seasonal solar gain, window positioning, and insulation concepts', 'Developed sketches and manufactured foam-and-wood components with hand and power tools', 'Adjusted the model through hands-on fabrication and assembly iterations', 'Conducted a simple thermal experiment using a heat lamp, digital thermometer, and timer'],
    process: ['Researched passive heating and seasonal design considerations', 'Sketched and built the scale house from foam and wood', 'Adjusted construction details during assembly', 'Observed temperature response under a heat lamp using timed thermometer readings'],
    results: 'Completed a physical model and performed basic timed heat-lamp testing. The timed heat-lamp experiment provided a basic comparison of the model’s temperature response and informed discussion of passive solar design principles.'
  },
  {
    slug: 'wooden-catapult', priority: 21, early: true,
    title: 'Wooden Catapult — Design Competition', category: 'Early Engineering Exploration',
    tags: ['Mechanisms', 'Woodworking', 'Power Tools', 'Iterative Testing'],
    summary: 'Sketched, sourced materials for, and fabricated a wooden catapult, then refined the physical mechanism through repeated testing and adjustments.',
    role: 'Mechanical design, fabrication, and testing',
    overview: 'Designed and built a wooden catapult for a high school engineering competition. The work progressed from hand sketches and material sourcing to wood cutting, assembly, and iterative physical refinement using hand and power tools.',
    contributions: ['Drafted preliminary mechanism and assembly sketches', 'Sourced materials and cut and assembled wooden parts with hand and power tools', 'Tested the mechanism repeatedly and adjusted the physical model in response to its behavior'],
    process: ['Sketch the proposed mechanism', 'Source and fabricate wooden components', 'Assemble and operate the catapult', 'Adjust construction and retest'],
    results: 'Completed and iteratively tested a physical catapult. The project emphasized fabrication, mechanism refinement, and hands-on evaluation.'
  },
  {
    slug: 'ai-microexpressions', priority: 22, early: true,
    title: 'Applied AI & Facial Micro-Expressions — Research Proposal', category: 'Early Research Exploration',
    tags: ['Applied AI', 'Research', 'Computer Vision', 'Healthcare'],
    summary: 'Explored the proposed use of AI-based facial micro-expression recognition in mental health assessment for a mock research competition.',
    role: 'Research and concept development',
    overview: 'Investigated the potential of computer vision and facial micro-expression analysis as a research direction related to mental health assessment. The work was a conceptual proposal for a mock research competition, not a trained model or diagnostic study.',
    contributions: ['Explored possible applications of facial micro-expression recognition and applied AI', 'Developed the research concept and considered its potential healthcare relevance'],
    results: 'Conceptual research proposal only. No diagnostic accuracy, clinical utility, or deployed system was established.'
  },
  {
    slug: 'delamain', priority: 3, featured: false,
    contributionLabels: ['Software design', 'Data privacy'],
    title: 'DelamainOS — Personal AI Platform', category: 'Software',
    tags: ['AI', 'Software Architecture'],
    summary: 'Developing a local-first personal AI platform with modular model integration and an emphasis on user control of data.',
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
    summary: 'Developed and evaluated image-based taxiing control approaches using PID feedback and navigation logic in the X-Plane simulator.',
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
    summary: "Designed and iterated a SolidWorks reflector assembly for a servo-driven heliostat, fabricated and assembled the prototype, and helped develop its light-tracking controls. Design revisions reduced estimated print time by 75%.",
    role: 'Mechanical design, fabrication, programming, and analysis',
    image: '/images/heliostat/HelioFinal.png',
    imageAlt: 'Completed heliostat prototype with reflector and supporting assembly',
    overview: "Our team developed a single-axis heliostat that uses light sensors and a servo motor to orient a reflector. The work combined reflector geometry, SolidWorks design, 3D printing, physical assembly, and light-sensor-based servo control. Iterations addressed print failures, fit, mounting, and stability, alongside control-program troubleshooting and functional testing.",
    contributions: [
      "Compared reflector shapes and used parabolic equations, focal-point calculations, and reflection geometry to design a curved reflector",
      "Created the SolidWorks models and revised the base, wall thickness, and supports to reduce material use and printing time",
      "Completed all 3D printing and most assembly, fixing fit, mounting, and stability problems through test prints and adjustments",
      "Co-developed the tracking program with a teammate, including servo control, threshold changes, and troubleshooting",
      "Researched and sourced materials, tested assembly stability, and helped evaluate tracking behavior",
      "Prepared most of the project documentation and presentation"
    ],
    process: [
      "Compared flat and curved reflector ideas, then used parabolic equations and reflection geometry to develop a design inspired by a flashlight's parabolic reflector ideal for a future receiver",
      "Modeled the reflector in SolidWorks and revised the base, thickness, and supports after trial prints and failures",
      "Printed and assembled the parts, correcting mounting, fit, and stability problems along the way",
      "Worked with a teammate to write and troubleshoot the light's tracking code, including sensor thresholds and servo movement",
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
    results: "Completed a functional prototype with a 3D-printed reflector and servo-controlled movement. Design revisions reduced estimated printing time from approximately 18 hours to 4.5 hours (75%). Tracking and optical performance remained limited by component quality and the single-axis configuration; the prototype demonstrated the basic operating concept rather than a fully optimized system.",
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
    summary: "Designed and iterated laser-cut turbine blades, assembled the shaft-and-bearing system, and evaluated rotor speed and voltage across three test distances.",
    role: "Mechanical design, fabrication, and data analysis",
    image: '/images/wind-turbine/WTFinalProject.png',
    imageAlt: 'Completed student-built wind turbine prototype',
    overview: "Our three-person team built a small wind turbine to examine how fan distance affected rotor speed and electrical output. The development process included AutoCAD blade design, laser-cut fabrication, shaft and bearing installation, electromechanical integration, and iterative corrections for fit and alignment. Experimental measurements at three distances informed the analysis and final report.",
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
