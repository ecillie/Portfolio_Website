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
    title: 'Flight Delay Prediction',
  
    shortDescription:
      'Predicting U.S. flight delays and cancellations using historical flight and weather data.',
  
    overview:
      'A machine learning project that combines historical U.S. flight performance data with hourly weather observations to predict flight delays and cancellations.',
  
    problem:
      'Flight delays and cancellations create significant costs for airlines and disruption for passengers. More accurate prediction can help identify high-risk flights earlier and support better operational planning.',
  
    approach:
      'Built a data pipeline to collect, clean, and combine historical flight data with airport-level hourly weather data. The resulting dataset is used to engineer predictive features and train machine learning models for delay and cancellation risk.',
  
    results:
      'The initial model used flight data alone. Comparing its performance with prior research highlighted weather as an important missing predictor, leading to a second iteration that incorporates historical weather conditions.',
  
    status:
      'Building and optimizing the pipeline that joins historical flight records with hourly weather observations before training the next model iteration.',
  
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
  },

  {
    slug: 'low-cost-carrier-exit',
  
    number: '02',
  
    title: 'Low-Cost Carrier Exit',
  
    shortDescription:
      'Analyzing how low-cost carrier exits affect airfares and competition across U.S. domestic airline markets.',
  
    overview:
      'An expansion of my undergraduate economics thesis, which studied Frontier Airlines’ exit from Albany, into a broader analysis of low-cost carrier withdrawals across U.S. domestic markets.',
  
    problem:
      'Low-cost carriers place significant competitive pressure on airline fares, but much of the existing research focuses on what happens when they enter a market. This project examines the opposite question: what happens to fares and market competition when a low-cost carrier leaves?',
  
    approach:
      'Combining BTS T-100, DB1B, and On-Time Performance data to identify carrier-route exits, construct matched treatment and control markets, and build nine-quarter event windows consisting of four pre-event quarters, the exit quarter, and four post-event quarters. The analysis uses difference-in-differences and event-study methods to estimate changes in airfare following ULCC exits.',
  
    results:
      'The original thesis case study found that Frontier’s exit from Albany was associated with a 7.15% increase in average fares relative to Syracuse control routes. The expanded project is testing whether this effect generalizes across a much larger set of U.S. low-cost carrier exits.',
  
    status:
      'Building the expanded matched event-study dataset. The current pipeline identifies 76 eligible ULCC exit events with matched control markets, producing a balanced panel of 1,368 quarterly observations.',
  
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
  },

  {
    slug: 'fbo-manager',
  
    number: '03',
  
    title: 'FBO Manager',
  
    shortDescription:
      'A full-stack airport operations platform for managing aircraft, services, fuel, staff, and daily FBO activity.',
  
    overview:
      'A full-stack operations platform designed for Fixed Base Operators (FBOs) to manage day-to-day airport activity from a centralized system, including aircraft arrivals and departures, parking, service requests, fuel operations, and workforce assignments.',
  
    problem:
      'FBO operations require staff to coordinate aircraft movements, ramp space, fueling, service requests, equipment, and personnel in real time. Managing these workflows across disconnected systems or manual processes can make operations harder to track and coordinate.',
  
    approach:
      'Designed a centralized web application around core FBO workflows. The system uses a React and TypeScript frontend, a Java Spring Boot backend, and PostgreSQL for transactional operational data. The architecture emphasizes clear capability boundaries, auditability, transactional consistency, and retained operational history.',
  
    results:
      'Designed the application architecture, relational database model, and core operational workflows for aircraft visits, parking assignments, service requests, fuel inventory, workforce scheduling, and task dispatch.',
  
    status:
      'Actively building the MVP, with the system architecture, database design, frontend architecture, and core technology stack established. Backend, API, security, deployment, and operational workflows are being implemented toward a pilot-ready release.',
  
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
  
    accent: 'project-sky',
  },

  {
    slug: 'nhl-contract-value',
  
    number: '04',
  
    title: 'NHL Contract Value',
  
    shortDescription:
      'Predicting NHL player contract values using advanced statistics, historical contracts, and machine learning.',
  
    overview:
      'A full-stack hockey analytics application that evaluates NHL player contracts by combining player performance, advanced statistics, salary history, and machine learning estimates of expected contract value.',
  
    problem:
      'NHL contract value is influenced by far more than traditional goals and assists. Teams need to evaluate player performance, position, contract context, and advanced metrics when determining what a player should be worth against the salary cap.',
  
    approach:
      'Built automated data pipelines to collect NHL player statistics and contract information, store the data in PostgreSQL, and engineer training datasets for machine learning. Separate models are trained for forwards, defensemen, and goalies, with predictions exposed through a FastAPI backend and React frontend.',
  
    results:
      'Created position-specific machine learning models that estimate NHL player cap hits and allow actual contract values to be compared with model-estimated values. The application also supports season-by-season comparisons of actual versus expected cap hit.',
  
    status:
      'Core data collection, database, machine learning pipeline, prediction API, and player interface are implemented. Continuing to refine model performance, feature engineering, and contract-value analysis.',
  
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
    title: 'CSC Capstone Project',
    description: 'Looked at human group classifciation from a robots perspective to better navigate a social setting.',
    status: 'Finished as of 6/10/26',
    technologies: [],
  },
  {
    title: 'Robot Jump Roap',
    description: 'Programed a turtlebot using ROS2 to play jump roap with a laser and speed up or slow down to get human out.',
    status: 'Finished as of 6/07/26',
    technologies: [],
  },

  {
    title: 'NHL Contract Year',
    description: 'Led and conducted study to see if players outperform carrer performance in final year of contract.',
    status: 'Finished as of 6/08/25',
    technologies: [],
  },

  {
    title: 'Aviation Market Consolidation Study',
    description: 'Led and conducted study to look at market consolidation within the aviation industry.',
    status: 'Finished as of 3/10/26',
    technologies: [],
  },

];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
