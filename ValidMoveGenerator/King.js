
function generateValidKingMoves(x, y, grid)
{
	let vMoves = [];
	let vMoves2 = [];
	let white = grid[x][y] == uCase(grid[x][y]);
	
	let c = 0;
	for(let i = -1; i <= 1; i++)
	{
		for(let j = -1; j <= 1;j++)
		{
			if(i == 0 && j == 0)
				continue;
			vMoves[c] = [x + i, y + j];
			c++;
		}
	}
	
	let cnt = 0;
	for(let i = 0; i < vMoves.length; i++)
	{
		if(vMoves[i][1] >= 0 && vMoves[i][0] >= 0 && vMoves[i][1] < 8 && vMoves[i][0] < 8)
		{
			let base = grid[vMoves[i][0]][vMoves[i][1]];
			let sameColor = base== 0? false: (base == (white? uCase(base): lCase(base)));
			
			if(!sameColor)
			{
				vMoves2[cnt] = [vMoves[i][0],vMoves[i][1]];
				cnt++;
			}
		}
	}
	
	return vMoves2;
}
