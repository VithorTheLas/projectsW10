export class Conta {

    //MARK: - Construtores
    constructor(saldoInicial, cliente, agencia) {
        
        if (this.constructor == Conta) {
            throw new Error("Você não deve instanciar um objeto do tipo Conta, pois é uma Classe Abstrata.")
        }
        
        this._saldo = saldoInicial
        this._cliente = cliente
        this._agencia = agencia
    }

    //MARK: - Assessores
    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor
        }
    }

    get cliente() {
        return this._cliente
    }

    get saldo() { 
        return this._saldo
    }

    //MARK: - Métodos
    sacar(valorSacado) {
        throw new Error("O método sacar é abstrato. DEVE ser subscrito!")
    }

    _sacar(valorSacado, taxa) {
        const saqueTaxado = valorSacado * taxa
        if(this._saldo >= saqueTaxado) {
            this._saldo -= saqueTaxado
            return saqueTaxado
        }
        
        return 0
    }
 
    depositar(valorDepositado) {
        
        if(valorDepositado <= 0) {
            return
        }
        this._saldo += valorDepositado
    }

    transferir(valorTransferido, contaAlvo) {
        const valorSacado = this.sacar(valorTransferido)
        contaAlvo.depositar(valorSacado)
    }
}