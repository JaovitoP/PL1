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
var servico_1 = require("../modelo/servico");
var CadastrarServicos = /** @class */ (function (_super) {
    __extends(CadastrarServicos, _super);
    function CadastrarServicos(servicos) {
        var _this = _super.call(this) || this;
        _this.servicos = servicos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    CadastrarServicos.prototype.cadastrar = function () {
        console.log("\nIn\u00EDcio do cadastro do servi\u00E7o");
        var nomeServico = this.entrada.receberTexto("Por favor, informe o nome do servi\u00E7o: ");
        var valorServico = this.entrada.receberNumero("Por favor, informe o valor do servi\u00E7o: R$ ");
        var servico = new servico_1.default(nomeServico, valorServico);
        var confirmacao = this.entrada.receberTexto("Deseja cadastrar o servi\u00E7o ".concat(nomeServico, ", por R$ ").concat(valorServico, "? (S/N): "));
        if (confirmacao === "S") {
            this.servicos.push(servico);
            console.log("\nServi\u00E7o cadastrado! :)");
        }
        else if (confirmacao === "N") {
            console.log("\nOpera\u00E7\u00E3o abortada. :)");
        }
        else {
            console.log("Resposta inv\u00E1lida.");
        }
    };
    return CadastrarServicos;
}(cadastro_1.default));
exports.default = CadastrarServicos;
