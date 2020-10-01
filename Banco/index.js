import {Cliente} from "./Cliente.js"

import {Gerente} from "./Funcionario/Gerente.js"
import {Diretor} from "./Funcionario/Diretor.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

const diretor1 = new Diretor("Rodrigo", 10000, 12345678900)
diretor1.cadastrarSenha("123456")
const gerente1 = new Gerente("Ricardo", 5000, 12378945601)

const estaLogado = SistemaAutenticacao.login(diretor, "123456")
console.log(estaLogado)