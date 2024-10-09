fetch(`../../public/projects.json`)
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
  })
  .catch((error) => console.error(error));

//FAQ
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
