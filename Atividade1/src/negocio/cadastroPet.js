"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = require("../io/entrada");
var cadastro_1 = require("./cadastro");
var pet_1 = require("../modelo/pet");
var CadastroPet = /** @class */ (function (_super) {
    __extends(CadastroPet, _super);
    function CadastroPet(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    CadastroPet.prototype.cadastrar = function () {
        console.log("\nIn\u00EDcio do cadastro do Pet");
        var nomePet = this.entrada.receberTexto("Por favor, informe o nome do pet: ");
        var raca = this.entrada.receberTexto("Por favor, informe a ra\u00E7a do pet: ");
        var genero = this.entrada.receberTexto("Por favor, informe o g\u00EAnero: ");
        var pet = new pet_1.default(nomePet, raca, genero);
        var valor = this.entrada.receberTexto("Informe o CPF do cliente dono do Pet ".concat(pet.getNomePet, ": "));
        var indexEncontrado = this.clientes.findIndex(function (item) { return item.getCpf.getValor === valor; });
        var clienteEncontrado = this.clientes[indexEncontrado];
        var confirmacao = this.entrada.receberTexto("Deseja cadastrar o Pet ".concat(pet.getNomePet, ", no Tutor ").concat(clienteEncontrado === null || clienteEncontrado === void 0 ? void 0 : clienteEncontrado.nome, "? (S/N): "));
        if (confirmacao === "S" || "s") {
            this.clientes[indexEncontrado].getPets.push(pet);
            console.log("\nAnimal cadastrado! :)");
        }
        else if (confirmacao === "N") {
            console.log("\nOpera\u00E7\u00E3o abortada. :)");
        }
        else {
            console.log("Resposta inv\u00E1lida.");
        }
    };
    return CadastroPet;
}(cadastro_1.default));
exports.default = CadastroPet;
