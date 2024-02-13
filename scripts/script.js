const btn = document.querySelector("#btn")
const cover = document.querySelector(".cover")
const helloPage = document.querySelector(".hello_page")

cover.addEventListener("click", ()=>{
    cover.style.opacity = 0
    console.log(2)
    helloPage.style.zIndex = 2
})

