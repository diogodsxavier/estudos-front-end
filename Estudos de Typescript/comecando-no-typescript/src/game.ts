type Player = 'X' | 'O';

class TicTacToe {
    private board: (Player | null)[][];
    private currentPlayer: Player;
    private winner: Player | null;

    constructor() {
        this.board = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
        this.currentPlayer = 'X';
        this.winner = null;
    }

    public printBoard(): void {
        console.log(this.board.map(row => row.map(cell => cell || ' ').join(' | ')).join('\n---------\n'));
    }

    public play(row: number, col: number): void {
        if (this.winner) {
            console.log(`O jogo já acabou! O vencedor foi ${this.winner}.`);
            return;
        }

        if (this.board[row][col] !== null) {
            console.log('Essa posição já está ocupada. Tente novamente.');
            return;
        }

        this.board[row][col] = this.currentPlayer;

        if (this.checkWinner(row, col)) {
            this.winner = this.currentPlayer;
            console.log(`Parabéns! O jogador ${this.currentPlayer} venceu!`);
        } else if (this.isBoardFull()) {
            console.log('O jogo terminou em empate!');
        } else {
            this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        }
    }

    private checkWinner(row: number, col: number): boolean {
        const player = this.currentPlayer;

        // Verifica a linha
        if (this.board[row].every(cell => cell === player)) return true;

        // Verifica a coluna
        if (this.board.every(row => row[col] === player)) return true;

        // Verifica a diagonal principal
        if (row === col && this.board.every((_, i) => this.board[i][i] === player)) return true;

        // Verifica a diagonal secundária
        if (row + col === 2 && this.board.every((_, i) => this.board[i][2 - i] === player)) return true;

        return false;
    }

    private isBoardFull(): boolean {
        return this.board.every(row => row.every(cell => cell !== null));
    }
}

// Exemplo de uso
const game = new TicTacToe();
game.printBoard();
game.play(0, 0); // Jogador X
game.printBoard();
game.play(1, 1); // Jogador O
game.printBoard();
game.play(0, 1); // Jogador X
game.printBoard();
game.play(2, 2); // Jogador O
game.printBoard();
game.play(0, 2); // Jogador X vence
game.printBoard();