
import fizzbuzz from "./fizzbuzz.js";

describe("fizzBuzz", () => {
   it("debería generar el mismo numero si no sigue una regla", () => {
     expect(fizzbuzz(2)).toBe("2");
   });
});

