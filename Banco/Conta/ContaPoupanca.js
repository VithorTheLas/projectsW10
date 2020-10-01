import {Conta} from "./Conta.js"

export class ContaPoupanca extends Conta {

    //MARK: - Construtores
    constructor(saldoInicial, cliente, agencia) {
        super(saldoInicial, cliente, agencia)
    }

    //MARK: - Métodos
    sacar(valorSacado) {
        const taxa = 1.02
        return this._sacar(valorSacado, taxa)
    }
}