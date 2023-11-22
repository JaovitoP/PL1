"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = require("../io/entrada");
var RemoverProduto = /** @class */ (function () {
    function RemoverProduto(produtos) {
        this.produtos = produtos;
        this.entrada = new entrada_1.default();
    }
    RemoverProduto.prototype.remover = function () {
        console.log("\nIn\u00EDcio da dele\u00E7\u00E3o do produto");
        var valor = this.entrada.receberTexto("Informe o nome do produto que deseja deletar: ");
        var indexEncontrado = this.produtos.findIndex(function (produto) { return produto.nome === valor; });
        var produtoEncontrado = this.produtos[indexEncontrado];
        var confirmacao = this.entrada.receberTexto("Deseja deletar o produto: ".concat(produtoEncontrado === null || produtoEncontrado === void 0 ? void 0 : produtoEncontrado.nome, "? (S/N): "));
        if (confirmacao === "S" || 's') {
            this.produtos.splice(indexEncontrado, 1);
            console.log("\nDele\u00E7\u00E3o conclu\u00EDda! :)");
        }
        else if (confirmacao === "N" || 'n') {
            console.log("\nDele\u00E7\u00E3o cancelada. :)");
        }
        else {
            console.log("Resposta inv\u00E1lida.");
        }
    };
    return RemoverProduto;
}());
exports.default = RemoverProduto;
