
import fizzbuzz from "./fizzbuzz.js";

describe("fizzBuzz", () => {
   it("debería generar el mismo numero si no sigue una regla", () => {
     expect(fizzbuzz(2)).toEqual("2");
   });

   it("debería generar el numero otro numero que no sigue una regla", () => {
     expect(fizzbuzz(1)).toEqual("1");
   });
});

