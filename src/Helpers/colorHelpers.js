import chroma from "chroma-js";
const levels  = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
function generatePalette (starterPalette){

    // My new palette
    let newPalette = {
        paletteName: starterPalette.paletteName,
        id: starterPalette.id,
        emoji: starterPalette.emoji,
        color: {}
    }
    // Creat keys color => {50:[]}
    for (let level of levels){
        newPalette.color[level] = [];
    }
    // ???
    for (let color of starterPalette.colors){
        let scaleColor = getScale(color.color, 10).reverse();
        for(let i in scaleColor){
            newPalette.color[levels[i]].push({
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

function getRange(hexColor) {
  const end = "#fff";
  return [chroma(hexColor).darken(1.4).hex(), hexColor, end];
} //Output ["#dsd9d", "#f9s9a", "#fff"] --> los primeros dos son de ejemplo, puede ser cualquier codigo de color

function getScale (hexColor, numberOfColors){
     return chroma
     .scale(getRange(hexColor))
     .mode("lab")
     .colors(numberOfColors);
}



export  default generatePalette;