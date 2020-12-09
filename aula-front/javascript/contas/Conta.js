import { Cliente } from "./Cliente.js";
// classe abstrata
export class Conta {
    static numeroDeContasTotais = 0;

    constructor(agencia, cliente, SaldoInicial) {
        if (this.constructor == Conta) {
            throw new Error("você não deveria instanciar um objeto do tipo Conta diretamente, que é uma classe abstrata")
        }

        this.agencia = agencia;
        this._cliente = cliente;
        this._saldo = SaldoInicial;
        // #saldo =0 private fields
        Conta.numeroDeContasTotais += 1;
    }

    set cliente(novoCliente) {
        if (novoCliente instanceof Cliente) {
            this._cliente = novoCliente;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() { return this._saldo }


    sacar(valor) {
        /* let taxa = 1;
         return this._sacar(valor, taxa);*/
        throw new Error ("O metodo Sacar é abstrato")
    }
    _sacar(valor, taxa) {
        const valorDescontado = taxa * valor;
        if (this._saldo > valorDescontado) {
            this._saldo -= valorDescontado;
            return valorDescontado;
        }
        return 0;
    }
    depositar(valor) {
        if (valor <= 0) return;
        this._saldo += valor;
    }

    transferir(valor, agencia) {
        const valorSacado = this.sacar(valor);
        agencia.depositar(valorSacado);
    }
}