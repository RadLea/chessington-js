import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const pawnPos = board.findPiece(this);
        const movesArr = [];

        let modifierOne = 0;
        let modifierTwo = 0;

        if (this.player === Player.WHITE) {
            if (pawnPos.row === 1) {
              modifierTwo = 2;
            }
            modifierOne = 1;
        } else {
            if (pawnPos.row === 6) {
                modifierTwo = -2;
            }
            modifierOne = -1;
        }

        const moveOne = new Square(pawnPos.row + modifierOne, pawnPos.col);
        movesArr.push(moveOne);

        if (modifierTwo !== 0) {
            const moveTwo = new Square(pawnPos.row + modifierTwo, pawnPos.col);
            movesArr.push(moveTwo);
        }

        return movesArr;
    }
}
