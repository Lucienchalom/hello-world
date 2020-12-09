export class Funcionario{
    constructor(nome,salario, CPF){
        this._nome = nome;
        this._salario = salario;
        this.__CPF = CPF;

        this._bonificacao = 1;
    }
}