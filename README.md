# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview
Intro section with dropdown navigation

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Desktop Preview](./screenshots/desktop%20preview.png)
![Mobile Preview](./screenshots/mobile%20preview.png)

### Links

- Solution URL: [](https://your-solution-url.com)
- Live Site URL: (https://ipogeni.github.io/Intro-section-with-dropdown-navigation/)

## My process
Started with Basic HTMLS, then basic css styles specified by the challenge. Desgined the Desktop Version and then styled the side bar. Played with the dropdowns with javascript although used css to make them later. Finally made the website responsive and all the while following proper guidlines.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

How to make hover effect using Javascript:

```js
// Dropdown Mechanisms

const dropdown_1 = document.getElementById("dropdown_1")
const dropdown_2 = document.getElementById("dropdown_2")
const drop_1 = document.getElementById("drop_1")
const drop_2 = document.getElementById("drop_2")
const arw_1 = document.getElementById("arw_d_1")
const arw_2 = document.getElementById("arw_d_2")


// Dropdowns
function removeHide (event){
    event.preventDefault();
    if (drop_1.classList.contains("hide")){
        drop_1.classList.remove("hide");
        arw_1.src = "./images/icon-arrow-up.svg"
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
    arw_1.src = "./images/icon-arrow-down.svg"
}

function removeHide2 (event){
    event.preventDefault();
    if (drop_2.classList.contains("hide")){
        drop_2.classList.remove("hide");
        arw_2.src = "./images/icon-arrow-up.svg"
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
    arw_2.src = "./images/icon-arrow-down.svg"
}

dropdown_1.addEventListener("mouseenter", removeHide)
dropdown_1.addEventListener("mouseleave", addHide)
dropdown_2.addEventListener("mouseenter", removeHide2)
dropdown_2.addEventListener("mouseleave", addHide2)
```

## Author

- Frontend Mentor - [Pogen](https://www.frontendmentor.io/profile/IPogenI)
- Github - [Pogen](https://www.twitter.com/yourusername)
