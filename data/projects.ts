/**
 * EDIT THIS FILE to update project cards and detail pages.
 * Add links and replace each TODO as the projects become presentation-ready.
 */
export type Project = {
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  overview: string;
  problem: string;
  approach: string;
  results: string;
  status: string;
  technologies: string[];
  accent: 'project-sky' | 'project-lime';
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: 'flight-delay',
    number: '01',
    title: 'Flight Delay',
    shortDescription: 'Flight delay project — add the final one-sentence summary here.',
    overview: 'TODO: Explain what the flight delay project does and who it is for.',
    problem: 'TODO: Describe the flight delay problem or question you set out to solve.',
    approach: 'TODO: Summarize the data, model, architecture, and key technical decisions.',
    results: 'TODO: Add outcomes, metrics, screenshots, or what you learned.',
    status: 'TODO: Add the current status, latest milestone, and what comes next.',
    technologies: [],
    accent: 'project-sky',
  },
  {
    slug: 'pricing',
    number: '02',
    title: 'Pricing',
    shortDescription: 'Pricing project — add the final one-sentence summary here.',
    overview: 'TODO: Explain the pricing project and the context behind it.',
    problem: 'TODO: Describe the pricing question or business problem.',
    approach: 'TODO: Summarize the analysis, data sources, and methods.',
    results: 'TODO: Add findings, metrics, charts, or what you learned.',
    status: 'TODO: Add the current status, latest milestone, and what comes next.',
    technologies: [],
    accent: 'project-lime',
  },
  {
    slug: 'fbo',
    number: '03',
    title: 'FBO',
    shortDescription: 'FBO project — add the final one-sentence summary here.',
    overview: 'TODO: Explain the FBO project and the experience it creates.',
    problem: 'TODO: Describe the operational or customer problem being solved.',
    approach: 'TODO: Summarize the product, system design, and implementation.',
    results: 'TODO: Add outcomes, screenshots, a demo link, or next steps.',
    status: 'TODO: Add the current status, latest milestone, and what comes next.',
    technologies: [],
    accent: 'project-sky',
  },
  {
    slug: 'nhl-stats',
    number: '04',
    title: 'NHL Statistics',
    shortDescription: 'NHL statistics project — add the final one-sentence summary here.',
    overview: 'TODO: Explain what the NHL statistics project helps users explore.',
    problem: 'TODO: Describe the sports analytics question or user need.',
    approach: 'TODO: Summarize the data pipeline, analysis, and interface.',
    results: 'TODO: Add insights, screenshots, metrics, or what you learned.',
    status: 'TODO: Add the current status, latest milestone, and what comes next.',
    technologies: [],
    accent: 'project-lime',
  },
];

export type OtherProject = {
  title: string;
  description: string;
  status: string;
  technologies: string[];
  link?: string;
};

/**
 * These appear as compact cards on /projects and do not get detail pages.
 * Duplicate an object to add as many smaller projects as you want.
 */
export const otherProjects: OtherProject[] = [
  {
    title: 'Other project title',
    description: 'Add a short explanation of what you built or contributed to.',
    status: 'Add current status',
    technologies: [],
  },
  {
    title: 'Another project title',
    description: 'Use these cards for work that does not need a full case study.',
    status: 'Add current status',
    technologies: [],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
