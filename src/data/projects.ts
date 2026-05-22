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
      "An interactive, multi-source dashboard placing India's education data in global context — combining World Bank, UDISE+, OECD, NAS, ASER, and PGI in one place.",
    body: [
      "India runs the largest school system in the world, with over 250 million children enrolled, and yet the data needed to understand how that system is performing is scattered across sources that are incomplete, sometimes biased, and do not work together. The World Bank provides global comparisons, while UDISE+ covers administrative data from India's states and districts. OECD, NAS, and ASER track learning outcomes through different methods, while PGI measures school quality.",
      "This project builds an interactive dashboard organized around three geographic levels — World, India, and States. The World level places India in the global distribution across indicators such as enrollment, completion, learning poverty, teacher ratios, and education spending, and overlays India's own UDISE figures with World Bank estimates for the same indicators. The dual-source overlay surfaces discrepancies between domestic and international data, which are themselves informative.",
      'The goal is neutral, transparent coverage of education data that is currently presented only by the Indian government.',
    ],
    tags: ['Education', 'Research & Data'],
    color: 'saffron',
    externalLink: 'https://rheamendiratta.github.io/india-edu-site.github.io/world/',
  },
  {
    id: 'data-analysis-r',
    title: 'Data Analysis in R',
    description:
      'R evaluation of a Cook County recidivism-reduction program — cleaning administrative data, engineering indicators, testing baseline balance, and estimating treatment effects.',
    body: [
      "I was given simulated administrative data from the Cook County State's Attorney's Office to evaluate a one-year recidivism-reduction program in Chicago with randomized assignment to treatment and control.",
    ],
    bullets: [
      'Recoded race/ethnicity and summarized sample composition',
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
      "Host of ShikshaLokam's flagship video podcast — 20 candid conversations with senior bureaucrats, philanthropists, and educators shaping India's school system.",
    body: [
      "Up Close & Personal is ShikshaLokam's flagship video podcast, featuring in-depth conversations with the people shaping India's education landscape — senior government officials, philanthropists, education entrepreneurs, and classroom innovators.",
      "As host, I led 20 episodes of candid dialogue exploring how India's massive school system can be made more effective, equitable, and responsive to children's needs. Guests included Anita Karwal, former Secretary of the Department of School Education and Literacy, Ministry of Education, and Chetan Kapoor, CEO of Tech Mahindra Foundation.",
    ],
    tags: ['Education', 'Social Impact'],
    color: 'gulabi',
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
