const dropdown_1 = document.getElementById("dropdown_1")
const dropdown_2 = document.getElementById("dropdown_2")
const drop_1 = document.getElementById("drop_1")
const drop_2 = document.getElementById("drop_2")
function removeHide (event){
    event.preventDefault();
    if (drop_1.classList.contains("hide")){
        drop_1.classList.remove("hide");
    } else {
        return;
    };   
}

function addHide (event){
    event.preventDefault();
    if (drop_1.classList.contains("hide")){
        return
    };
    drop_1.classList.add("hide")
}

function removeHide2 (event){
    event.preventDefault();
    if (drop_2.classList.contains("hide")){
        drop_2.classList.remove("hide");
    } else {
        return;
    };   
}

function addHide2 (event){
    event.preventDefault();
    if (drop_2.classList.contains("hide")){
        return
    };
    drop_2.classList.add("hide")
}

dropdown_1.addEventListener("mouseenter", removeHide)
dropdown_1.addEventListener("mouseleave", addHide)
dropdown_2.addEventListener("mouseenter", removeHide2)
dropdown_2.addEventListener("mouseleave", addHide2)
