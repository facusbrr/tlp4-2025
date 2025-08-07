class CuentaBancaria {
  titular
  #saldoInicial

  constructor(titular, saldoInicial) {
    this.titular = titular;
    if (saldoInicial < 0) {
      throw new Error('No se puede crear con saldo negativo')
    }
    this.#saldoInicial = saldoInicial;
  }

  set titular(nombre) {
    return this.titular = titular;
  }

  set saldo(monto) {
    if (monto > 0) {
      return this.#saldoInicial += monto
    }

    return console.log('Saldo Insuficiente')
  }


  get consultarSaldo() {
    return this.#saldoInicial;
  }

}

const miBanco = new CuentaBancaria('Facu', -200)

