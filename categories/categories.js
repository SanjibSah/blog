const categories = () => {
  fetch("https://admin.nextjavascript.com/fake-api/categories")
    .then((resp) => resp.json())
    .then((categories) => {
      const multiplePostHtml = categories.map((categorie) => {
        const { name } = categorie;
        return `
             <div class="col-sm-6">
                 <ul class="list-unstyled mb-0">
                     <li><a href="#!">${name}</a></li>   
                 </ul>
             </div>
                                    
                               
            `;
      });
      document.querySelector("#categories").innerHTML =
        multiplePostHtml.join("\n");
    });
};

export default categories;
