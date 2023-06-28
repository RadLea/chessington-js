import Piece from './piece';
import Player from '../player';
import Board from '../board';

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const pawnPos = board.findPiece(this);
        const movesArr = [];
        if (this.player === Player.WHITE) {
            pawnPos.row++;
        } else {
            pawnPos.row--;
        }
        if (board.getPiece(pawnPos) === undefined) {
            movesArr.push(pawnPos);
        }
        return movesArr;
    }
}
