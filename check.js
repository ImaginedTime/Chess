function notResultsInCheck(x1, y1, x2, y2)
{
	for(let i = 0; i < 8; i++)
	{
		for(let j = 0; j < 8;j++)
		{
			grid2[i][j] = grid[i][j];
		}
	}
	grid2[x2][y2] = grid[x1][y1];
	grid2[x1][y1] = 0;
	
	let white = grid2[x2][y2] == uCase(grid2[x2][y2]);
	let kingX , kingY;
	let pos = [];
	let c = 0;
	
	for(let i = 0; i < 8; i++)
	{
		for(let j = 0; j < 8;j++)
		{
			if(white ? grid2[i][j] == "K" : grid2[i][j] == "k")
			{
				kingX = i;
				kingY = j;
			}
				
			if(grid2[i][j]!=0 && (white ? grid2[i][j] == lCase(grid2[i][j]): grid2[i][j] == uCase(grid2[i][j])))
			{
				pos[c] = [i, j];
				c++;
			}
		}
	}
		
	let cnt = 0;
	let vMoves = [];
	for(let i = 0; i < pos.length;i++)
	{
		vMoves[cnt] = generateValidMoves(pos[i][0], pos[i][1], grid2);
		cnt++;
	}
	
	for(let i = 0; i < vMoves.length; i++)
	{
		let i1 = vMoves[i];
		for(let j = 0; j < i1.length;j++)
		{
			let j1 = i1[j];
			if(kingX == j1[0] && kingY == j1[1])
			{
				return false;
			}
		}
	}
	return true;	
}