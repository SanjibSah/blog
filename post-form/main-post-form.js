import postForm from "./post-form.js";

const form = document.querySelector("#postForm")

form.onsubmit = (e) => {
    e.preventDefault();
    postForm();
  };