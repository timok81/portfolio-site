const projectData = [
  {
    title: "Movie Database",
    synopsis: "MERN stack movie browsing app",
    description:
      "My first full stack app. The primary goal was to learn how to work with React and Bootstrap and to create an app that allows users to create an account, login and browse information about movies, actors and directors.\n Information is fetched from a backend that was built as part of this project. \n\n Made with:\n React, React Bootstrap, React Redux, Node/Express, MongoDB, Mongoose, Passport, Express Validator, Postman. \n",
    siteURL: "https://muhviedb.netlify.app/",
    githubURL: "https://github.com/timok81/cf-movies-client",
    caseStudy: "./assets/case-studies/MovieDB-CaseStudy.pdf",
    screenshots: [
      "./assets/img/projects/project3/project3_screenshot1_.png",
      "./assets/img/projects/project3/project3_screenshot2.png",
      "./assets/img/projects/project3/project3_screenshot3.png",
      "./assets/img/projects/project3/project3_screenshot4.png",
      "./assets/img/projects/project3/project3_screenshot5.png",
      "./assets/img/projects/project3/project3_screenshot6.png",
    ],
    tech: "React, React Bootstrap, Redux, Node/Express, MongoDb, Mongoose",
  },
  {
    title: "Movie database API",
    synopsis: "Movie database API",
    description:
      "Back-end for the movie database project. Handles all requests from the React front-end to the MongoDb database, as well as user login and registration. Authorization is done with JSON Web Tokens and password validation with Express Validator. \n\n Made with:\n Node/Express, MongoDB, Mongoose, Passport, Express Validator, Postman, Swagger. \n",
    siteURL: "https://moviemovie-7703363b92cb.herokuapp.com/api-docs/",
    githubURL: "https://github.com/timok81/cf-movie-api",
    caseStudy: "",
    screenshots: [
      "./assets/img/projects/project2/project2_screenshot1_.png",
      "./assets/img/projects/project2/project2_screenshot1.png",
    ],
    tech: "Node/Express, MongoDb, Mongoose, Swagger, Postman",
  },
  {
    title: "Meet App",
    synopsis: "PWA for viewing events",
    description:
      "A progressive web app for searching and viewing events at different locations with the ability to add them to your calendar.\n Uses serverless functions for authorization and fetching events from Google Calendar API. Built with test-driven development practices using React Testing Library, Jest-Cucumber and Puppeteer. Also features charts for viewing information about the events with the help of Recharts.\n\n Made with:\n React, Vite, AWS Lambda, OAuth2, Recharts, React testing library, Jest-Cucumber, Puppeteer. \n",
    siteURL: "https://cf-meet.vercel.app/",
    githubURL: "https://github.com/timok81/cf-meet",
    caseStudy: "",
    screenshots: [
      "./assets/img/projects/project4/project4_screenshot1_.png",
      "./assets/img/projects/project4/project4_screenshot1.png",
      "./assets/img/projects/project4/project4_screenshot2.png",
      "./assets/img/projects/project4/project4_screenshot3.png",
    ],
    tech: "React, AWS Lambda, OAuth2, React Testing Library, Jest-Cucumber, Puppeteer",
  },
  {
    title: "React Native Chat",
    synopsis: "React Native chat app",
    description:
      "A simple React Native chat app featuring basic text messaging, image attachments, sending location data via Google Maps and voice messages. Uses Google Firebase for database. The chat functionality is provided by Gifted Chat.\n\n Made with:\n React Native, Expo, Gifted Chat, Google Firebase. \n",
    siteURL: "https://github.com/timok81/cf-chat",
    githubURL: "https://github.com/timok81/cf-chat",
    caseStudy: "",
    screenshots: [
      "./assets/img/projects/project5/project5_screenshot1_.png",
      "./assets/img/projects/project5/project5_screenshot1.png",
      "./assets/img/projects/project5/project5_screenshot2.png",
      "./assets/img/projects/project5/project5_screenshot3.png",
    ],
    tech: "React Native, Expo, Gifted Chat",
  },
  {
    title: "Pokedex",
    synopsis: "Pokemon browsing app",
    description:
      "A simple pokedex app that let's you browse Pokemons and view their data.\n This project was an introduction to working with Javascript and fetching and displaying API data, as well as using Bootstrap for styling. The pokemon data comes from www.pokeapi.co.\n\n Made with:\n HTML, CSS, JavaScript, Bootstrap. \n",
    siteURL: "https://timok81.github.io/cf-pokedex/",
    githubURL: "https://github.com/timok81/cf-pokedex",
    caseStudy: "",
    screenshots: [
      "./assets/img/projects/project1/project1_screenshot1_.png",
      "./assets/img/projects/project1/project1_screenshot1.png",
      "./assets/img/projects/project1/project1_screenshot2.png",
      "./assets/img/projects/project1/project1_screenshot3.png",
    ],
    tech: "HTML, CSS, JavaScript, Bootstrap",
  },
  {
    title: "My portfolio site",
    synopsis: "My portfolio site",
    description:
      "The site you're currently on.\n My aim was to create a simple portfolio site that doesn't use any third-party tools. Everything happens on one page and JavaScript is used to display the project information in modals.\n\n Made with: HTML, CSS, JavaScript.",
    siteURL: "https://timokujansuu.com",
    githubURL: "https://github.com/timok81/portfolio-site",
    caseStudy: "",
    screenshots: ["./assets/img/projects/project7/project7_screenshot1.png"],
    tech: "HTML, CSS, JavaScript",
  },
];

