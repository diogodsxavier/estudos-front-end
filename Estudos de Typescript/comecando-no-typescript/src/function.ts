interface MathFunc {
    (x: number, y: number): number
}

const sum: MathFunc = (x: number, y: number): number => x + y;

sum(1, 2); // 3
