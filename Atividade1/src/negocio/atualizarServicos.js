"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = require("../io/entrada");
var servico_1 = require("../modelo/servico");
var AtualizarServicos = /** @class */ (function () {
    function AtualizarServicos(servicos) {
        this.servicos = servicos;
        this.entrada = new entrada_1.default();
    }
    AtualizarServicos.prototype.atualizar = function () {
        console.log("\nInício da atualização de dados do Serviço");
        var input = this.entrada.receberTexto("Informe o nome do serviço que deseja alterar os dados:");
        var servicoEncontrado = this.servicos.find(function (servico) { return servico.nome === input; });
        if (servicoEncontrado) {
            console.log("\nServi\u00E7o Encontrado: ".concat(servicoEncontrado.nome));
            console.log("\nInsira os novos valores: ");
            var nome = this.entrada.receberTexto("Por favor informe o nome do servi\u00E7o: ");
            var valor = this.entrada.receberNumero("Por favor informe o pre\u00E7o do servi\u00E7o (R$): ");
            var servico = new servico_1.default(nome, valor);
            var index = this.servicos.indexOf(servicoEncontrado);
            this.servicos.splice(index, 1, servico);
            console.log("\nAtualiza\u00E7\u00E3o conclu\u00EDda! :)\n");
        }
        else {
            console.log("\nServi\u00E7o n\u00E3o encontrado!\n");
        }
    };
    return AtualizarServicos;
}());
exports.default = AtualizarServicos;
