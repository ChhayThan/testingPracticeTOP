import { capitalize } from "./main.js";
it("capitalize hello to Hello", () => {
  expect(capitalize("hello")).toMatch("Hello");
});

it("capitalize eric to Eric", () => {
  expect(capitalize("eric")).toMatch("Eric");
});

it("capitalize unEvEn to Uneven", () => {
  expect(capitalize("unEvEn")).toMatch("Uneven");
});
