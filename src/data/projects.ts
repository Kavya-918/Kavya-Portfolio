export type Project = {
  title: string;
  summary: string;
  tags: string[];
  repo?: string;
  demo?: string;
  image?: string; // URL or /public path
};

export const projects: Project[] = [
  {
    title: "BugTracker System",
    summary:
      "Full‑stack bug tracking system with JWT authentication and role‑based access (Admin, PM, Dev, QA, Reporter). It manages project and issue lifecycles with assignment, status updates, filtered dashboards, comments, attachments, audit logs, and email notifications (SMTP), built with Spring Boot + JPA and a responsive React frontend.",
    tags: ["Spring Boot", "RestAPI", "JPA", "SMTP", "React"],
    repo: "https://github.com/Kavya-918/BugTracker_System",
    image: "/Bugtrackerimage.jpg"
  },
  {
    title: "Shopmate",
    summary:
      "Developed Shopmate, an e-commerce platform enabling users to browse products, add items to the cart, place orders, view order history, and cancel orders. The site features seamless navigation and a user-friendly interface for an enhanced shopping experience.",
    tags: ["Java", "JDBC", "JSP", "MySQL", "Tomcat"],
    repo: "https://github.com/Kavya-918/Shopmate",
    image: "/shopmate.jfif"
  },
  {
    title: "Quiz Application",
    summary:
      "Developed a Quiz Application using Java. The application includes features such as displaying rules, presenting questions, providing lifelines, and displaying results. Users enter and read the instructions and start the quiz; a lifeline can be used only once, and each question has a 15-second timer. Finally, the app displays the score and allows users to retake the quiz.",
    tags: ["Java"],
    repo: "https://github.com/Kavya-918/Java-QuizApplication",
    image: "/QuizApplication.png"
  },
  {
    title: "Random Color Generator",
    summary:
      "I've developed a dynamic random color generator web app using HTML, CSS, and JavaScript. Users can effortlessly generate an array of vibrant colors with just a click. The intuitive interface ensures a seamless experience, making it perfect for designers and developers. The application enables users to generate random colors with ease.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/Randomcolor.png",
    repo: "https://github.com/Kavya-918/Random-Color-Generator"
  }
];


