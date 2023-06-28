import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const bishopPos = board.findPiece(this);
        const movesArr = [];

        for (let i = 1; bishopPos.col - i >= 0 && bishopPos.row - i >= 0; i++) {
            movesArr.push(new Square(bishopPos.row - i, bishopPos.col - i));
        }

        for (let i = 1; bishopPos.col + i < 8 && bishopPos.row - i >= 0; i++) {
            movesArr.push(new Square(bishopPos.row - i, bishopPos.col + i));
        }

        for (let i = 1; bishopPos.col - i >= 0 && bishopPos.row + i < 8; i++) {
            movesArr.push(new Square(bishopPos.row + i, bishopPos.col - i));
        }

        for (let i = 1; bishopPos.col + i < 8 && bishopPos.row + i < 8; i++) {
            movesArr.push(new Square(bishopPos.row + i, bishopPos.col + i));
        }

        return movesArr;
    }
}
