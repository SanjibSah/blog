
const getSite = () =>  fetch("http://localhost:3000/header")
.then((res) => res.json())
.then((data)=>{
    const {heading , subheading} = data
    document.querySelector(".site-heading").textContent = heading
    document.querySelector(".site-subheading").textContent = subheading
})

export default getSite;