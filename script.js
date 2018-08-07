let sidenav = document.getElementsByClassName('sidenav')[0];
let head = document.getElementsByClassName('head')[0];
let toggle = document.getElementsByClassName('burgerNav')[0];

window.onload=function(){
let mainPush = false;
    toggle.onclick=function(){
        if (mainPush === false ) {
          sidenav.classList.toggle('opened');
          document.getElementById("main").style.marginLeft = "294px";
          mainPush = true;
        }
        else if (mainPush === true) {
          sidenav.classList.toggle('opened');
          document.getElementById("main").style.marginLeft = "0";
          mainPush = false;
        }
    }

}
