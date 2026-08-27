
import fizzbuzz from "./fizzbuzz.js";

describe("fizzBuzz", () => {
   it("debería generar el mismo numero si no sigue una regla", () => {
     expect(fizzbuzz(2)).toEqual("2");
   });

   it("debería generar el numero otro numero que no sigue una regla", () => {
     expect(fizzbuzz(1)).toEqual("1");
   });

   it("debería generar la palabra fizz si es solo múltiplo de 3", () => {
     expect(fizzbuzz(3)).toEqual("Fizz");
   });

   it("debería generar la palabra fizz si es solo múltiplo de 3", () => {
     expect(fizzbuzz(6)).toEqual("Fizz");
   });

   it("debería generar la palabra buzz si es solo múltiplo de 5", () => {
     expect(fizzbuzz(5)).toEqual("Buzz");
   });

   it("debería generar la palabra buzz si es solo múltiplo de 5", () => {
     expect(fizzbuzz(25)).toEqual("Buzz");
   });

   it("debería generar la palabra fizzbuzz si es múltiplo de ambos", () => {
     expect(fizzbuzz(15)).toEqual("15");
   });
});

