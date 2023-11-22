"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = require("../io/entrada");
var pet_1 = require("../modelo/pet");
var AtualizarPet = /** @class */ (function () {
    function AtualizarPet(clientes) {
        this.clientes = clientes;
        this.entrada = new entrada_1.default();
    }
    AtualizarPet.prototype.atualizar = function () {
        console.log("\nIn\u00EDcio da atualiza\u00E7\u00E3o de dados do Pet");
        var valor = this.entrada.receberTexto("Informe o CPF do tutor do pet que deseja atualizar: ");
        var indexEncontrado = this.clientes.findIndex(function (item) { return item.getCpf.getValor === valor; });
        var clienteEncontrado = this.clientes[indexEncontrado];
        clienteEncontrado.getPets.forEach(function (pet, index) {
            var nomePet = pet.getNomePet;
            console.log("Nome do Pet ".concat(index + 1, ": ").concat(nomePet));
        });
        var valorPet = this.entrada.receberTexto("Informe o nome do pet que deseja atualizar: ");
        var indexEncontradoPet = clienteEncontrado.getPets.findIndex(function (pet) { return pet.getNomePet === valorPet; });
        var nomePet = this.entrada.receberTexto("Por favor, informe o novo nome do pet: ");
        var raca = this.entrada.receberTexto("Por favor, informe a nova ra\u00E7a do pet: ");
        var genero = this.entrada.receberTexto("Por favor, informe o novo g\u00EAnero: ");
        var pet = new pet_1.default(nomePet, raca, genero);
        var confirmacao = this.entrada.receberTexto("Atualica\u00E7\u00F5es: ".concat(pet.getNomePet, ", ").concat(pet.getGenero, ", ").concat(pet.getRaca, ", Deseja salvar as altera\u00E7\u00F5es? (S/N): "));
        if (confirmacao === "S" || 's') {
            this.clientes[indexEncontrado].getPets.splice(indexEncontradoPet, 1, pet);
            console.log("\nPet atualizado! :)");
        }
        else if (confirmacao === "N" || 'n') {
            console.log("\nAtualiza\u00E7\u00E3o cancelada!. :)");
        }
        else {
            console.log("Resposta inv\u00E1lida.");
        }
    };
    return AtualizarPet;
}());
exports.default = AtualizarPet;
