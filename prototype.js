function CuentaBancaria(titular, saldoInicial) {
  if (typeof titular !== "string") {
    throw new Error("El titular debe ser un nombre");
  }

  if (typeof saldoInicial !== "number") {
    throw new Error("El saldo inicial debe ser número.");
  }

  this.titular = titular;
  this.saldoInicial = saldoInicial;
}

const cuentaPrototipo = {
  depositar(monto) {
    this.saldoInicial += monto;
    return this.saldoInicial;
  },

  extraer(monto) {
    if (monto > 0) {
      return this.saldoInicial - monto;
    }
    return console.log("Fondo insuficiente");
  },

  consultarSaldo() {
    return this.saldoInicial;
  },
};

Object.assign(CuentaBancaria.prototype, cuentaPrototipo);

CuentaBancaria.prototype.depositar = cuentaPrototipo.depositar;

miBanco = new CuentaBancaria("Facundo", 200);
miBanco.depositar(200);
console.log(miBanco.consultarSaldo());
