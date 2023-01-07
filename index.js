var c1 = document.getElementById("card1");
var c2 = document.getElementById("card2");
var c3 = document.getElementById("card3");
var h1 = document.getElementById("h1");
var h2 = document.getElementById("h2");
var h3 = document.getElementById("h3");
var p1 = document.getElementById("b1");
var p2 = document.getElementById("b2");
var p3 = document.getElementById("b3");
var aside = document.getElementById("aside");
var check = document.getElementById("check");
c1.onclick = function(){
    // rem 2
    c2.classList.remove("ac1");
    h2.classList.remove("ac2");
    p2.classList.remove("ac3");
    // rem 3
    c3.classList.remove("ac1");
    h3.classList.remove("ac2");
    p3.classList.remove("ac3");
    // add 1
    c1.classList.add("ac1");
    h1.classList.add("ac2");
    p1.classList.add("ac3");
    
}
c2.onclick = function(){
    // rem 1
    c1.classList.remove("ac1");
    h1.classList.remove("ac2");
    p1.classList.remove("ac3");
    // rem 3
    c3.classList.remove("ac1");
    h3.classList.remove("ac2");
    p3.classList.remove("ac3");
    // add 2
    c2.classList.add("ac1");
    h2.classList.add("ac2");
    p2.classList.add("ac3");
    
}
c3.onclick = function(){
    // rem 1
    c1.classList.remove("ac1");
    h1.classList.remove("ac2");
    p1.classList.remove("ac3");
    // rem 2
    c2.classList.remove("ac1");
    h2.classList.remove("ac2");
    p2.classList.remove("ac3");
    // add 2
    c3.classList.add("ac1");
    h3.classList.add("ac2");
    p3.classList.add("ac3");
    
}
check.onclick = function(){
    if(aside.classList == "left"){
    aside.classList.remove("left") ;
    check.style.background = "white"
    }else{
        aside.classList.add("left")
        check.style.background = "#8f93ea"
    }
}
/*if(aside.classList == "left"){
    aside.classList.remove("left")
}*/