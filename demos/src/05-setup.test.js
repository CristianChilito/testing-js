// Podemos encerrar varios test() dentro de este describe()
/* Esto nos sirve para cosas como mejorar la lectura y el
encapsulamiento */
describe("conjuto", () => {
  test("case 1", () => {
    expect(1 + 1).toBe(2);
  });
  
  test("case 2", () => {
    expect(2 + 2).toBe(4);
  });
  
  // Inlcuso podemos tener conjuntos de test unos dentro de otros
  describe("conjunto dentro de conjunto", () => {
    test("case 3", () => {
      expect(3 + 3).toBe(6);
    });
  
    test("case 4", () => {
      expect(4 + 4).toBe(8);
    });
  });
});