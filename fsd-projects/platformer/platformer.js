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

createPlatform(50, 700, 130, 15, "green");

createPlatform(300, 600, 90, 15, "green");

createPlatform(100, 550, 60, 15, "green");

createPlatform(320, 450, 80, 15, "green");

createPlatform(100, 350, 90, 15, "green");

createPlatform(700, 200, 90, 15, "green");

createPlatform(400, 250, 225, 15, "Blue	", 200, 500, 1.5)

createPlatform(845, 100, 50, 650,"DarkSlateGray");

createPlatform(100,1, 0, 549, "blue");

createPlatform(1050, 625, 90, 15, "green");

createPlatform(1300, 510, 100, 15, "green");

createPlatform(1100, 400, 90, 15, "green");

createPlatform(900, 700, 90, 15, "green");

createPlatform(1310, 300, 90, 15, "green");

createPlatform(1100, 200, 90, 15, "green");

createPlatform(1100, 0, 0, 200, "green");

createPlatform(1275, 100, 125, 25, "Goldenrod");


    // TODO 3 - Create Collectables

    createCollectable("diamond1", 325, 550);

    createCollectable("money", 525, 170);

    createCollectable("coin", 725, 150,);    

    createCollectable("coin", 120, 290, 0.5, 1);  

    createCollectable("diamond1", 846, 60);

    createCollectable("coin", 1065, 510, 0.3, 1);

    createCollectable("money", 1320, 400, 0.2, 1);

    // TODO 4 - Create Cannons

    createCannon("top", 275, 900);

createCannon("bottom", 1190, 800);

createCannon("bottom", 550, 1000);

    createCannon("bottom", 400, 900);

    createCannon("top", 1050, 1500);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
