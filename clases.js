class CuentaBancaria {
  #titular;
  #saldoInicial;

  constructor(titular, saldoInicial) {
    this.#titular = titular;
    if (saldoInicial < 0) {
      throw new Error("No se puede crear con saldo negativo");
    }
    this.#saldoInicial = saldoInicial;
  }

  set titular(nombre) {
    this.#titular = nombre;
  }

  get titular() {
    return this.#titular;
  }

  depositar(monto) {
    if (monto > 0) {
      this.#saldoInicial += monto;
      return this.#saldoInicial;
    }
    console.log("El monto a depositar debe ser positivo");
  }

  extraer(monto) {
    if (monto <= this.#saldoInicial) {
      this.#saldoInicial -= monto;
      return this.#saldoInicial;
    }
    console.log("Fondos insuficientes");
  }

  consultarSaldo() {
    console.log(`Saldo actual: ${this.#saldoInicial}`);
    return this.#saldoInicial;
  }
}

const miBanco = new CuentaBancaria("Facu", 1000);
