function generateValidPawnMoves(x, y, grid)
{
	let vMoves = [];
	let vMoves2 = [];
	let c = 0;
	
	if(grid[x][y] == "p")
	{
		if(x == 1 && grid[x + 2][y] == 0)
		{
			vMoves[c] = [x + 2, y];
			c++;
		}
		if(grid[x + 1][y] == 0)
		{
			vMoves[c] = [x + 1, y];
			c++;
		}
		
		if(y > 0 && x < 7 && grid[x + 1][y - 1] != 0 && grid[x+1][y-1] == uCase(grid[x+1][y-1]))
		{
			vMoves[c] = [x + 1, y - 1];
			c++;
		}
		if(y < 7 && x < 7 && grid[x + 1][y + 1] != 0 && grid[x+1][y+1] == uCase(grid[x+1][y+1]))
		{
			vMoves[c] = [x + 1, y + 1];
			c++;
        }
	}
	else if(grid[x][y] == "P")
	{
		if(x == 6 && grid[x - 2][y] == 0)
		{
			vMoves[c] = [x - 2, y];
			c++;
		}
		if(grid[x - 1][y] == 0)
		{
			vMoves[c] = [x - 1, y];
			c++;
		}
		
		if(x > 0 && y > 0 && grid[x - 1][y - 1] != 0 && grid[x-1][y-1] == lCase(grid[x-1][y-1]))
		{
			vMoves[c] = [x - 1, y - 1];
			c++;
		}
		if(y < 7 && x > 0 && grid[x - 1][y + 1] != 0 && grid[x-1][y+1] == lCase(grid[x-1][y+1]))
		{
			vMoves[c] = [x - 1, y + 1];
			c++;
        }
	}
	
	let cnt = 0;
	for(let i = 0; i < vMoves.length; i++)
	{
		if(vMoves[i][1] >= 0 && vMoves[i][0] >= 0 && vMoves[i][1] < 8 && vMoves[i][0] < 8)
		{
			vMoves2[cnt] = vMoves[i];
			cnt++;
		}
	}
	return vMoves2;
}