const con = document.getElementById("con");

const w = window.innerWidth;
const h = window.innerHeight;

const size = w < h? w:h;
const sqSize = 19 * size / 160 + "px";
const imgSize = 0.695 * sqSize + "px";
				 
let selected = false;
let selectX, selectY, moveX, moveY;
let validMoves;
let turn = 1;

const sqs = [], grid2 = [];
const grid = [["r","n","b","q","k","b","n","r"],
			   ["p","p","p","p","p","p","p","p"],
			   [0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0],
			   [0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0],
			   ["P","P","P","P","P","P","P","P"],
			   ["R","N","B","Q","K","B","N","R"]];
			    
const IMAGES = [ "<img src=\"Assets/WhiteKing.png\">", "<img src=\"Assets/WhiteQueen.png\">",
				 "<img src=\"Assets/WhiteRook.png\">", "<img src=\"Assets/WhiteBishop.png\">",
				 "<img src=\"Assets/WhiteKnight.png\">", "<img src=\"Assets/WhitePawn.png\">",
				 "<img src=\"Assets/BlackKing.png\">", "<img src=\"Assets/BlackQueen.png\">",
				 "<img src=\"Assets/BlackRook.png\">", "<img src=\"Assets/BlackBishop.png\">",
				 "<img src=\"Assets/BlackKnight.png\">", "<img src=\"Assets/BlackPawn.png\">"  ];
	
con.style.width = 19 * size / 20 + "px";
con.style.height = 19 * size / 20 + "px";

const uCase = s => s.toUpperCase();	
const lCase = s => s.toLowerCase(); 
const turnCheck = (x, y) => {
    if(turn == 1)   
        return grid[x][y] == 0 || grid[x][y] == uCase(grid[x][y]);
    else    
        return grid[x][y] == 0 || grid[x][y] == lCase(grid[x][y]);
}