$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid

    //  toggleGrid();


    // TODO 2 - Create Platforms

createPlatform(100, 700, 90, 15, "green");

createPlatform(300, 600, 90, 15, "green");

createPlatform(90, 550, 60, 15, "green");

createPlatform(320, 450, 80, 15, "green");

createPlatform(100, 350, 90, 15, "green");

createPlatform(700, 350, 90, 15, "green");

createPlatform(900, 450, 90, 15, "green");

createPlatform(400, 250, 200, 15, "blue", 200, 500, 2)

    // TODO 3 - Create Collectables

    createCollectable("abood", 325, 550);

    createCollectable("abood", 525, 170, 0.5, 1);

    createCollectable("coin", 725, 300, 0, 0);    


    // TODO 4 - Create Cannons

    createCannon("top", 275, 900);

// createCannon("right", 350, 1500);

createCannon("bottom", 550, 1500);

    createCannon("bottom", 400, 1700);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
