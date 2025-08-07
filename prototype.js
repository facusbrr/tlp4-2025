function CuentaBancaria() {
  titular: String
  saldoInicial: Number
};

const cuentaPrototipo = {
  saldoInicial: 0,

  depositar(monto) {
    this.saldoInicial += monto
    return this.saldoInicial;
  },

  extraer(monto) {
    if (monto > 0) {
      return this.saldoInicial - monto
    }
    return console.log('Fondo insuficiente')
  },

  consultarSaldo() {
    return this.saldoInicial;
  }
}

Object.assign(CuentaBancaria.prototype, cuentaPrototipo)

CuentaBancaria.prototype.depositar = cuentaPrototipo.depositar;
miBanco = new CuentaBancaria()

miBanco.depositar(200);
console.log(miBanco.consultarSaldo())


const conca = {
  concatenarPalabra(palabra) {
    const array = []
    array.pop = palabra
  }
}

Object.assign(String.prototype)