const workContainer = document.querySelector(".work-samples-visible");
const modal = document.querySelector(".project-modal-hidden");
const modalBg = document.querySelector(".project-modal-bg-hidden");
const modalContent = document.querySelector(".modal-content-hidden");
const closeModalButton = document.querySelector(".close-modal");
const modalHeading = document.querySelector(".modal-heading");
const modalDescription = document.querySelector(".modal-description");
const modalScreenshots = document.querySelector(".modal-screenshots");
const modalLinks = document.querySelectorAll(".modal-links a");
const modalSiteLink = modalLinks[0];
const modalGithubLink = modalLinks[1];
const modalCaseStudyLink = modalLinks[2];
const modalCaseStudyContainer = document.querySelector(".case-study-link");
const imageModal = document.querySelector(".image-modal");
const imageFullsize = document.querySelector(".project-image");
const themeToggleButton = document.querySelector(".theme-toggle");
let lastFocusedElement;

const rootElement = document.documentElement;
const savedTheme = localStorage.getItem("theme");

// auto switch theme based on user preference
if (savedTheme) {
  applyTheme(savedTheme);
} else {
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  applyTheme(systemPrefersDark ? "dark" : "light");
}

// button switches color theme
themeToggleButton.addEventListener("click", () => {
  const isDarkMode = rootElement.classList.toggle("dark-theme");
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
});

// close image modal if close button clicked
const closeImage = document.querySelector(".close-image");
closeImage.addEventListener("click", () => {
  imageModal.close();
});

// close image modal if clicked outside
window.addEventListener("click", (e) => {
  if (!imageModal.open) return;
  if (e.target === imageModal) {
    imageModal.close();
  }
});

// close project modal if clicked outside
window.addEventListener("click", (e) => {
  if (e.target === modalBg) {
    closeModal();
  }
});

//close modals with key press
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (imageModal.open) {
      imageModal.close();
    } else if (modal.classList.contains("project-modal-visible")) {
      closeModal();
    }
  }
});

// Create project cards
projectData.forEach((project) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  cardHeader.innerText = project.title;
  card.appendChild(cardHeader);

  const cardImage = document.createElement("div");
  cardImage.classList.add("card-image");
  cardImage.style.backgroundImage = `url(${project.screenshots[0]})`;
  const cardBgOverlay = document.createElement("div");
  cardBgOverlay.classList.add("card-bg-overlay");
  const overlayTitle = document.createElement("div");
  overlayTitle.classList.add("card-overlay-title");
  overlayTitle.innerText += project.synopsis;
  const overlayTech = document.createElement("div");
  overlayTech.classList.add("card-overlay-tech");
  overlayTech.innerText += project.tech;
  cardBgOverlay.appendChild(overlayTitle);
  cardBgOverlay.appendChild(overlayTech);
  cardImage.appendChild(cardBgOverlay);
  card.appendChild(cardImage);

  card.addEventListener("click", () => {
    openModal(project);
  });

  closeModalButton.addEventListener("click", () => {
    closeModal();
  });

  workContainer.appendChild(card);
});

const openModal = (project) => {
  lastFocusedElement = document.activeElement;
  modal.classList.add("project-modal-visible");
  modal.classList.remove("project-modal-hidden");
  modalBg.classList.remove("project-modal-bg-hidden");
  modalBg.classList.add("project-modal-bg-visible");
  modalContent.classList.add("modal-content-visible");
  modalContent.classList.remove("modal-content-hidden");
  workContainer.classList.add("work-samples-hidden");

  modalHeading.innerHTML = "<h1>" + project.title + "</h1>";
  modalDescription.innerText = project.description;
  modalSiteLink.href = project.siteURL;
  modalGithubLink.href = project.githubURL;
  if (project.caseStudy !== "") {
    modalCaseStudyLink.href = project.caseStudy;
    getFileSize(project.caseStudy, ".case-study-text");
  } else {
    modalCaseStudyContainer.classList.add("case-study-link-hidden");
  }

  // create project thumbnails
  for (let i = 1; i < project.screenshots.length; i++) {
    const thumbnail = document.createElement("img");
    thumbnail.classList.add("thumbnail");
    thumbnail.src = project.screenshots[i];
    modalScreenshots.appendChild(thumbnail);
    thumbnail.addEventListener("click", () => {
      imageFullsize.src = project.screenshots[i];
      imageModal.showModal();
    });
  }
  modalContent.setAttribute("tabindex", "-1");
  modalContent.focus();
};

const closeModal = () => {
  modal.classList.remove("project-modal-visible");
  modal.classList.add("project-modal-hidden");
  modalBg.classList.remove("project-modal-bg-visible");
  modalBg.classList.add("project-modal-bg-hidden");
  modalContent.classList.remove("modal-content-visible");
  modalContent.classList.add("modal-content-hidden");
  modalCaseStudyLink.href = "";
  modalCaseStudyContainer.classList.remove("case-study-link-hidden");
  document.querySelector(".case-study-text").textContent = "";

  workContainer.classList.remove("work-samples-hidden");
  const thumbnails = document.querySelectorAll(".thumbnail");
  thumbnails.forEach((element) => {
    element.remove();
  });
  if (lastFocusedElement) lastFocusedElement.focus();
};

function applyTheme(theme) {
  if (theme === "dark") {
    rootElement.classList.add("dark-theme");
  } else {
    rootElement.classList.remove("dark-theme");
  }
}

// This will only work when deployed or with live server
async function getFileSize(url, element) {
  try {
    const response = await fetch(url, { method: "HEAD" });
    const size = response.headers.get("Content-Length");

    if (size) {
      const sizeMB = (size / (1024 * 1024)).toFixed(2); // Convert bytes to MB
      document.querySelector(
        element
      ).textContent = `View case study (PDF, ${sizeMB} MB)`;
    }
  } catch (error) {
    console.error("Error fetching file size:", error);
  }
}
