const URL = `../../public/projects.json`;
const QUERY_URL = window.location.origin;

/*=======
Handle loading
=========*/
let projectRow = document.querySelector("#project-row");
function showLoading() {
  projectRow.innerHTML = `<p>Loading...</p>`;
}
function hideLoading() {
  projectRow.innerHTML = ``;
}
/* ================
Get Project data from project.json
================== */
let projects = []; // This variable is taken for storing data after successful fetch
async function fetchProjectData() {
  showLoading();
  console.log("Getting data...");
  let response = await fetch(URL);
  projects = await response.json();

  // Check data fetched or not
  if (projects.length === 0) {
    console.log("Projects data is not loaded yet.");
    return;
  } else {
    console.log("Data get successfully..");
    injectProject(projects);
  }
}
fetchProjectData();

/*==================
Inject all project 
cards to project row
 =================== */
function injectProject(projects) {
  hideLoading();
  projects.forEach((project) => {
    projectRow.innerHTML += `<div class="col-12 col-lg-6">
      <div class="project-card">
        <div class="project-card__text-box">
          <h4 class="project-card__title mb-2rem">${project.projectName}</h4>
          <p class="paragraph">
           ${project.projectTitle}
          </p>
          <a onclick="showProjectDetails(${project.project_id});"  class="btn btn--text">
            <span class="text">Visit Details </span>
            <span class="text-icon">&rarr;</span>
          </a>
        </div>
        <div class="project-card__image-box">
          <img
            src="${project.img}"
            alt=""
          />
        </div>
      </div>
    </div>`;
  });
}

function showProjectDetails(id) {
  const selectedProject = projects?.find((project) => project.project_id == id);
  if (selectedProject) {
    localStorage.setItem("selectedProject", JSON.stringify(selectedProject));

    // Get the current location but exclude the file part (like index.html)
    const queryURL = window.location.origin;

    // Redirect to project details page
    window.location.href = `${queryURL}/html/projectDetails.html`;
  }
}

/*===============
  Hamburger menu
  ===============*/
const navMenu = document.querySelector("#nav-menu");
const hamburgerMenu = document.querySelector("#hamburger-menu");
// Hamburger cross
const bar1 = document.querySelector("#bar-1");
const bar2 = document.querySelector("#bar-2");
const bar3 = document.querySelector("#bar-3");
// Click on hamburger menu
hamburgerMenu?.addEventListener("click", () => {
  navMenu.classList.toggle("navbar__links--active");
  bar1.classList.toggle("navbar__toggle--bar-1");
  bar2.classList.toggle("navbar__toggle--bar-2");
  bar3.classList.toggle("navbar__toggle--bar-3");
});

/*===============
        FAQ
  ===============*/
const faqItems = document.querySelectorAll(".section-faq__faq-item");

faqItems.forEach((faqItem) => {
  const heading = faqItem.querySelector(".section-faq__heading");
  heading.addEventListener("click", () => {
    const icon = faqItem.querySelector("i");
    const description = faqItem.querySelector(".section-faq__description");

    // Toggle between plus and minus icon
    if (icon.classList.contains("fa-plus")) {
      icon.classList.add("fa-minus");
      icon.classList.remove("fa-plus");
    } else {
      icon.classList.remove("fa-minus");
      icon.classList.add("fa-plus");
    }
    // Toggle between description has or not
    if (description.classList.contains("active")) {
      description.classList.add("hide");
      description.classList.remove("active");
    } else {
      description.classList.remove("hide");
      description.classList.add("active");
    }

    //Disable others
    faqItems.forEach((othersItem) => {
      const icon = othersItem.querySelector("i");
      const description = othersItem.querySelector(".section-faq__description");
      if (othersItem != faqItem) {
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");

        description.classList.add("hide");
        description.classList.remove("active");
      }
    });
  });
});
