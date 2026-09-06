export type ExperienceItem = {
  period: string;
  role: string;
  organization: string;
  location?: string;
  context: string;
  bullets: string[];
  technologies: string[];
  featured?: boolean;
  current?: boolean;
};

export const experience: ExperienceItem[] = [
  {
    period: 'June 2026 — Present',
    role: 'Software Engineer I',
    organization: 'LexisNexis Risk Solutions',
    location: 'Alpharetta, GA',
    context: 'Technology Accelerate Graduate Program, working across software delivery, internal AI tooling, and operational visibility.',
    bullets: [
      'Researching and implementing CI/CD pipeline automation to modernize and streamline software releases.',
      'Collaborating with engineers and business stakeholders on a LangGraph-based agent that explains functionality in legacy codebases.',
      'Developing Grafana dashboards that improve visibility into product performance and operational metrics.',
    ],
    technologies: ['CI/CD', 'LangGraph', 'Grafana'],
    featured: true,
    current: true,
  },
  {
    period: 'May 2025 — July 2025',
    role: 'Software Engineering Intern',
    organization: 'LexisNexis Risk Solutions',
    location: 'Alpharetta, GA',
    context: 'Production-minded engineering work spanning cloud performance, Java testing, and full-stack product delivery.',
    bullets: [
      'Optimized Azure Blob Storage usage through performance analysis and testing.',
      'Expanded JUnit coverage across multiple Java packages to improve code quality.',
      'Built full-stack functionality for automated export of results to Excel.',
    ],
    technologies: ['Java', 'JUnit', 'Azure Blob Storage', 'Excel'],
    featured: true,
  },
  {
    period: 'June 2023 — August 2025',
    role: 'Line Service Technician, Seasonal',
    organization: 'Nantucket Memorial Airport',
    location: 'Nantucket, MA',
    context: 'Hands-on general aviation operations in a safety-critical, fast-moving ramp environment.',
    bullets: [
      'Expedited fuel orders for quick-turn general aviation aircraft.',
      'Performed aircraft fueling, GPU connections and disconnections, and lavatory service.',
      'Coordinated passenger, vehicle, tower, and airport-staff movement under FAA and TSA safety requirements.',
    ],
    technologies: [],
    featured: true,
  },
  {
    period: '2023 — 2026',
    role: 'B.S. Computer Science + B.A. Economics',
    organization: 'Union College',
    location: 'Schenectady, NY',
    context: 'Graduated cum laude with departmental honors in both Computer Science and Economics.',
    bullets: [
      'Completed research at the intersection of data, competition, and U.S. aviation markets.',
      'Built software, machine-learning, econometrics, and robotics projects across both disciplines.',
    ],
    technologies: ['Computer Science', 'Economics', 'Econometrics'],
  },
  {
    period: 'College',
    role: 'Student Manager / Equipment Student Assistant',
    organization: 'Union College Division I Men’s Ice Hockey',
    context: 'Supported a high-performance team environment where preparation, operational detail, and consistency mattered every day.',
    bullets: [],
    technologies: [],
  },
];
