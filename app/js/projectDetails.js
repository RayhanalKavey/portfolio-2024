/* ================
Get Project data from project.json
================== */
let projectDetailsSection = document.querySelector("#project-details");

window.onload = function () {
  const project = JSON.parse(localStorage.getItem("selectedProject"));
  projectDetailsSection.innerHTML = ` 
      <!-- ==========
      Section Project Details 
      =============-->
      <h2 class="pt-8rem heading-secondary mb-5rem text-align-center">
        ${project?.projectTitle}
      </h2>
      <section
        class="project-details container-2rem sm-container-4rem py-2rem sm-py-4rem">
        <div class="project-details__image-box">
          <img
            src="${project?.img}"
            alt="Project Image" />
        </div>
        <div class="project-details__text-box">
          <ul class="project-details__details-list pl-2rem">
            <li>
             ${project?.details[0]}
            </li>
            <li>
               ${project?.details[1]}
            </li>
            <li>
              ${project?.details[2]}
            </li>
          </ul>
        </div>
      </section>

      <!-- ==========
       Section Links
        =============-->
      <section class="section-link sp-6rem">
        <a href="${project?.githubServer}" target="_blank" class="section-link__link-item">GitHub Server Repository</a>
        <a href="${project?.githubClient}" target="_blank" class="section-link__link-item">GitHub Client Repository</a>
        <a href="${project?.liveLink}" target="_blank" class="section-link__link-item">Live Link</a>
      </section>

      <!-- ==========
       Section Responsive images
        =============-->
      <section class="section-responsive spb-10rem">
        <h2 class="heading-secondary text-align-center">Responsive Design</h2>

        <div class="gallery pt-4rem">
          <img
            class="gallery__img"
            src="${project?.responsiveImg[0]}"
            alt="Image 1" />
          <img
            class="gallery__img"
            src="${project?.responsiveImg[1]}"
            alt="Image 2" />
          <img
            class="gallery__img"
            src="${project?.responsiveImg[2]}"
            alt="Image 3" />
         
        </div>
      </section>`;
};
