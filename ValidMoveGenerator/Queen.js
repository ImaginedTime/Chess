
function generateValidQueenMoves(x, y, grid)
{
    let vMoves= [];
    const [r, b] = [generateValidRookMoves(x, y, grid), generateValidBishopMoves(x, y, grid)];

    for(let i = 0; i < r.length; i++)
        vMoves[i] = r[i];
    for(let i = r.length; i < r.length + b.length; i++)
        vMoves[i] = b[i - r.length];

	return vMoves;
}