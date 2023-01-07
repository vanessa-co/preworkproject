
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  /* click here button */
  $(document).ready(function() {
    $("#emailLnk").click(function()
     {
         window.location.href = "mailto:vanessa.co403@gmail.com";
     });
});

