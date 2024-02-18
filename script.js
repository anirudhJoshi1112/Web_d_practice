
// // 1.selection of an element
// // var a=document.querySelector("h3")
// // console.log(a)


// // 2.changing html
// //var a=document.querySelector("h3")
// //a.innerHTML="arrre"

// // 3.changing css
// //a.style.backgroundColor="blue"

// //Event Listner
// var a=document.querySelector("h3")
// a.addEventListener("click",function(){
//     a.innerHTML="Arre kya tum pagal ho"
//     a.style.backgroundColor="black"
//     a.style.color="green"

// })


var bulb=document.querySelector("#bulb")
var btn=document.querySelector("button")
var flag=0
btn.addEventListener("click",function(){
    if(flag==0){
        bulb.style.backgroundColor="yellow"
        console.log("clicked")
        flag=1;
    }
    else{
        bulb.style.backgroundColor="transparent"
        console.log("dobara clicked")
        flag=0
    }
})