import {
  published_date as published_dateElement,
  title as titleElement,
  author as authorElement,
  body as bodyElement,
  image_url as image_urlElement,
  readMoreBody as readMoreBodyElement,
  innerImageUrl as innerImageUrlElement,
} from "./post-form-element.js";

const postForm = () => {
    let options = { year: 'numeric', month: 'long', day: 'numeric' };

  const published_date = new Intl.DateTimeFormat('en-GB', options).format(new Date())
  const title = titleElement.value;
  const author = authorElement.value;
  const body = bodyElement.value;
  const image_url = image_urlElement.value;
  const readMoreBody = $("#summernote").summernote("code");
  const innerImageUrl = innerImageUrlElement.value;

  fetch("http://localhost:3000/posts", {
    method: "POST",
    body: JSON.stringify({
      published_date,
      title,
      author,
      body,
      image_url,
      readMoreBody,
      innerImageUrl,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((resp) => {
    if (!resp.ok) {
      resp.json().then(() => {
        alert("Error occer");
      });
    } else {
      window.location.href = "/index.html";
    }
  });
};

export default postForm;
