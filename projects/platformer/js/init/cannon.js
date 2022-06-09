(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let cannon = window.opspark.cannon;
    
    /**
     * init: Initialize all cannons.
     *
     * GOAL: Add at least 3 cannons to make your level challenging. 
     * 
     * Use the createCannon Function to create cannons for the level. 
     * 
     * createCannon() takes these arguments:
     *      
     *      createCannon(type, position, delay);
     * 
     *      type: "top", "bottom", "left", or "right"
     *      position: The position of the cannon along whichever side the cannon is placed on
     *          - the x coordinate for "top" and "bottom" cannons
     *          - the y coordinate for "left" and "right" cannons
     *      delay: OPTIONAL the number of milliseconds to wait before firing the first projectile
     */ 
    function init(game) {
        let createCannon = cannon.create;
        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        // example: 
        createCannon("top", 450); // cannon on top of screen located at x = 450
        createCannon("bottom", 640); // cannon on bottom of screen located at x = 640
        createCannon("right", 655); // cannon on right of screen located at y = 655
        createCannon("right", 355); // cannon on right of screen located at y = 355
        createCannon("left", 845); // cannon on left of screen located at y = 845
        createCannon("left", 445); // cannon on left of screen located at y = 445
        
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
    cannon.init = init;
})(window);
