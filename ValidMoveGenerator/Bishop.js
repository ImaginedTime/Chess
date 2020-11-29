function generateValidBishopMoves(x, y, grid)
{
	let vMoves = [];
	let c = 0;
	let white = grid[x][y] == uCase(grid[x][y]);
	
	for(let i = 1; x+i<8 && y+i<8; i++)
	{
		if(grid[x + i][y + i] == 0)
		{
			vMoves[c] = [x+i, y+i];
			c++;
			continue;
		}
		if(grid[x+i][y+i] == (white? lCase(grid[x+i][y+i]): uCase(grid[x+i][y+i])))
		{
			vMoves[c] = [x+i, y+i];
			c++;
			break;
		}
		break;
	}
	for(let i = 1; x-i>=0 && y-i>=0; i++)
	{
		if(grid[x - i][y - i] == 0)
		{
			vMoves[c] = [x-i, y-i];
			c++;
			continue;
		}
		if(grid[x-i][y-i] == (white? lCase(grid[x-i][y-i]): uCase(grid[x-i][y-i])))
		{
			vMoves[c] = [x-i, y-i];
			c++;
			break;
		}
		break;
	}
	for(let i = 1; x+i<8 && y-i>=0; i++)
	{
		if(grid[x + i][y - i] == 0)
		{
			vMoves[c] = [x+i, y-i];
			c++;
			continue;
		}
		if(grid[x+i][y-i] == (white? lCase(grid[x+i][y-i]): uCase(grid[x+i][y-i])))
		{
			vMoves[c] = [x+i, y-i];
			c++;
			break;
		}
		break;
	}
	for(let i = 1; x-i>=0 && y+i<8; i++)
	{
		if(grid[x - i][y + i] == 0)
		{
			vMoves[c] = [x-i, y+i];
			c++;
			continue;
		}
		if(grid[x-i][y+i] == (white? lCase(grid[x-i][y+i]): uCase(grid[x-i][y+i])))
		{
			vMoves[c] = [x-i, y+i];
			c++;
			break;
		}
		break;
	}
	return vMoves;
}