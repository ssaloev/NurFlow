export interface Difficulties {
    difficulties: Array<DifficultyType>;
}

export type DifficultyType = {
    id: number;
    name: string;
    gridSize: GridSize;
};

export type GridSize = 3 | 4 | 6;
