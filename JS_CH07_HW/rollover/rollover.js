"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("#image_rollovers img");

    // process each img tag
    for (let image of images) {
        const oldURL = image.src;
        const newURL = image.id;

        // preload rollover image
        const rollOverImage = new Image();
        rollOverImage.src = "images/bison.jpg";
        rollOverImage.src = "images/deer.jpg";

        //Set Up Timers
        setTimeout("images/bison.jpg", "images/deer.jpg" , 1000);
        setTimeout("images/hero.jpg", "images/release.jpg" , 2000);
      

        // set up event handlers for hovering an image
        image.addEventListener("mouseover", () => {
            image.src = newURL;
        });
        image.addEventListener("mouseout", () => {
            image.src = oldURL;
        });
    }
});