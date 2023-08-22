class ChessPiece {
    constructor(color, type) {
        this.color = color; // 'white' or 'black'
        this.type = type; // 'pawn', 'rook', 'knight', 'bishop', 'queen', 'king'
    }

    getColor() {
        return this.color;
    }

    getType() {
        return this.type;
    }

    move() {
        console.log(`Moving ${this.color} ${this.type}`);
    }
}

// Create a new chess piece
const whitePawn = new ChessPiece('white', 'pawn');

// Access properties and methods
console.log(`Piece color: ${whitePawn.getColor()}`);
console.log(`Piece type: ${whitePawn.getType()}`);
whitePawn.move();
