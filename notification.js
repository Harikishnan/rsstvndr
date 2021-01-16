var modal=document.getElementById("myModal"),
body=document.getElementsByTagName("body"),
container=document.getElementById("myContainer"),
btnOpen=document.getElementById("myBtn"),
btnClose=document.getElementById("closeModal");
var modal2=document.getElementById("myModal2"),
btnClose1=document.getElementById("closeModal2");

var myvar;
var myvar2;
function myFunction(){
    myvar=setTimeout(shownotify, 10000);
    myvar2=setTimeout(shownotify2, 30000);
}


function shownotify (){
    document.getElementById("myModal").className="Modal is-visuallyHidden",
    setTimeout(function(){
        document.getElementById("myContainer").className="MainContainer is-blurred"
        document.getElementById("myModal").className="Modal"
    },100),container.parentElement.className="ModalOpen"
}

function shownotify2 (){
    document.getElementById("myModal2").className="Modal is-visuallyHidden",
    setTimeout(function(){
        document.getElementById("myContainer").className="MainContainer is-blurred"
        document.getElementById("myModal2").className="Modal"
    },300),container.parentElement.className="ModalOpen"
}


btnClose.onclick=function(){modal.className="Modal  is-visuallyHidden",
body.className="",container.className="MainContainer",container.parentElement.
className=""},window.onclick=function(e){e.target==modal&&(modal.className="Modal is-hidden",
body.className="",container.className="MainContainer",
container.parentElement.className="")};


btnClose1.onclick=function(){modal.className="Modal  is-hidden",
body.className="",container.className="MainContainer",container.parentElement.
className="",className="",modal2.className="Modal  is-hidden",
body.className="",container.className="MainContainer",container.parentElement.
className=""}
