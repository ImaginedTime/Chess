function generateValidMoves(x, y, arr)
{
	switch(uCase(arr[x][y]))
	{
		case "K":
			validMoves = generateValidKingMoves(x, y, arr);
		break;
		case "Q":
			validMoves = generateValidQueenMoves(x, y, arr);
		break;
		case "R":
			validMoves = generateValidRookMoves(x, y, arr);
		break;
		case "B":
			validMoves = generateValidBishopMoves(x, y, arr);
		break;
		case "N":
			validMoves = generateValidKnightMoves(x, y, arr);
		break;
		case "P":
			validMoves = generateValidPawnMoves(x, y, arr);
	}
	return validMoves;
}