var con=document.querySelector("#main")
var love=document.querySelector("i")

con.addEventListener("dblclick",function(){
    love.style.transform='translate(-50%,-50%) scale(1)'
    love.style.opacity=0.8
    setTimeout(function(){
        love.style.opacity=0;
    },1000)
    setTimeout(function(){
        love.style.transform='translate(-50%,-50%) scale(0)'
    },2000)
})

// setTimeout is delay and it is a inbuilt funtion of browser
// setTimeout(function(){
//     console.log("hello")
// },5000)
