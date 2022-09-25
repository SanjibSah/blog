/*!
* Start Bootstrap - Blog Home v5.0.8 (https://startbootstrap.com/template/blog-home)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-blog-home/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

//const deleteBtn = document.querySelector(".delete-button");

const deleteBtnFunction = () => {
    const url = new URLSearchParams(window.location.search);
    const userId = url.get("index-id");
    fetch(`https://admin.nextjavascript.com/fake-api/posts/${userId}`,{
        method:"DELETE",
        headers: {
                "Content-Type": "application/json",
        }
    })
    .then(res =>{
        if(!res.ok){
            res.json().then(() =>{
                alert("The post has not been deleted!");
            })
        }
    })

}

export default deleteBtnFunction;