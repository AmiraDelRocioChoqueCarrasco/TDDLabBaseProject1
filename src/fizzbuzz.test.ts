
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
});

