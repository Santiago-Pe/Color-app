import chroma from "chroma-js";
const levels  = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

/* ---------- Main Function---------- */

//  recibe como argumento una paleta inicial y devuelve una nueva paleta con colores generados.
function generatePalette (starterPalette){

    // My new palette
    let newPalette = {
        paletteName: starterPalette.paletteName,
        id: starterPalette.id,
        emoji: starterPalette.emoji,
        colors: {}
    }
    // Creat keys color => {50:[]}
    for (let level of levels){
        newPalette.colors[level] = [];
    }
    // Generate colors from the colors of the initial palette
    for (let color of starterPalette.colors){
        // Generate a scale of 10 colors for each starting color
        let scaleColor = getScale(color.color, 10).reverse();
        // Push the color of the scales on my new Pallet
        for(let i in scaleColor){
            newPalette.colors[levels[i]].push({
              name: `${color.name} ${levels[i]}`,
              id: color.name.toLowerCase().replace(/ /g, "-"),
              hex: scaleColor[i],
              rgb: chroma(scaleColor[i]).css(),
              rgba: chroma(scaleColor[i])
                .css()
                .replace("rgb", "rgba")
                .replace(")", ",1.0)"),
            });
        }
    }
    return newPalette
}

/* ---------- Functions ---------- */

//Generate colors range from the colors of the initial palette
function getRange(hexColor) {
  const end = "#fff";
  return [chroma(hexColor).darken(1.4).hex(), hexColor, end];
} //Output ["#dsd9d", "#f9s9a", "#fff"] --> los primeros dos son de ejemplo, puede ser cualquier codigo de color

function getScale (hexColor, numberOfColors){
     return chroma
     .scale(getRange(hexColor)) //Generate a color scale from white to black, passing the initial color
     .mode("lab")//Set the color mood using interpolation
     .colors(numberOfColors);//Generate color matrices from scale and desired color numbers
}



export  default generatePalette;