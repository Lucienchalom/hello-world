import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";


const cliente1 = new Cliente("Lucien", 123456748974);
const conta1 = new ContaCorrente(1001, cliente1);
const cliente2 = new Cliente("Torcai", 98765432145);
const conta2 = new ContaCorrente(1002, cliente2);
const conta3 = new ContaPoupanca(1001, cliente1, 30)
const conta4 = new ContaSalario(cliente2);

conta4.depositar(500);
conta4.sacar(50);
console.log(conta4);
//console.log(ContaCorrente.numeroDeContasCorrentes);