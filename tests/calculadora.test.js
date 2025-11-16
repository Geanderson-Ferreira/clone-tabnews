const calculadora = require("../model/calculadora.js");

test("2 + 2 deveria ser 4", () => {
  resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("10 + 10 deveria ser 20", () => {
  resultado = calculadora.somar(10, 10);
  expect(resultado).toBe(20);
});
