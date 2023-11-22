"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = require("../io/entrada");
var RemoverPet = /** @class */ (function () {
    function RemoverPet(clientes) {
        this.clientes = clientes;
        this.entrada = new entrada_1.default();
    }
    RemoverPet.prototype.remover = function () {
        console.log("\nIn\u00EDcio da dele\u00E7\u00E3o do Pet");
        var valor = this.entrada.receberTexto("Informe o CPF do tutor do pet que deseja remover: ");
        var indexEncontrado = this.clientes.findIndex(function (item) { return item.getCpf.getValor === valor; });
        var clienteEncontrado = this.clientes[indexEncontrado];
        clienteEncontrado.getPets.forEach(function (pet, index) {
            var nomePet = pet.getNomePet;
            console.log("Nome do Pet ".concat(index + 1, ": ").concat(nomePet));
        });
        var valorPet = this.entrada.receberTexto("Informe o nome do pet que deseja remover: ");
        var indexEncontradoPet = clienteEncontrado.getPets.findIndex(function (pet) { return pet.getNomePet === valorPet; });
        var confirmacao = this.entrada.receberTexto("Deseja deletar o pet ".concat(valorPet, "? (S/N): "));
        if (confirmacao === "S" || 's') {
            this.clientes[indexEncontrado].getPets.splice(indexEncontradoPet, 1);
            console.log("\nPet deletado! :)");
        }
        else if (confirmacao === "N" || 'n') {
            console.log("\nDele\u00E7\u00E3o cancelada. :)");
        }
        else {
            console.log("Resposta inv\u00E1lida.");
        }
    };
    return RemoverPet;
}());
exports.default = RemoverPet;
