class CuentaBancaria {
  titular;
  #saldo;

  constructor(titular, saldoInicial = 0) {
    this.titular = titular;
    this.saldo = saldoInicial;
  }

  get saldo() {
    return this.#saldo;
  }

  set saldo(nuevoSaldo) {
    if (nuevoSaldo < 0) {
      console.log("El saldo no puede ser negativo.");
      return;
    }

    this.#saldo = nuevoSaldo;
  }

  depositar(monto) {
    if (monto > 0) {
      this.saldo += monto;
      console.log(`Nuevo saldo: ${this.saldo}`);
    }
  }

  extraer(monto) {
    if (monto > 0 && monto <= this.saldo) {
      this.saldo -= monto;
      console.log(`Saldo restante: $${this.saldo}`);
    }
    return console.log("Fondos insuficientes o monto inválido.");
  }
}

const probandoCuenta = new CuentaBancaria("Facundo", -2);
console.log(probandoCuenta.saldo);
console.log("-".repeat(5));

const probandoCuenta2 = new CuentaBancaria("Facundo", 300);
console.log(probandoCuenta2.saldo);
probandoCuenta2.depositar(200);
probandoCuenta2.saldo = -50;
console.log(probandoCuenta2.saldo);
