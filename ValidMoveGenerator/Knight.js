function generateValidKnightMoves(x, y, grid)
{
	let vMoves = [];
	let c = 0;
	let white = grid[x][y] == uCase(grid[x][y]);
	
	if(x < 6 && y < 7 && (grid[x + 2][y + 1] == 0 || grid[x+2][y+1] == (white? lCase(grid[x+2][y+1]): uCase(grid[x+2][y+1]))))
	{
		vMoves[c] = [x+2, y+1];
		c++;
	}
	
	if(x < 6 && y > 0 && (grid[x + 2][y - 1] == 0 || grid[x+2][y-1] == (white? lCase(grid[x+2][y-1]): uCase(grid[x+2][y-1]))))
	{
		vMoves[c] = [x+2, y-1];
		c++;
	}
	
	if(x > 1 && y < 7 && (grid[x - 2][y + 1] == 0 || grid[x-2][y+1] == (white? lCase(grid[x-2][y+1]): uCase(grid[x-2][y+1]))))
	{
		vMoves[c] = [x-2, y+1];
		c++;
	}
	
	if(x > 1 && y > 0 && (grid[x - 2][y - 1] == 0 || grid[x-2][y-1] == (white? lCase(grid[x-2][y-1]): uCase(grid[x-2][y-1]))))
	{
		vMoves[c] = [x-2, y-1];
		c++;
	}
	
	if(x < 7 && y < 6 && (grid[x + 1][y + 2] == 0 || grid[x+1][y+2] == (white? lCase(grid[x+1][y+2]): uCase(grid[x+1][y+2]))))
	{
		vMoves[c] = [x+1, y+2];
		c++;
	}
	
	if(x > 0 && y < 6 && (grid[x - 1][y + 2] == 0 || grid[x-1][y+2] == (white? lCase(grid[x-1][y+2]): uCase(grid[x-1][y+2]))))
	{
		vMoves[c] = [x-1, y+2];
		c++;
	}
	
	if(x < 7 && y > 1 && (grid[x + 1][y - 2] == 0 || grid[x+1][y-2] == (white? lCase(grid[x+1][y-2]): uCase(grid[x+1][y-2]))))
	{
		vMoves[c] = [x+1, y-2];
		c++;
	}
	
	if(x > 0 && y > 1 && (grid[x - 1][y - 2] == 0 || grid[x-1][y-2] == (white? lCase(grid[x-1][y-2]): uCase(grid[x-1][y-2]))))
	{
		vMoves[c] = [x-1, y-2];
		c++;
	}
	
	return vMoves;
}