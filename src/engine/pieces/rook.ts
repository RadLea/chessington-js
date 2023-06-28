import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const rookPos = board.findPiece(this);
        const movesArr = [];
        for (let i = rookPos.row + 1; i <= 7; i++) {
            const newPos = new Square(i, rookPos.col);
            movesArr.push(newPos);
        }
        for (let i = 0; i < rookPos.row; i++) {
            const newPos = new Square(i, rookPos.col);
            movesArr.push(newPos);
        }
        for (let i = 0; i < rookPos.col; i++) {
            const newPos = new Square(rookPos.row, i);
            movesArr.push(newPos);
        }
        for (let i = rookPos.col + 1; i <= 7; i++) {
            const newPos = new Square(rookPos.row, i);
            movesArr.push(newPos);
        }
        return movesArr;
    }
}
