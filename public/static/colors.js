// useful stuff for scripting

//color id to color name
//and color name to color id
//what is this for? writechar?
//well al the functions like getCharInfo and detecting cursor all return a color id
//and also yes this is going to be for writechar
var colors = {
  "0": "Black",
  "1": "Dark Gray",
  "2": "Gray",
  "3": "Light Gray",
  "4": "Maroon",
  "5": "Red",
  "6": "Light Red",
  "7": "Brown",
  "8": "Orange",
  "9": "Beige",
  "10": "Dark Yellow",
  "11": "Yellow",
  "12": "Light Yellow",
  "13": "purple",
  "14": "dark purple",
  "15": "dark red",
  "16": "dark green",
  "17": "dark teal",
  "18": "teal",
  "19": "indigo",
  "20": "periwinkle",
  "21": "pink",
  "22": "dark brown",
  "23": "burgundy",
  "24": "pale yellow",
  "25": "light teal",
  "26": "lavender",
  "27": "pale purple",
  "28": "magenta",
  "29": "beige",
  "30": "dark grey",
  "black": 0,
  "grey": 1,
  "light grey": 2,
  "light pink": 3,
  "red": 4,
  "orange": 5,
  "brown": 6,
  "yellow": 7,
  "light green": 8,
  "green": 9,
  "light blue": 10,
  "blue": 11,
  "dark blue": 12,
  "purple": 13,
  "dark purple": 14,
  "dark red": 15,
  "dark green": 16,
  "dark teal": 17,
  "teal": 18,
  "indigo": 19,
  "periwinkle": 20,
  "pink": 21,
  "dark brown": 22,
  "burgundy": 23,
  "pale yellow": 24,
  "light teal": 25,
  "lavender": 26,
  "pale purple": 27,
  "magenta": 28,
  "beige": 29,
  "dark grey": 30,
};
var colours = colors; //british spellign

// lets you use decorations in writeChar functions
function convertFmt(color, bold, italic, underline, strike) {
	var format = (bold << 3) | (italic << 2) | (underline << 1) | strike;
	return format * 34 + color;
};

// might not be used because getCharInfo already does this for you but just in case
function parseFmt(chr) {
	var col = chr % 31;
	var format = Math.floor(chr / 34);
	return {
		color: col,
		bold: (format & 8) == 8,
		italic: (format & 4) == 4,
		underline: (format & 2) == 2,
		strike: (format & 1) == 1,
	};
};

function XYtoChunkCoords(x1, y1) {
	var chunkX = Math.floor(x1 / 20);
	var chunkY = Math.floor(y1 / 10);
	var x = x1 - Math.floor(x1 / 20) * 20;
	var y = y1 - Math.floor(y1 / 10) * 10;
	var index = y * 20 + x;
	return [chunkX, chunkY, index];
};