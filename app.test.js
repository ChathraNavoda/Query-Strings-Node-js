const { params, query } = require("./app");

test("get query string as parameter", () => {
  expect(console.log(params)).toBe(query);
});
