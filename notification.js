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
    myvar=setTimeout(shownotify, 7000);
    //myvar2=setTimeout(shownotify2, 5000000);//
}


function shownotify (){
    window.location.href="bloodregisteredmembers.html"
}
