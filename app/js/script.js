fetch(`../../public/projects.json`)
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
  })
  .catch((error) => console.error(error));

//FAQ
const faqItems = document.querySelectorAll(".section-faq__faq-items");

faqItems.forEach((faqItem) => {
  const heading = faqItem.querySelector(".section-faq__heading");
  heading.addEventListener("click", () => {
    const icon = faqItem.querySelector("i");
    const description = faqItem.querySelector(".section-faq__description");

    // Toggle between plus and minus icon
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");
    // Toggle between description has or not
    description.classList.toggle("d-none");

    //Disable others
    faqItems.forEach((othersItem) => {
      const icon = othersItem.querySelector("i");
      const description = othersItem.querySelector(".section-faq__description");
      if (othersItem != faqItem) {
        icon.classList.replace("fa-minus", "fa-plus");
        description.classList.add("d-none");
      }
    });
  });
});
