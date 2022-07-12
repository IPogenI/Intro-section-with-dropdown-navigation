// Dropdown Mechanisms

// const dropdown_1 = document.getElementById("dropdown_1")
// const dropdown_2 = document.getElementById("dropdown_2")
// const drop_1 = document.getElementById("drop_1")
// const drop_2 = document.getElementById("drop_2")
// const arw_1 = document.getElementById("arw_d_1")
// const arw_2 = document.getElementById("arw_d_2")


// // Dropdowns
// function removeHide (event){
//     event.preventDefault();
//     if (drop_1.classList.contains("hide")){
//         drop_1.classList.remove("hide");
//         arw_1.src = "./images/icon-arrow-up.svg"
//     } else {
//         return;
//     };   
// }

// function addHide (event){
//     event.preventDefault();
//     if (drop_1.classList.contains("hide")){
//         return
//     };
//     drop_1.classList.add("hide")
//     arw_1.src = "./images/icon-arrow-down.svg"
// }

// function removeHide2 (event){
//     event.preventDefault();
//     if (drop_2.classList.contains("hide")){
//         drop_2.classList.remove("hide");
//         arw_2.src = "./images/icon-arrow-up.svg"
//     } else {
//         return;
//     };   
// }

// function addHide2 (event){
//     event.preventDefault();
//     if (drop_2.classList.contains("hide")){
//         return
//     };
//     drop_2.classList.add("hide")
//     arw_2.src = "./images/icon-arrow-down.svg"
// }

// dropdown_1.addEventListener("mouseenter", removeHide)
// dropdown_1.addEventListener("mouseleave", addHide)
// dropdown_2.addEventListener("mouseenter", removeHide2)
// dropdown_2.addEventListener("mouseleave", addHide2)


/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("sideNav").style.width = "60%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
      document.getElementById("sideNav").style.width = "0";
      document.body.style.backgroundColor = "white";
  }