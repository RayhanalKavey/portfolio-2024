const URL = `../../public/projects.json`;
let projectRow = document.querySelector("#project-row");
async function fetchProjectData() {
  console.log("Getting data...");
  let response = await fetch(URL);
  let projects = await response.json();
  // console.log("projects:", projects[0]);

  // Inject all project cards to project row
  projects.forEach((project) => {
    // console.log("project:", project);
    projectRow.innerHTML += `<div class="col-12 col-lg-6">
      <div class="project-card">
        <div class="project-card__text-box">
          <h4 class="project-card__title mb-2rem">${project.projectName}</h4>
          <p class="paragraph">
           ${project.projectTitle}
          </p>
          <a href="#" class="btn btn--text">
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
fetchProjectData();

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
