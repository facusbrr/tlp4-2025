const concatenarPalabra = {
  concatenarPalabra(palabra) {
    const nuevoString = `${this} ${palabra}`;
    return nuevoString;
  },
};

Object.assign(String.prototype, concatenarPalabra);

String.prototype.concatenarPalabra = concatenarPalabra.concatenarPalabra;

console.log("Hola".concatenarPalabra("Chau"));
