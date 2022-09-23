/*!
 * Start Bootstrap - Blog Post v5.0.8 (https://startbootstrap.com/template/blog-post)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-blog-post/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

import categories from "../../categories/categories.js";

const url = new URLSearchParams(window.location.search);
const userId = url.get("index-id");

fetch(`https://admin.nextjavascript.com/fake-api/posts/${userId}`)
  .then((res) => res.json())
  .then((post) => {
    const { title, author, published_date, innerImageUrl, readMoreBody } = post;
    const readMoreHtml = `
            
            <header class="mb-4">
                
                <h1 class="fw-bolder mb-1">${title}</h1>
                
                <div class="text-muted fst-italic mb-2">Posted on ${published_date} by ${author}</div>
                
                <a class="badge bg-secondary text-decoration-none link-light" href="#!">Web Design</a>
                <a class="badge bg-secondary text-decoration-none link-light" href="#!">Freebies</a>
            </header>
            
            <figure class="mb-4"><img class="img-fluid rounded" src="${innerImageUrl}" alt="${title}" width="900" height="400"/></figure>
            
            <section class="mb-5">
                ${readMoreBody}
                </section>
        
        
        `;

    document.querySelector("#readMe").innerHTML = readMoreHtml;
  });
categories();
