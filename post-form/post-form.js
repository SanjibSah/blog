import {
  pulished_date,
  title as titleElement,
  author as authorElement,
  body as bodyElement,
  thumbnail as image_urlElement,
  content as readMoreBodyElement,
  featured_image as innerImageUrlElement,
} from "./post-form-element.js";

const postForm = () => {
    let options = { year: 'numeric', month: 'long', day: 'numeric' };

  const pulished_date = new Intl.DateTimeFormat('en-GB', options).format(new Date())
  const title = titleElement.value;
  const author = authorElement.value;
  const body = bodyElement.value;
  const thumbnail = image_urlElement.value;
  const content = $("#summernote").summernote("code");
  const featured_image = innerImageUrlElement.value;

  fetch("https://admin.nextjavascript.com/fake-api/posts", {
    method: "POST",
    body: JSON.stringify({
      pulished_date,
      title,
      author,
      body,
      thumbnail,
      content,
      featured_image,
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
