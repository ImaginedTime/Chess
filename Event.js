sqs.forEach((item, i) => item.forEach((div, j) => div.addEventListener("click", () => event(i, j))));

function event(i, j)
{
	if(selected)
	{
		moveX = i;
		moveY = j;	
		if(selectX != moveX || selectY != moveY)
		{
			if(notResultsInCheck(selectX, selectY, moveX, moveY))
			{
				move(selectX, selectY, moveX, moveY);
			}
			else
			{
				selectX = null;
				selectY = null;
				moveX = null;
				moveY = null;
			}
			colorBoard();
			selected = false;
		}	
		else
		{
			selectX = null;
			selectY = null;
			moveX = null;
			moveY = null;
		}
		colorBoard();
		selected = false;
	}
	else
	{
		if(grid[i][j] != 0 && turnCheck(i, j))
		{
			selected = true;
			selectX = i;
			selectY = j;
			colorValidMoves(selectX, selectY);
		}
		else
		{
			selected = false;
			selectX = null;
			selectY = null;
		}
	}
}
 
function move(x1, y1, x2, y2)
{
	const validMoves = generateValidMoves(x1, y1, grid);
	for(let i = 0; i < validMoves.length; i++)
	{
		if(validMoves[i][0] == x2 && validMoves[i][1] == y2)
		{
			grid[x2][y2] = grid[x1][y1];
			grid[x1][y1] = 0;
			turn *= -1;
			break;
		}
	}
	placePieces();
}