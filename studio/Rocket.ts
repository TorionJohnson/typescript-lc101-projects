import { Payload } from './Payload';
import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[];
    astronauts: Astronaut[];

    constructor(name: string, capacity: number) {
        this.name = name;
        this.totalCapacityKg = capacity;
        this.cargoItems = [];
        this.astronauts = [];
    }

    sumMass(items: Payload[]): number {
        let sum: number = 0;
        for(let item of items) {
            sum += item.massKg
        }

        return sum;
    }

    currentMassKg(): number {
        let sumOfCargoItems: number = this.sumMass(this.cargoItems);
        let sumOfAstronautsWeight: number = this.sumMass(this.astronauts);

        return sumOfAstronautsWeight + sumOfCargoItems;
    }

    canAdd(item: Payload): boolean {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg
    }

    addCargo(cargo: Cargo): boolean {
        let canAdd: boolean = this.canAdd(cargo);

        if(canAdd){
            this.cargoItems.push(cargo);
            return true;
        }else{
            return false
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        let canAdd: boolean = this.canAdd(astronaut);

        if(canAdd) {
            this.astronauts.push(astronaut);
            return true;
        }else{
            return false
        }

    }
}