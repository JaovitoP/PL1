"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = require("../io/entrada");
var produto_1 = require("../modelo/produto");
var AtualizarProduto = /** @class */ (function () {
    function AtualizarProduto(produtos) {
        this.produtos = produtos;
        this.entrada = new entrada_1.default();
    }
    AtualizarProduto.prototype.atualizar = function () {
        console.log("\nIn\u00EDcio da atualiza\u00E7\u00E3o cadastral do produto");
        var input = this.entrada.receberTexto("Informe o nome do produto que deseja alterar os dados: ");
        var produtoEncontrado = this.produtos.find(function (produto) { return produto.nome === input; });
        if (produtoEncontrado) {
            console.log("\nProduto Encontrado: ".concat(produtoEncontrado.nome));
            console.log("\nInsira os novos valores: ");
            var nome = this.entrada.receberTexto("Por favor informe o nome do produto: ");
            var valor = this.entrada.receberNumero("Por favor informe o pre\u00E7o do produto (R$): ");
            var produto = new produto_1.default(nome, valor);
            var index = this.produtos.indexOf(produtoEncontrado);
            this.produtos.splice(index, 1, produto);
            console.log("\nAtualiza\u00E7\u00E3o conclu\u00EDda! :)\n");
        }
        else {
            console.log("\nProduto n\u00E3o encontrado!\n");
        }
    };
    return AtualizarProduto;
}());
exports.default = AtualizarProduto;
