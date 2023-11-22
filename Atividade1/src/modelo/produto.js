"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Produto = /** @class */ (function () {
    function Produto(nome, valor) {
        this.nome = nome;
        this.valor = valor;
    }
    Object.defineProperty(Produto.prototype, "nomeProduto", {
        get: function () {
            return this.nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "valorProduto", {
        get: function () {
            return this.valor;
        },
        enumerable: false,
        configurable: true
    });
    return Produto;
}());
exports.default = Produto;
