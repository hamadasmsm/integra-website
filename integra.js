// When the user clicks on the button,
// function display() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }
//hiding dropdown menue when press on the window
// window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//     document.getElementById("myDropdown").classList.remove('show');
//     }
//}
// another solution for hiding dropdown menue
// window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }

function display(a) {
     closeAllMenu();
    document.getElementById(a).classList.toggle("show");
}

function closeAllMenu(){//before show menu, close all menu first
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
            openDropdown.classList.remove('show'); 
    }
}

window.onclick = function(event) { // click outside the menu, close menu
if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
}
}
function overlay(){
    {
        document.getElementById("over2").style.width="100%";
        
    }
}
function closeNav() {
    document.getElementById("over2").style.width = "0%";
}    

