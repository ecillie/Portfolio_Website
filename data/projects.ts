export type ProjectTakeaway = {
  label: string;
  value: string;
  detail: string;
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  focus: string[];
  problemSummary: string;
  buildSummary: string;
  takeaway: ProjectTakeaway;
  overview: string;
  problem: string;
  approach: string;
  implementation: string[];
  results: string;
  status: string;
  technologies: string[];
  technologyLabel?: string;
  accent: 'project-sky' | 'project-lime';
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: 'flight-delay',
    number: '01',
    title: 'Flight Delay Prediction',
    shortDescription:
      'A machine-learning project for identifying U.S. flight delay and cancellation risk from flight and weather data.',
    focus: ['Machine learning', 'Aviation data'],
    problemSummary:
      'Airlines and passengers need earlier signals for flights at greater risk of disruption.',
    buildSummary:
      'A Python and SQLite pipeline that collects BTS flight records and airport-level Open-Meteo observations for the next model iteration.',
    takeaway: {
      label: 'Model takeaway',
      value: 'Weather became the key second-iteration input',
      detail:
        'The flight-only baseline and prior research identified weather as an important missing predictor.',
    },
    overview:
      'This project connects an earlier supervised-learning study of U.S. flight delays and cancellations with a new data pipeline built to incorporate airport-level hourly weather.',
    problem:
      'Flight disruptions create significant operational costs for airlines and uncertainty for passengers. The useful question is not only whether a flight was delayed, but whether available pre-departure information can identify higher-risk flights early enough to support planning.',
    approach:
      'The first iteration engineered flight features such as scheduled hour and airline and evaluated models with precision, recall, F1-score, and RMSE. The current iteration expands the inputs by collecting BTS records and Open-Meteo observations in SQLite so weather can be joined at the airport and hour level before retraining.',
    implementation: [
      'Collect and normalize historical BTS flight-performance records.',
      'Ingest hourly airport weather observations from Open-Meteo.',
      'Persist repeatable datasets in SQLite for joining and feature engineering.',
      'Compare disruption models with metrics suited to imbalanced outcomes.',
    ],
    results:
      'Earlier tree-based models improved recall while reducing precision. That tradeoff—and comparison with prior research—made the missing weather signal clear and shaped the second pipeline iteration.',
    status:
      'Flight and weather collection are in progress; the joined dataset and weather-aware model are the next milestones.',
    technologies: [
      'Python',
      'pandas',
      'scikit-learn',
      'SQLite',
      'SQL',
      'Open-Meteo API',
      'BTS Data',
      'GitHub Actions',
    ],
    accent: 'project-sky',
    github: 'https://github.com/ecillie/FlightDelayModel',
  },
  {
    slug: 'low-cost-carrier-exit',
    number: '02',
    title: 'Low-Cost Carrier Exit',
    shortDescription:
      'Economics research on how low-cost carrier withdrawals change airfares and competition in U.S. domestic markets.',
    focus: ['Economics research', 'Aviation markets'],
    problemSummary:
      'Most airline-market research studies low-cost carrier entry; this project asks what happens when one leaves.',
    buildSummary:
      'A matched event-study pipeline combining T-100, DB1B, and On-Time data into nine-quarter treatment and control windows.',
    takeaway: {
      label: 'Original thesis finding',
      value: '7.15% associated fare increase',
      detail:
        'Average fares rose relative to matched Syracuse control routes after Frontier exited Albany.',
    },
    overview:
      'This work expands an undergraduate economics thesis about Frontier Airlines’ Albany exit into a broader research pipeline for low-cost carrier withdrawals across U.S. domestic routes.',
    problem:
      'Low-cost carriers can place significant pressure on airline fares, but much of the literature focuses on entry. Studying exits tests whether removing that pressure changes prices and market behavior—and whether a single-market finding generalizes.',
    approach:
      'The pipeline combines BTS T-100, DB1B, and On-Time Performance data, identifies route exits, matches treatment and control markets, and constructs nine-quarter windows with four pre-event quarters, the exit quarter, and four post-event quarters. Difference-in-differences, event-study, parallel-trends, and robustness workflows support the analysis.',
    implementation: [
      'Build route-quarter panels from multiple large BTS datasets.',
      'Detect eligible carrier-route exits and construct matched control markets.',
      'Preserve marketing-versus-operating-carrier attribution through explicit crosswalks.',
      'Run difference-in-differences, event-study, spillover, and robustness analyses.',
    ],
    results:
      'The original Albany case study found that Frontier’s exit was associated with a 7.15% increase in average fares relative to matched Syracuse routes. The expanded study is testing whether that pattern holds across a broader set of low-cost carrier exits.',
    status:
      'The expanded research dataset and matched event-study workflow are under active development and validation.',
    technologies: [
      'Python',
      'pandas',
      'NumPy',
      'statsmodels',
      'SQL',
      'BTS T-100',
      'DB1B',
      'On-Time Performance Data',
      'Matplotlib',
    ],
    accent: 'project-lime',
    github: 'https://github.com/ecillie/Econ-Research',
  },
  {
    slug: 'fbo-manager',
    number: '03',
    title: 'FBO Manager',
    shortDescription:
      'An in-development airport operations platform for coordinating aircraft, services, fuel, staff, and daily FBO activity.',
    focus: ['Full-stack architecture', 'Airport operations'],
    problemSummary:
      'Ramp teams coordinate aircraft, fuel, parking, services, and staff across fast-moving, often fragmented workflows.',
    buildSummary:
      'A documented full-stack MVP architecture, relational model, and workflow design for a centralized FBO operating system.',
    takeaway: {
      label: 'Current deliverable',
      value: 'An end-to-end MVP blueprint',
      detail:
        'Database, API, security, deployment, testing, reliability, and recovery decisions are documented before implementation.',
    },
    overview:
      'FBO Manager is a planned full-stack system for Fixed Base Operators to coordinate aircraft visits, parking, service requests, fuel operations, and workforce assignments from one operating view.',
    problem:
      'FBO staff must coordinate aircraft movement, ramp space, fueling, services, equipment, customers, and personnel in real time. Disconnected tools and manual handoffs make activity harder to track, assign, audit, and recover when plans change.',
    approach:
      'The planned architecture uses a React and TypeScript frontend, a modular Java Spring Boot backend, and PostgreSQL for operational data. The design emphasizes bounded capabilities, transactional consistency, auditability, retained history, secure role-based workflows, and a staged path from local development to deployment.',
    implementation: [
      'Map MVP actors, airport workflows, quality attributes, and operational data flows.',
      'Design the PostgreSQL relational model and schema baseline.',
      'Define frontend, backend, API, security, deployment, and observability boundaries.',
      'Trace architecture decisions into a testable solo-developer delivery plan.',
    ],
    results:
      'The repository now contains the architecture and database foundation for aircraft visits, parking, services, fuel inventory, workforce scheduling, and dispatch. Those plans make implementation decisions explicit and auditable before production code is added.',
    status:
      'Architecture and the database baseline are complete; application and infrastructure implementation are the next phase.',
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Modulith',
      'React',
      'TypeScript',
      'PostgreSQL',
      'Spring Data JPA',
      'Flyway',
      'Vite',
      'Material UI',
      'Docker',
      'GitHub Actions',
    ],
    technologyLabel: 'Planned stack',
    accent: 'project-sky',
    github: 'https://github.com/ecillie/FBO_Manager',
  },
  {
    slug: 'nhl-contract-value',
    number: '04',
    title: 'NHL Contract Value',
    shortDescription:
      'A full-stack hockey analytics application that compares NHL contracts with machine-learning estimates of player value.',
    focus: ['Full-stack ML', 'Hockey analytics'],
    problemSummary:
      'Goals and assists alone do not explain contract value across positions, seasons, and salary-cap contexts.',
    buildSummary:
      'A React and FastAPI application with PostgreSQL data pipelines and separate contract models for forwards, defensemen, and goalies.',
    takeaway: {
      label: 'Core capability',
      value: 'Position-specific contract estimates',
      detail:
        'The interface compares actual and model-estimated cap hits season by season.',
    },
    overview:
      'NHL Contract Value is a full-stack analytics product that combines player performance, advanced statistics, contract history, and machine learning to estimate expected cap hits.',
    problem:
      'Contract value depends on position, performance, contract timing, advanced metrics, and salary-cap context. A useful comparison needs consistent historical data and models that account for the very different profiles of forwards, defensemen, and goalies.',
    approach:
      'Automated collection scripts load player, contract, salary, and statistics data into PostgreSQL. Position-specific scikit-learn pipelines create model artifacts, FastAPI exposes analysis and prediction routes, and the React interface lets users explore players and compare actual versus expected cap hit by season.',
    implementation: [
      'Ingest public NHL performance, advanced-statistics, contract, and salary data.',
      'Model player, contract, season, and position data in PostgreSQL with SQLAlchemy.',
      'Train and serve separate forward, defenseman, and goalie estimators.',
      'Connect the prediction API to a searchable React interface and containerized local stack.',
    ],
    results:
      'The application produces position-specific cap-hit estimates and exposes season-by-season actual-versus-expected contract comparisons through the API and user interface.',
    status:
      'Core data collection, database, model training, prediction API, tests, Docker setup, and player interface are implemented; model refinement continues.',
    technologies: [
      'Python',
      'FastAPI',
      'scikit-learn',
      'pandas',
      'PostgreSQL',
      'SQLAlchemy',
      'React',
      'Vite',
      'Docker',
      'NHL API',
    ],
    accent: 'project-lime',
    github: 'https://github.com/ecillie/TradeValue',
  },
];

