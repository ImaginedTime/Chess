createBoard();
colorBoard();
placePieces();

function createBoard()
{
	for(let i = 0; i < 8; i++)
	{
		sqs[i] = [];
		grid2[i] = [];
		for(let j = 0; j < 8;j++)
		{
			grid2[i][j] = grid[i][j];
			sqs[i][j] = document.createElement("div");
			con.appendChild(sqs[i][j]);
			sqs[i][j].style.width = sqSize;
			sqs[i][j].style.height = sqSize;
		}
	}
}

function colorBoard()
{
	for(let i = 0; i < 8; i++)
		for(let j = 0; j < 8;j++)
			sqs[i][j].style.background = 
				i%2 == j%2? "#C19A6B": "#663300";
							//lightbrown  //brown
}

function colorValidMoves(x, y)
{
	sqs[x][y].style.background = "lightyellow";
	generateValidMoves(x, y, grid);
	for(let i = 0; i < validMoves.length; i++)
		sqs[validMoves[i][0]][validMoves[i][1]].style.background = "pink";
}

function placePieces()
{
	for(let i = 0; i < 8; i++)
	{
		for(let j = 0; j < 8;j++)
		{
			switch(grid[i][j])
			{
				case "K":
					sqs[i][j].innerHTML = IMAGES[0];
					break;
				case "Q":
					sqs[i][j].innerHTML = IMAGES[1];
					break;
				case "R":
					sqs[i][j].innerHTML = IMAGES[2];
					break;
				case "B":
					sqs[i][j].innerHTML = IMAGES[3];
					break;
				case "N":
					sqs[i][j].innerHTML = IMAGES[4];
					break;
				case "P":
					sqs[i][j].innerHTML = IMAGES[5];
					break;
				case "k":
					sqs[i][j].innerHTML = IMAGES[6];
					break;
				case "q":
					sqs[i][j].innerHTML = IMAGES[7];
					break;
				case "r":
					sqs[i][j].innerHTML = IMAGES[8];
					break;
				case "b":
					sqs[i][j].innerHTML = IMAGES[9];
					break;
				case "n":
					sqs[i][j].innerHTML = IMAGES[10];
					break;
				case "p":
					sqs[i][j].innerHTML = IMAGES[11];
					break;
				default:
					sqs[i][j].innerHTML = "";
			}
		}
	}
}