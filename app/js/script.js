fetch(`../../public/projects.json`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.error(error));

let projects;
