import getPosts from "./js/posts.js";
import getSite from "./js/site.js";
import categories from "./categories/categories.js";
import deleteBtnFunction from "./js/delete.js";

getPosts();

getSite();

categories();

const url = new URLSearchParams(window.location.search);
const userId = url.get("index-id");
const deleteId = document.querySelector(`#${userId}`);

deleteId.onclick = (e) =>{
    deleteBtnFunction();
}