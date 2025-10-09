export type Experience = {
  company: string;
  role: string;
  start: string; // YYYY-MM
  end?: string; // YYYY-MM or undefined for Present
  location?: string;
  bullets?: string[];
  stack?: string[];
  project?: string;
  projects?: {
    name: string;
    bullets: string[];
    stack: string[];
  }[];
};

export const experience: Experience[] = [
  {
    company: "Velox Solutions",
    role: "Junior Software Developer",
    start: "2025-01",
    end: "Present",
    projects: [
      {
        name: "SecureIT EDR (Endpoint Detection & Response)",
        bullets: [
          "Developed dashboards for malware detection, dynamic vulnerability management, and endpoint software scanning.",
          "Implemented Dynamic Vulnerability Management integrating real-time CVE data from NVD APIs.",
          "Parsed CVSS vectors to classify vulnerabilities by CIA triad; added filters by severity, impact, and patch availability.",
          "Participated in installation at ISRO; resolved deployment bugs and issues."
        ],
        stack: ["Java", "Spring Boot", "React", "TypeScript", "MySQL", "REST", "Docker"]
      },
      {
        name: "HRM (Human Resource Management) Platform",
        bullets: [
          "Designed end-to-end HRMS recruitment workflow: openings, submissions, screening, interviews, offers, onboarding, post-joining.",
          "Built Spring Boot REST APIs with JPA for employee management, agency onboarding, exam scheduling, and candidate tracking.",
          "Automated Channel Partner onboarding and compliance (GST/PAN validation, document verification) with audit trails.",
          "Implemented candidate pre-screening engine: real-time validation, aptitude ≥95%, duplicate detection, scrutiny forms.",
          "Enhanced UX with real-time email notifications, reminders, and escalations for pending actions.",
          "Streamlined offer generation and onboarding with templated letters and acceptance tracking.",
          "Collaborated with frontend for seamless API integration; improved system efficiency by ~20% and reduced integration delays."
        ],
        stack: ["Spring Boot", "REST APIs", "JPA/Hibernate", "Java", "MySQL"]
      }
    ]
  }
];


