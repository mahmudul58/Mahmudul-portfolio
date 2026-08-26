/**
 * `gif` should point to a short looping demo clip of the project in
 * action (screen recording exported as .gif, ~2-4s, under ~3MB works
 * best for load speed). Drop your files in /public/gifs and reference
 * them as "/gifs/your-file.gif". A static `image` is used as a
 * fallback / poster frame while the gif loads.
 */
export const projects = [
  {
    id: "chest-xray",
    name: "Chest X-Ray Screening Assistant",
    role: "Solo",
    stack: ["Java", "Weka", "React", "Tailwind CSS"],
    description:
      "ML system classifying chest X-ray images into COVID-19, Pneumonia, and Normal categories using a Java backend and a Weka Random Forest model on handcrafted image features. A React + Tailwind frontend handles image upload and prediction.",
    metric: "90.65% accuracy · 10-fold cross-validation",
    // gif: "/gifs/chest-xray-demo.gif",
    image: "/gifs/project_7.png",
    live: "https://chest-x-ray-screening-assistant-g1c.vercel.app/",
    code: "https://github.com/mahmudul58/Chest-X-Ray-Screening-Assistant",
  },
  {
    id: "weather-app",
    name: "Weather App",
    role: "Solo",
    stack: ["React"],
    description:
      "Weather forecast application built with React, practicing third-party API integration and async data handling.",
    metric: "REST API integration · Async patterns",
    // gif: "/gifs/weather-app-demo.gif",
    image: "/gifs/project_6.png",
    live: "https://weather-app-three-liard.vercel.app",
    code: "https://github.com/mahmudul58/Weather-Web-App",
  },
  {
    id: "modernscribe",
    name: "ModernScribe",
    role: "Solo",
    stack: ["Django", "PostgreSQL", "Tailwind CSS"],
    description:
      "Full-featured blogging platform where users publish articles, browse content, and engage through likes and comments, with secure authentication and a PostgreSQL-backed data layer.",
    metric: "Full CRUD · Auth system · PostgreSQL",
    // gif: "/gifs/modernscribe-demo.gif",
    image: "/gifs/project_5.png",
    live: "https://blog-post-webapp.onrender.com/",
    code: "https://github.com/mahmudul58/Blog-Post-WebApp",
  },
  // {
  //   id: "taskflow",
  //   name: "TaskFlow",
  //   role: "Solo",
  //   stack: ["Django", "SQLite", "Tailwind CSS"],
  //   description:
  //     "Task management web app enabling users to create secure accounts, set task priorities, and track progress through an intuitive dashboard.",
  //   metric: "Priority system · User auth · Dashboard",
  //   gif: "/gifs/taskflow-demo.gif",
  //   image: "/gifs/taskflow-poster.jpg",
  //   live: "https://mahmudul08.pythonanywhere.com/",
  //   code: null,
  // },
  {
    id: "shopping-cart",
    name: "React Shopping Cart",
    role: "Solo",
    stack: ["React"],
    description:
      "Shopping cart interface built to practice React state management, prop flow, and component architecture.",
    metric: "State management · Component patterns",
    // gif: "/gifs/shopping-cart-demo.gif",
    image: "/gifs/project_4.png",
    live: "https://tech-next-nine.vercel.app",
    code: "https://github.com/mahmudul58/React-Shopping-Cart",
  },

];
