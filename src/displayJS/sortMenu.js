/* Toggle between showing and hiding the navigation menu links 
when the user clicks on the hamburger menu / bar icon */
export default function burgerMenu() {
    var x = document.getElementById("burgerLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  };