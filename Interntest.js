const Intern = require("../Roles/Intern");

test("Can set school via constructor", () => {
  const testValue = "UWA";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expedct(e.school).toBe(testValue);
});

test('getRole() should return "Intern"', () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "test@test.com", "UWA");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UWA";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expedct(e.getSchool()).toBe(testValue);
});
