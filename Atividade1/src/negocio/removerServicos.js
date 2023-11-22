"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = require("../io/entrada");
var RemoverServicos = /** @class */ (function () {
    function RemoverServicos(servicos) {
        this.servicos = servicos;
        this.entrada = new entrada_1.default();
    }
    RemoverServicos.prototype.remover = function () {
        console.log("\nIn\u00EDcio da dele\u00E7\u00E3o do servi\u00E7o");
        var valor = this.entrada.receberTexto("Informe o nome do servi\u00E7o que deseja deletar: ");
        var indexEncontrado = this.servicos.findIndex(function (servico) { return servico.nome === valor; });
        var servicoEncontrado = this.servicos[indexEncontrado];
        var confirmacao = this.entrada.receberTexto("Deseja deletar o servi\u00E7o: ".concat(servicoEncontrado === null || servicoEncontrado === void 0 ? void 0 : servicoEncontrado.nome, "? (S/N): "));
        if (confirmacao === "S") {
            this.servicos.splice(indexEncontrado, 1);
            console.log("\nDele\u00E7\u00E3o conclu\u00EDda! :)");
        }
        else if (confirmacao === "N") {
            console.log("\nDele\u00E7a\u00F5 cancelada. :)");
        }
        else {
            console.log("Resposta inv\u00E1lida.");
        }
    };
    return RemoverServicos;
}());
exports.default = RemoverServicos;
