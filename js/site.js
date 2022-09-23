const getSite = () =>
  fetch("https://admin.nextjavascript.com/fake-api/sites")
    .then((res) => res.json())
    .then((data) => {
      const { heading, subheading } = data;
      document.querySelector(".site-heading").textContent = heading;
      document.querySelector(".site-subheading").textContent = subheading;
    });

export default getSite;
