export interface Difficulties {
    difficulties: Array<DifficultyType>;
}

export interface DifficultyType {
    id: number;
    name: string;
    gridSize: GridSize;
    color: Color;
}

export type Color = string;

export type GridSize = 3 | 4 | 6;
