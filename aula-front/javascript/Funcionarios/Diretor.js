import { Funcionario } from "./Funcionario.js";

export class Diretor extends Funcionario{
    constructor(nome, salario, CPF) {
        super(nome, salario, CPF);
        this._bonificação = 2;
    }
}