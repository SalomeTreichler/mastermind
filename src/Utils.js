export const defaultColors = [
    "#e8e8e8", "#ff6767", "#ffa767", "#ffde67", "#d7ff67", "#67ffed", "#67adff", "#9867ff", "#ea67ff"
];

export const difficulties = ["easy","medium", "hard","extreme"];

export function RGBToHex(rgb) {
    // Choose correct separator
    let sep = rgb.indexOf(",") > -1 ? "," : " ";
    // Turn "rgb(r,g,b)" into [r,g,b]
    rgb = rgb.substr(4).split(")")[0].split(sep);

    let r = (+rgb[0]).toString(16),
        g = (+rgb[1]).toString(16),
        b = (+rgb[2]).toString(16);

    if (r.length === 1)
        r = "0" + r;
    if (g.length === 1)
        g = "0" + g;
    if (b.length === 1)
        b = "0" + b;

    return "#" + r + g + b;
}

export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array
}

export function generateCode(codeArray, max, min, length, reuseColors) {
    let generatedCode = [];
    for (let i = 0; i < length; i++) {
        let rand = Math.floor(min + Math.random() * (max - min));
        generatedCode.push(codeArray[rand]);
        max = max - 1;

        if (!reuseColors){
            codeArray = codeArray.filter(value => value !== codeArray[rand]);
        }
    }
    return generatedCode;
}

export function generateSettings(difficulty){
    switch (difficulty){
        case "easy":
            return {colorAmount: 8, codeLength: 4, areHintsShuffled: false, isMultipleColorCode: false};
        case "medium":
            return {colorAmount: 8, codeLength: 4, areHintsShuffled: true, isMultipleColorCode: false};
        case "hard":
            return {colorAmount: 8, codeLength: 6, areHintsShuffled: true, isMultipleColorCode: false};
        case "extreme":
            return {colorAmount: 8, codeLength: 6, areHintsShuffled: true, isMultipleColorCode: true};
        default:

    }
}

export function calculateScore(tries) {
    if (tries >= 9) {
        return 1;
    } else {
        return 10 - tries;
    }
}

