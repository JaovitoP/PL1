"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pet = /** @class */ (function () {
    function Pet(nomePet, raca, genero) {
        this.nomePet = nomePet;
        this.raca = raca;
        this.genero = genero;
    }
    Object.defineProperty(Pet.prototype, "getNomePet", {
        get: function () {
            return this.nomePet;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pet.prototype, "getRaca", {
        get: function () {
            return this.raca;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pet.prototype, "getGenero", {
        get: function () {
            return this.genero;
        },
        enumerable: false,
        configurable: true
    });
    return Pet;
}());
exports.default = Pet;
