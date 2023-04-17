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
    // generar los colores a partir de los colores iniciales de la paleta
    for (let color of starterPalette.colors){
        //  Para cada color inicial, se genera una escala de 10 colores utilizando la función 
        let scaleColor = getScale(color.color, 10).reverse();
        // Push scales color on my newPallet
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

//generar un rango de colores a partir de un color inicial. 
function getRange(hexColor) {
  const end = "#fff";
  return [chroma(hexColor).darken(1.4).hex(), hexColor, end];
} //Output ["#dsd9d", "#f9s9a", "#fff"] --> los primeros dos son de ejemplo, puede ser cualquier codigo de color

function getScale (hexColor, numberOfColors){
     return chroma
     .scale(getRange(hexColor)) //generar una escala de colores que va desde el color oscuro hasta el blanco, pasando por el color inicial.
     .mode("lab")//establece el modo de color utilizado para la interpolación 
     .colors(numberOfColors);//genera un array de colores a partir de la escala y el número de colores deseado.
}



export  default generatePalette;