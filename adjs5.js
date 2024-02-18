var rect=document.querySelector("#main")
rect.addEventListener("mousemove",function(details){
    var rectanglelocation=rect.getBoundingClientRect();
    console.log(details.clientX)
})