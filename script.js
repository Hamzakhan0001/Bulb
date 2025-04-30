let bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")

let flag = 0

btn.addEventListener("click", function(){
    if(flag==0){
        bulb.style.background = "radial-gradient(circle at 30% 30%, #fff8b3, #fdd835)"
        console.log("clicked")
        flag=1
    }else{
        bulb.style.background = "transparent"
        flag=0
    }
})