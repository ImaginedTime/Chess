function generateValidRookMoves(x, y, grid)
{
	let vMoves = [];
	let c = 0;
	let white = grid[x][y] == uCase(grid[x][y]);
	
	for(let i = x + 1; i < 8; i++)
	{
		if(grid[i][y] == 0)
		{
			vMoves[c] = [i, y];
			c++;
			continue;
		}
		if(grid[i][y] == (white? lCase(grid[i][y]): uCase(grid[i][y])))
		{
			vMoves[c] = [i, y];
			c++;
			break;
		}
		break;
	}
	
	for(let i = x - 1; i >= 0; i--)
	{
		if(grid[i][y] == 0)
		{
			vMoves[c] = [i, y];
			c++;
			continue;
		}
		if(grid[i][y] == (white? lCase(grid[i][y]): uCase(grid[i][y])))
		{
			vMoves[c] = [i, y];
			c++;
			break;
		}
		break;
	}
	
	for(let i = y + 1; i < 8; i++)
	{
		if(grid[x][i] == 0)
		{
			vMoves[c] = [x, i];
			c++;
			continue;
		}
		if(grid[x][i] == (white? lCase(grid[x][i]): uCase(grid[x][i])))
		{
			vMoves[c] = [x, i];
			c++;
			break;
		}
		break;
	}
	
	for(let i = y - 1; i >= 0; i--)
	{
		if(grid[x][i] == 0)
		{
			vMoves[c] = [x, i];
			c++;
			continue;
		}
		if(grid[x][i] == (white? lCase(grid[x][i]): uCase(grid[x][i])))
		{
			vMoves[c] = [x, i];
			c++;
			break;
		}
		break;
	}
	return vMoves;
}