export type OtherProject = {
  title: string;
  description: string;
  status: string;
  technologies: string[];
  link?: string;
};

export const otherProjects: OtherProject[] = [
  {
    title: 'Cheap Flight Finder',
    description:
      'A configurable flight-deal tracker that searches multiple routes, ranks results, emails grouped reports, and tracks fare history on an automated schedule.',
    status: 'Active project',
    technologies: ['Python', 'SerpApi', 'GitHub Actions'],
    link: 'https://github.com/ecillie/CheapFlightFinder',
  },
  {
    title: 'Human Group Classification Capstone',
    description:
      'Explored human-group classification from a robot’s perspective to support better navigation through social settings.',
    status: 'Completed June 2026',
    technologies: [],
  },
  {
    title: 'Robot Jump Rope',
    description:
      'Programmed a TurtleBot with ROS 2 to play jump rope using a laser, adjusting its speed to challenge a human participant.',
    status: 'Completed June 2026',
    technologies: ['ROS 2', 'TurtleBot'],
  },
  {
    title: 'NHL Contract-Year Performance',
    description:
      'Led a three-person study of whether NHL players outperform their career baselines in contract years, consolidating more than 70 datasets for the analysis.',
    status: 'Completed June 2025',
    technologies: ['Python', 'pandas', 'Econometrics'],
    link: 'https://github.com/ecillie/nhl_contract_year',
  },
  {
    title: 'U.S. Airline Industry Analysis',
    description:
      'Analyzed national, airport, and route-level consolidation with HHI and CR4, then evaluated mergers through antitrust and competition frameworks.',
    status: 'Completed March 2026',
    technologies: ['HHI', 'CR4', 'Economics research'],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
