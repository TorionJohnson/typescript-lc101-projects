import { Payload } from './Payload';

export class Cargo implements Payload {
    massKg: number;
    material: string;

    constructor(weight: number, material: string) {
        this.massKg = weight
        this.material = material
    }
}
