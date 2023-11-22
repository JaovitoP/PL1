"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = require("../io/entrada");
var RemoverCliente = /** @class */ (function () {
    function RemoverCliente(clientes) {
        this.clientes = clientes;
        this.entrada = new entrada_1.default();
    }
    RemoverCliente.prototype.remover = function () {
        console.log("\nIn\u00EDcio da remo\u00E7\u00E3o do cliente");
        var valor = this.entrada.receberTexto("Informe o CPF do cliente que deseja remover: ");
        var indexEncontrado = this.clientes.findIndex(function (item) { return item.getCpf.getValor === valor; });
        var clienteEncontrado = this.clientes[indexEncontrado];
        var confirmacao = this.entrada.receberTexto("Deseja remover o cliente: ".concat(clienteEncontrado === null || clienteEncontrado === void 0 ? void 0 : clienteEncontrado.nome, "? (S/N): "));
        if (confirmacao === "S") {
            this.clientes.splice(indexEncontrado, 1);
            console.log("\nRemo\u00E7\u00E3o conclu\u00EDda! :)");
        }
        else if (confirmacao === "N") {
            console.log("\nOpera\u00E7\u00E3o abortada. :)");
        }
        else {
            console.log("Resposta inv\u00E1lida.");
        }
    };
    return RemoverCliente;
}());
exports.default = RemoverCliente;
