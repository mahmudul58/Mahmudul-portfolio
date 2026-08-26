/**
 * Skill icon URLs from Devicon CDN (https://devicon.dev).
 * Maps each skill name to its colored SVG icon.
 */
const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const SKILL_ICONS = {
  Python: `${DEVICON}/python/python-original.svg`,
  Java: `${DEVICON}/java/java-original.svg`,
  JavaScript: `${DEVICON}/javascript/javascript-original.svg`,
  "C++": `${DEVICON}/cplusplus/cplusplus-original.svg`,
  Django: `${DEVICON}/django/django-plain.svg`,
  "Django REST Framework": `${DEVICON}/djangorest/djangorest-original.svg`,
  React: `${DEVICON}/react/react-original.svg`,
  "Tailwind CSS": `${DEVICON}/tailwindcss/tailwindcss-original.svg`,
  PostgreSQL: `${DEVICON}/postgresql/postgresql-original.svg`,
  MySQL: `${DEVICON}/mysql/mysql-original.svg`,
  SQLite: `${DEVICON}/sqlite/sqlite-original.svg`,
  Weka: null,
  Git: `${DEVICON}/git/git-original.svg`,
  GitHub: `${DEVICON}/github/github-original.svg`,
  Postman: `${DEVICON}/postman/postman-original.svg`,
  "VS Code": `${DEVICON}/vscode/vscode-original.svg`,
};

export const skillIcons = SKILL_ICONS;

export const skills = [
  { group: "Languages", items: ["Python", "Java", "JavaScript", "C++"] },
  { group: "Frameworks", items: ["Django", "Django REST Framework", "React", "Tailwind CSS"] },
  { group: "Databases", items: ["PostgreSQL", "MySQL", "SQLite"] },
  { group: "ML & Tools", items: ["Weka", "Git", "GitHub", "Postman", "VS Code"] },
];
