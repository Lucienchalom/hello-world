import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const gerente = new Gerente("Rodrigo", 5000, 12345678985);
const diretor = new Diretor("Paola", 10000, 12345678236);
const cliente = new Cliente("Mauricio", 159785348664, "123456")
diretor.cadastrarSenha("159753");
const estaLogado = SistemaAutenticacao.login(diretor, "159753");
const clienteLogado = SistemaAutenticacao.login(cliente, "123456");
console.log(estaLogado, clienteLogado);
