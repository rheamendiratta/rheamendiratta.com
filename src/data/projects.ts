export type Tag = 'Education' | 'Research & Data' | 'Social Impact';
export type FilterTag = 'all' | Tag;
export type SpiceColor = 'saffron' | 'haldi' | 'gulabi';

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  body: string[];
  bullets?: string[];
  note?: string;
  tags: Tag[];
  color: SpiceColor;
  externalLink?: string;
  externalLinkLabel?: string;
  spotifyLink?: string;
  githubLink?: string;
  pdfLink?: string;
  featuredImage?: ProjectImage;
  galleryImages?: ProjectImage[];
}

export const FILTERS: FilterTag[] = ['all', 'Education', 'Research & Data', 'Social Impact'];

export const projects: Project[] = [
  {
    id: 'india-education-dashboard',
    title: 'India Education Dashboard',
    description:
      "An interactive, multi-source dashboard combining data on Indian education from multiple sources.",
    body: [
      "India runs the largest school system in the world, with over 250 million children enrolled, and yet the data needed to understand how that system is performing is scattered across sources that are incomplete, sometimes biased, and do not work together. The World Bank provides global comparisons, while UDISE+ covers administrative data from India's states and districts. OECD, NAS, and ASER track learning outcomes through different methods, while PGI measures school quality.",
      "This project builds an interactive dashboard organized around three geographic levels — World, India, and States. The World level places India in the global distribution across indicators such as enrollment, completion, learning poverty, teacher ratios, and education spending, and overlays India's own UDISE figures with World Bank estimates for the same indicators. The dual-source overlay surfaces discrepancies between domestic and international data, which are themselves informative.",
      'The goal is neutral, transparent coverage of education data.',
    ],
    note: 'in progress',
    tags: ['Education', 'Research & Data'],
    color: 'saffron',
    externalLink: 'https://rheamendiratta.github.io/india-edu-site.github.io/world/',
  },
  {
    id: 'data-analysis-r',
    title: 'Data Analysis in R',
    description:
      'Evaluation of a Cook County recidivism-reduction program in R.',
    body: [
      "I was given simulated administrative data from the Cook County State's Attorney's Office to evaluate a one-year recidivism-reduction program in Chicago with randomized assignment to treatment and control.",
    ],
    bullets: [
      'Merged arrests with crime records and restricted to Chicago arrests',
      'Created flexible charge indicators (e.g., homicide, weapons)',
      'Reconstructed and validated the post-assignment re-arrest outcome',
      'Tested baseline balance and produced a partner-ready visualization',
      'Estimated the relationship between treatment assignment and re-arrest using statistical models',
    ],
    note: 'Data were generated/manipulated for assessment purposes and are not intended for real-world inference.',
    tags: ['Research & Data'],
    color: 'haldi',
    githubLink: 'https://github.com/rheamendiratta/R-data-analysis-sample',
  },
  {
    id: 'up-close-and-personal',
    title: 'Up Close & Personal',
    description:
      "Hosted ShikshaLokam's flagship video podcast. 20 candid conversations with senior bureaucrats, philanthropists, and educators shaping India's school system.",
    body: [
      "Up Close & Personal is ShikshaLokam's flagship video podcast, featuring in-depth conversations with the people shaping India's education landscape: senior government officials, philanthropists, education entrepreneurs, and classroom innovators.",
      "As host, I led 20 episodes of candid dialogue exploring how India's massive school system can be made more effective, equitable, and responsive to children's needs.",
    ],
    tags: ['Education', 'Social Impact'],
    color: 'gulabi',
    galleryImages: [
      {
        src: '/Anita%20Karwal.png',
        alt: 'In conversation with Anita Karwal',
        caption: 'In conversation with Anita Karwal, former Secretary of the Department of School Education and Literacy, Ministry of Education in India. We dive deep into micro-improvements — an approach that restores the agency of a leader and has the potential to shape a brighter future for our children.',
      },
      {
        src: '/Chetan%20Kapoor.png',
        alt: 'In conversation with Chetan Kapoor',
        caption: 'In conversation with Chetan Kapoor, the CEO of Tech Mahindra Foundation. We explore how solutions must be tailored to local needs, even when the problems are similar.',
      },
    ],
    externalLink: 'https://youtube.com/playlist?list=PLa_4M_7MRsGxbspv3bT1s6c5ZCg9PYmeX&si=pUeOVnoPoGXDjvEK',
    externalLinkLabel: 'Watch on YouTube ↗',
    spotifyLink: 'https://open.spotify.com/show/2Yv5ABwndbUfBbSN7lBsNw?si=ncNkqhzQQzOJDyvVJVpczQ',
  },
  {
    id: 'project-based-learning',
    title: 'Project Based Learning',
    description:
      'A sample PBL lesson plan developed to introduce project-based learning as a pedagogical strategy to teachers.',
    body: [
      'Project-based learning (PBL) is one of the most effective pedagogical strategies for building deep understanding, collaboration, and real-world problem-solving skills in students. Unlike conventional instruction, PBL centres learning around an authentic, open-ended challenge that students work through over time.',
      'This lesson plan was designed to introduce PBL to teachers — walking through the core principles, session structure, and facilitation moves that make the approach work in a classroom context.',
    ],
    tags: ['Education'],
    color: 'saffron',
    pdfLink: '/Project_Based_Learning_Session_Flow.pdf',
    externalLink: 'https://docs.google.com/spreadsheets/d/1rM2InAkSQ-zO_xSIIpdOo9T1pYNGgSqQ/edit?usp=sharing&ouid=111563359665911472402&rtpof=true&sd=true',
    externalLinkLabel: 'Access a sample lesson plan ↗',
  },
  {
    id: 'iop-policy-challenge',
    title: 'IOP Policy Challenge',
    description:
      'First-place policy proposal at the University of Chicago Institute of Politics — a mental health certification program for public accommodations.',
    body: [
      'The MINDful Accommodation Certification (PARM) is a policy proposal developed for the IOP Policy Challenge at the University of Chicago. It addresses a gap in mental health crisis response: hotels and motels, where people in crisis frequently present, have no federal requirement to prepare staff for these situations.',
      'The proposal routes through HHS, SAMHSA, and State Departments of Health to create a voluntary training certification for public accommodations. Certified properties receive tax credits; in return, they maintain one trained staff member on duty at all times, require refresher training every two years, and post the 988 Suicide and Crisis Lifeline number visibly for guests.',
    ],
    tags: ['Social Impact', 'Research & Data'],
    color: 'gulabi',
    featuredImage: { src: '/PARM_IOP.jpg', alt: 'PARM policy proposal overview' },
    galleryImages: [
      {
        src: '/IOP%20Image%201.jpg',
        alt: 'Team at IOP Policy Challenge presentation',
        caption: 'The team came third out of twenty-five teams in this policy challenge.',
      },
      {
        src: '/IOP%20Image%202.jpg',
        alt: 'Team at IOP Institute of Politics',
        caption: 'Team members (L–R) Pablo Hernandez, Alison Collard de Beaufort, Rhea Mendiratta, Manav Mutneja.',
      },
    ],
    externalLink: 'https://drive.google.com/file/d/1ihPH8dLFgzL3sPzeO32CqxScmsmsrjFn/view?usp=drive_link',
    externalLinkLabel: 'Read the full policy proposal →',
  },
  {
    id: 'arcgis-portfolio',
    title: 'ArcGIS Pro Portfolio',
    description:
      'A collection of GIS lab exercises built in ArcGIS Pro — spatial analysis, mapping, and data visualization applied to real-world geographic datasets.',
    body: [
      'This portfolio documents a series of hands-on labs completed in ArcGIS Pro, covering core competencies in geographic information systems: projections and coordinate systems, spatial joins, raster analysis, network analysis, and cartographic design.',
      'Each lab applies GIS methods to real datasets — from demographic and land-use data to environmental and infrastructure layers — building toward the ability to use spatial thinking as a tool for policy research and program design.',
    ],
    tags: ['Research & Data'],
    color: 'haldi',
    pdfLink: '/All_GIS_labs.pdf',
  },
  {
    id: 'program-evaluation-sample',
    title: 'Program Evaluation Sample',
    description:
      'A progression of causal inference methods in R — from naive estimation and exact matching to a Two-Stage Least Squares Instrumental Variable approach.',
    body: [
      'This project works through a sequence of causal inference techniques applied to program evaluation data in R. Starting with naive estimation to establish a baseline, the analysis moves through exact matching to address selection bias, and ultimately implements a Two-Stage Least Squares (2SLS) Instrumental Variable strategy that leverages a randomized subsidy pilot to isolate the treatment effect.',
      'The progression is designed to illustrate why each step is necessary — and what each method recovers that the previous one could not.',
    ],
    tags: ['Research & Data'],
    color: 'haldi',
    githubLink: 'https://github.com/rheamendiratta/program-eval_sample',
  },
  {
    id: 'brighton-career-series',
    title: 'Brighton Career Series',
    description:
      'A career inspiration series for students — conversations designed not to map out a path, but to make young people hungry to find one.',
    body: [
      "\"If you want to build a ship, don't drum up the men to gather wood, divide the work, and give orders. Instead, teach them to yearn for the vast and endless sea.\" — Antoine de Saint-Exupéry",
      "The Brighton Career Series was built around that idea. Rather than presenting careers as a checklist of qualifications and job titles, the series brought students into conversation with people doing meaningful work — to spark curiosity, widen the frame of what feels possible, and give young people a reason to lean forward.",
    ],
    tags: ['Education', 'Social Impact'],
    color: 'gulabi',
    externalLink: 'https://www.youtube.com/watch?v=vECJg5qILX4',
    externalLinkLabel: 'Watch on YouTube ↗',
  },
  {
    id: 'math-masters',
    title: 'Math Masters',
    description:
      "A YouTube channel of math explainer videos — made by Rhea and her students — to address learning gaps and build confidence in foundational math skills for grades 6, 7, and 8.",
    body: [
      "As a Math teacher, I often noticed a lack of pre-requisite knowledge before starting a more complex topic in class. Moreover, a lot of students in my classroom joined blended learning later through the academic year because of COVID and felt out of touch with Math. They needed to review many basics and could use some confidence in their math ability.",
      "These videos are created by me, or one of my students (with consent from parents). We followed Khan Academy's progression for developing fundamental skills in grades 6, 7, 8, and the videos are labeled so. We use a mix of Hindi and English for instruction. There is a Khan Academy activity in each video's description box that will help students practice the skill they have learned. Students should be instructed to do an activity as many times as they'd like until they achieve a score they are satisfied with.",
    ],
    tags: ['Education'],
    color: 'saffron',
    externalLink: 'https://www.youtube.com/channel/UCK5XTvG39vDSF0dVLqASiwg/videos',
    externalLinkLabel: 'Watch on YouTube ↗',
  },
  {
    id: 'kalaburagi-example',
    title: 'The Kalaburagi Example',
    description:
      'A case study of district-level education reform in Karnataka — examining how Kalaburagi improved government school outcomes through targeted administrative and community interventions.',
    body: [
      "Kalaburagi, a historically underserved district in northern Karnataka, became a reference point for what focused district-level leadership can achieve in India's public school system. This case study documents the conditions, decisions, and ground-level actions that drove measurable improvement in enrollment, attendance, and learning outcomes.",
      'The analysis draws on field observations, government data, and stakeholder interviews to understand what made Kalaburagi different — and what it would take to replicate that model in other districts facing similar constraints.',
    ],
    tags: ['Education', 'Research & Data'],
    color: 'haldi',
    externalLink: 'https://colabglobal.org/kalaburagis-stint-with-enabling-enriching-learning-experiences-at-scale/',
    externalLinkLabel: 'Read on Colab ↗',
  },
  {
    id: 'mentoring-in-education',
    title: 'Mentoring in Education',
    description:
      'A framework for structured mentoring in school systems — exploring how sustained one-on-one relationships between educators and students drive academic and personal growth.',
    body: [
      "Mentoring is one of the most consistent predictors of student persistence and wellbeing, yet it remains informal and uneven in most school systems. This project develops a structured framework for embedding mentoring relationships into everyday school practice — moving it from an add-on to a core part of how teachers and students interact.",
      'The framework draws on research in developmental relationships, teacher professional development, and school culture change, and is designed to be practical enough for resource-constrained government and low-fee private schools in the Indian context.',
    ],
    tags: ['Education', 'Social Impact'],
    color: 'gulabi',
    externalLink: 'https://colabglobal.org/does-mentoring-in-the-education-sector-make-sense/',
    externalLinkLabel: 'Read on Colab ↗',
  },
  {
    id: 'project-vatsalya',
    title: 'Project Vatsalya',
    description:
      "A structured parent engagement program developed to deepen family investment in children's learning — named for the Sanskrit word for parental love.",
    body: [
      "Project Vatsalya is a set of facilitated modules designed to bring parents meaningfully into their children's education. Named for the Sanskrit word for parental love and affection, the program recognises that sustained learning outcomes depend as much on the home environment as on the classroom. The modules guide parents through understanding their role in their child's educational journey — building learning routines, communicating with teachers, and creating conditions at home that support curiosity and growth.",
    ],
    tags: ['Education', 'Social Impact'],
    color: 'saffron',
    pdfLink: '/Vatsalya_-_Parent_Investment_Modules.pdf',
  },
  {
    id: 'social-impact-strategy',
    title: 'Social Impact Strategy',
    description:
      'Synthesis of a Coursera/Penn course exploring how social enterprises balance mission and money — tools for innovation, impact, scale, and financial sustainability.',
    body: [
      'Notes and synthesis from the Social Impact Strategy course on Coursera, offered by the University of Pennsylvania (2022). The course explores the tools available to entrepreneurs and innovators building organizations that balance mission and profit.',
      'A social enterprise sits at the intersection of mission and money — it must balance innovation, measurable impact, and scale without losing sight of the people it serves. This synthesis captures the frameworks and tradeoffs that course covered.',
    ],
    tags: ['Social Impact'],
    color: 'gulabi',
    pdfLink: '/Social_Impact_Strategy.pdf',
  },
];
