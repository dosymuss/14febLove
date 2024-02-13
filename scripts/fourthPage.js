const inp = document.querySelectorAll(".input")
const btn = document.querySelector("#btn")
const error = document.querySelector(".error")


let men = JSON.parse(localStorage.getItem("men"))


btn.addEventListener("click", () => {
    inp.forEach((item) => {
        if (item.checked) {
            for (let key in men) {
                if (key === item.value) {
                    men[key]++
                    localStorage.setItem("men", JSON.stringify(men))
                    window.location.href = "../pages/fivethPage.html"
                }
            }
        }
        else {
            error.style.opacity = 1
            error.style.display = "flex"
            error.style.position = "absolute"
        }
    })
})

error.addEventListener("click", ()=>{
    error.style.opacity = 0
            error.style.display = "none"
})