export interface Levels {
    levels: Array<Level>;
}

export interface Level {
    id: number;
    difficultyId: number;
    name: string;
    gridSize: Coords;
    objectsInFiled: Array<ObjectInField>;
    perfectPath: Array<Coords>;
}

export type Coords = [number, number];

export interface ObjectInField {
    type: ObjectTypes;
    position: Coords;
}

export const OBJECT_TYPES = {
    battery: "battery",
    lamp: "lamp",
    power: "power",
} as const;

export type ObjectTypes = (typeof OBJECT_TYPES)[keyof typeof OBJECT_TYPES];
