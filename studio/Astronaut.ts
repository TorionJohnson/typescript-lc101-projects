import { Payload } from './Payload';

export class Astronaut implements Payload {
    massKg: number;
    name: string;

    constructor(weight: number, firstName: string) {
        this.massKg = weight
        this.name = firstName
    }
}