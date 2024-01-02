/*
 28)Create a program that reads the width and length of a rectangular terrain, 
 calculating and displaying its area in square meters. 
 The program should also show the classification of this terrain, according to the list below:
Below 100m² = POPULAR LAND
Between 100m² and 500m² = MASTER LAND
Above 500m² = VIP LAND
*/

const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function classifyTerrain() {
  const width = parseFloat(prompt("What is the width of the terrain ? "));
  const length = parseFloat(prompt("What is the length of the terrain? "));

  const area = width * length;

  if (area < 100) {
    console.log(
      `The terrain measures ${area.toFixed(1)}m², so it is a Popular Terrain`
    );
    readline.question("Press Enter to Exit ... ");
  } else if (area >= 100 && area <= 500) {
    console.log(
      `The terrain measures ${area.toFixed(1)}m², so it is a Master Terrain`
    );
    readline.question("Press Enter to Exit ... ");
  } else {
    console.log(`The terrain measures ${area.toFixed(1)}m², so it is a VIP Terrain.`);
    readline.question("Press Enter to Exit ... ");
  }
}

classifyTerrain();
