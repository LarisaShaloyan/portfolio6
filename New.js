let element=document.querySelectorAll("ul li")
let back=document.querySelector(".content")

//window.localStorage.clear()
if(window.localStorage.getItem("color")){
  back.style.backgroundColor=window.localStorage.getItem("color")
  element.forEach((li)=> {
    li.classList.remove("active")

  })

  document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active")
}else{
  console.log("no")
}
element.forEach((li)=>{
  li.addEventListener("click",(e)=>{
    e.currentTarget.classList.add("active")
    window.localStorage.setItem("color",e.currentTarget.dataset.color)
    back.style.backgroundColor=e.currentTarget.dataset.color
  })
})



