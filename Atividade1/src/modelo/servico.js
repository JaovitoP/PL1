"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Servico = /** @class */ (function () {
    function Servico(nome, valor) {
        this.nome = nome;
        this.valor = valor;
    }
    Object.defineProperty(Servico.prototype, "nomeServico", {
        get: function () {
            return this.nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Servico.prototype, "valorServico", {
        get: function () {
            return this.valor;
        },
        enumerable: false,
        configurable: true
    });
    return Servico;
}());
exports.default = Servico;
