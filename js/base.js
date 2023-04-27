var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    if(currentScrollPos>200){
        document.getElementById("navbar").style.top = "-50px";
    } else{
        document.getElementById("navbar").style.top = "0";
    }
  } else {
    document.getElementById("navbar").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}

var bool=true;

let hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click",(e)=>{
  let menu=document.getElementsByClassName("sidemenu");
  console.log('ham clicked')
  if(bool){
    bool=false;
    menu[0].style.display ="inline-block";
  }
  else{
    bool=true;
    menu[0].style.display ="none";
  }
});