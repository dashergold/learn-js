//let document=window.document;

function btnclick(e) {
    document.body.style.backgroundColor="azure";
    log("clicked at "+e.clientX+","+e.clientY);
}

function hello_click(e) {
    hello.innerHTML="<button id=\"btn\">PUSH ME!</button>";
    let btn=document.getElementById("btn");
    btn.addEventListener("click",btnclick);
}

function log(s) {
    let logdiv=document.getElementById("log");
    let logmsg="<div>"+s+"</div>";
    logdiv.insertAdjacentHTML("beforeend",logmsg);
}


document.body.style.backgroundColor="#F00" ;
let hello = document.getElementById("hello"); 
hello.style.backgroundColor="green" ;
hello.style.color="white" ;
hello.style.fontFamily="arial" ;

hello.innerHTML="god jul"
hello.insertAdjacentHTML("beforebegin","<div> och gott nytt år</div>");
hello.addEventListener("click",hello_click);

   
log("test1");
log("test2");
