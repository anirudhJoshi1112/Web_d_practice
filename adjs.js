var istatus=document.querySelector("h3")
var addFriend=document.querySelector("#add")
var flag=0
addFriend.addEventListener("click",function(){
    if(flag==0){
        istatus.innerHTML="Friends"
        istatus.style.color="blue"
        addFriend.innerHTML="Remove"
        flag=1;
    }
    else{
        istatus.innerHTML="Stranger"
        istatus.style.color="Green"
        addFriend.innerHTML="Add Friend"
        flag=0;
    }

})