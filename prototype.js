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
    if (this.saldoInicial >= monto) {
      return (this.saldoInicial -= monto);
    }
    return console.log("Fondo insuficientes para la extraccion");
  },

  consultarSaldo() {
    console.log(`Saldo: ${this.saldoInicial}`);
  },
};

Object.assign(CuentaBancaria.prototype, cuentaPrototipo);

CuentaBancaria.prototype.depositar = cuentaPrototipo.depositar;
CuentaBancaria.prototype.extraer = cuentaPrototipo.extraer;
CuentaBancaria.prototype.consultarSaldo = cuentaPrototipo.consultarSaldo;

const miBanco = new CuentaBancaria("Facundo", 200);
miBanco.depositar(200);
miBanco.extraer(500);
miBanco.consultarSaldo();
