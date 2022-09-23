const getPosts = () =>
  fetch(" https://admin.nextjavascript.com/fake-api/posts?_sort=id&_order=desc")
    .then((resp) => resp.json())
    .then((posts) => {
      const [featured_post, ...restPosts] = posts;
      const { title, body, published_date, image_url, id } = featured_post;

      const html = `
    <a href="#!"><img class="card-img-top" src="${image_url}" alt="${title}" width="850" height="350" /></a>
    <div class="card-body">
        <div class="small text-muted">${published_date}</div>
        <h2 class="card-title h4">${title}</h2>
        <p class="card-text">${body}</p>
        <a class="btn btn-primary" href="./readMorePage/index.html?index-id=${id}">Read more →</a>
    </div>
    `;
      document.querySelector("#featuredPost").innerHTML = html;

      const multiplePostHtml = restPosts.map((post) => {
        const { title, body, published_date, image_url, id } = post;
        return `
        <div class="col-lg-6">
                            
            <div class="card mb-4" >
                <a href="#!"><img class="card-img-top" src="${image_url}" alt="${title}" width="700" height="350" /></a>
                <div class="card-body">
                    <div class="small text-muted">${published_date}</div>
                    <h2 class="card-title h4">${title}</h2>
                    <p class="card-text">${body}</p>
                    <a class="btn btn-primary" href="./readMorePage/index.html?index-id=${id}">Read more →</a>
                </div>
            </div>
                           
        </div>
        `;
      });
      document.querySelector("#postLists").innerHTML =
        multiplePostHtml.join("\n");
    });
export default getPosts;
