test("obj", () => {
  const data = { name: "nico" };
  data.lastname = "molina"; // Manipulación del objeto.
  expect(data).toEqual({ name: "nico", lastname: "molina" }); // toEqual se utiliza para preguntar por objetos.
});
test("null", () => {
  const data = null;
  expect(data).toBeNull(); // toBeNull se usa cuando esperamos que un valor sea null.
  expect(data).toBeDefined(); // toBeDefined se usa cuando esperamos que el valor sea definido.
  expect(data).not.toBeUndefined(); // se usa cuando esperamos que un valor no es undefined.
});
// Testing con Booleanos
test("booleans", () => {
  expect(true).toEqual(true); // toEqual igual se usa para los booleanos.
  expect(false).toEqual(false);
  
  // toBeFalsy se usa para valores que esperamos que son false.
  expect(0).toBeFalsy();
  expect("").toBeFalsy();
  expect(false).toBeFalsy();
});
test("strings", () => {
  /* toMatch es una función que puede verificar si el string esperado tiene alguna coincidencia,
    por ejemplo 'ire' ya que forma parte del string */
  expect("Uriel").toMatch(/rie/); // se le agrega una expresión regular como parámetro a toMatch.
});
test("list / arrays", () => {
  const nums = [1, 2, 3, 4];
  /* toContain sirve para verificar que el array contenga el elemento. */
  expect(nums).toContain(3);
});