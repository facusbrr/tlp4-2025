const original = String.prototype.toUpperCase;

String.prototype.toUpperCase = function () {
  return "ESTO ESTÁ PROHIBIDO";
};

console.log("Hola como estas".toUpperCase());

String.prototype.toUpperCase = original;

console.log("Hola".toUpperCase());
