/* ================
Get Project data from project.json
================== */
let projectDetailsSection = document.querySelector("#project_details");
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
// window.onload = function () {
//   const project = JSON.parse(localStorage.getItem("selectedProject"));
//   console.log(project);
//   projectDetailsSection.innerHTML = `<div class="project-card">
//         <div class="project-card__text-box">
//           <h4 class="project-card__title mb-2rem">${project.projectName}</h4>
//           <p class="paragraph">
//            ${project.projectTitle}
//           </p>
//         </div>
//         <div class="project-card__image-box">
//           <img
//             src="${project.img}"
//             alt=""
//           />
//         </div>
//       </div>`;
// };
window.onload = function () {
  const project = JSON.parse(localStorage.getItem("selectedProject"));
  console.log(project);
  projectDetailsSection.innerHTML = ` <div class="container">
    <div class="title">${project.projectName}</div>

    <!-- Project Details -->
    <div class="project-details">
      <div class="image">
        <img src="project-image.jpg" alt="Project Image">
      </div>
      <div class="details-text">
        <h3>Project Name: <span>Project Name || Project Title</span></h3>
        <h3>Project Details:</h3>
        <ul>
          <li>Detail 1 about the project.</li>
          <li>Detail 2 about the project.</li>
          <li>Detail 3 about the project.</li>
        </ul>
      </div>
    </div>

    <!-- Links -->
    <div class="links">
      <a href="#" class="link-item">GitHub Server Repository</a>
      <a href="#" class="link-item">GitHub Client Repository</a>
      <a href="#" class="link-item">Live Link</a>
    </div>

    <!-- Responsive Design -->
    <div class="responsive-section">
      <h2>Responsive Design</h2>

      <div class="responsive-view">
        <img src="desktop-view.jpg" alt="Desktop View">
        <h3>Desktop View</h3>
      </div>

      <div class="responsive-view">
        <h3>Tablet View</h3>
        <img src="tablet-view.jpg" alt="Tablet View">
      </div>

      <div class="responsive-view">
        <img src="mobile-view.jpg" alt="Mobile View">
        <h3>Mobile View</h3>
      </div>
    </div>
  </div>`;
};
