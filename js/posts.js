const getPosts = () =>
  fetch(" https://admin.nextjavascript.com/fake-api/posts?_sort=id&_order=desc")
    .then((resp) => resp.json())
    .then((posts) => {
      const [featured_post, ...restPosts] = posts;
      const { title, body, pulished_date, thumbnail, id } = featured_post;

      const html = `
    <a href="#!"><img class="card-img-top" src="${thumbnail}" alt="${title}" width="850" height="350" /></a>
    <div class="card-body">
        <div class="small text-muted">${pulished_date}</div>
        <h2 class="card-title h4">${title}</h2>
        <p class="card-text">${body}</p>
        <a class="btn btn-primary" href="./readMorePage/index.html?index-id=${id}">Read more →</a>
        <button class="btn btn-danger">X</button>
    </div>
    `;
      document.querySelector("#featuredPost").innerHTML = html;

      const multiplePostHtml = restPosts.map((post) => {
        const { title, body, pulished_date, thumbnail, id } = post;
        return `
        <div class="col-lg-6">
                            
            <div class="card mb-4" >
                <a href="#!"><img class="card-img-top" src="${thumbnail}" alt="${title}" width="700" height="350" /></a>
                <div class="card-body">
                    <div class="small text-muted">${pulished_date}</div>
                    <h2 class="card-title h4">${title}</h2>
                    <p class="card-text">${body}</p>
                    <a class="btn btn-primary" href="./readMorePage/index.html?index-id=${id}">Read more →</a>
                    <button class="btn btn-danger">X</button>
                </div>
            </div>
                           
        </div>
        `;
      });
      document.querySelector("#postLists").innerHTML =
        multiplePostHtml.join("\n");
    });
export default getPosts;
