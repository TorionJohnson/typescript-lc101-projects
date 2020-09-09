"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, capacity) {
        this.name = name;
        this.totalCapacityKg = capacity;
        this.cargoItems = [];
        this.astronauts = [];
    }
    Rocket.prototype.sumMass = function (items) {
        var sum = 0;
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            sum += item.massKg;
        }
        return sum;
    };
    Rocket.prototype.currentMassKg = function () {
        var sumOfCargoItems = this.sumMass(this.cargoItems);
        var sumOfAstronautsWeight = this.sumMass(this.astronauts);
        return sumOfAstronautsWeight + sumOfCargoItems;
    };
    Rocket.prototype.canAdd = function (item) {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    };
    Rocket.prototype.addCargo = function (cargo) {
        var canAdd = this.canAdd(cargo);
        if (canAdd) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        var canAdd = this.canAdd(astronaut);
        if (canAdd) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
