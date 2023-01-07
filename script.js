const h2 = document.createElement("h2");
h6.textContent = "This content added by JavaScript";

document.querySelector("body").appendChild(h2);

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
