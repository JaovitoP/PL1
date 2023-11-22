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
var cadastro_1 = require("../negocio/cadastro");
var produto_1 = require("../modelo/produto");
var CadastrarProdutos = /** @class */ (function (_super) {
    __extends(CadastrarProdutos, _super);
    function CadastrarProdutos(produtos) {
        var _this = _super.call(this) || this;
        _this.produtos = produtos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    CadastrarProdutos.prototype.cadastrar = function () {
        console.log("\nIn\u00EDcio do cadastro do produto");
        var nomeProduto = this.entrada.receberTexto("Por favor, informe o nome do produto: ");
        var valorProduto = this.entrada.receberNumero("Por favor, informe o valor do produto: R$ ");
        var produto = new produto_1.default(nomeProduto, valorProduto);
        var confirmacao = this.entrada.receberTexto("Deseja cadastrar o produto ".concat(nomeProduto, ", por R$ ").concat(valorProduto, "? (S/N): "));
        if (confirmacao === "S" || 's') {
            this.produtos.push(produto);
            console.log("\nProduto cadastrado! :)");
        }
        else if (confirmacao === "N") {
            console.log("\nOpera\u00E7\u00E3o abortada. :)");
        }
        else {
            console.log("Resposta inv\u00E1lida.");
        }
    };
    return CadastrarProdutos;
}(cadastro_1.default));
exports.default = CadastrarProdutos;
