const collpasibles = document.querySelectorAll(".collapsible");

collpasibles.forEach((item)=>
    item.addEventListener("click",function(){
        this.classList.toggle("collapsible--expanded");
    })
);