import { Funcionario } from "./Funcionario.js";

export class Gerente extends Funcionario {
    constructor(nome, salario, CPF) {
        super(nome, salario, CPF);
        this._bonificacao = 1.1;
    }
}