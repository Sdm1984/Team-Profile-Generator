const Engineer = require('../lib/engineer');

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Kelendria Trené Rowland", 1, "test@test.com", testValue);
  expect(e.github).toBe("GitHubUser");
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Kelendria Trené Rowland", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Kelendria Trené Rowland", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});