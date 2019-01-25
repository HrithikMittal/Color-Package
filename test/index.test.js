// import Color from "../src";

test("in and out", () => {
  expect(new Color("#2cf366").toHex()).toEqual("#2CF366");
});

test("is light when not light", () => {
  expect(new Color("#666666").isLight()).toEqual(false);
});

test("is light when not light", () => {
  expect(new Color("#999999").isLight()).toEqual(true);
});

test("is dark when dark", () => {
  expect(new Color("#666666").isDark()).toEqual(true);
});

test("is dark when not dark", () => {
  expect(new Color("#999999").isDark()).toEqual(false);
});

test("is red dark", () => {
  expect(new Color("#C0392B").isDark()).toEqual(true);
  expect(new Color("#C0392B").isLight()).toEqual(false);
});

test("is lighter red dark", () => {
  expect(new Color("#D14233").isDark()).toEqual(true);
  expect(new Color("#D14233").isLight()).toEqual(false);
});

test("lighten black", () => {
  expect(new Color("#000").lighten(33).toHex()).toEqual("#545454");
});

test("lighten white", () => {
  expect(new Color("#FFF").lighten(33).toHex()).toEqual("#FFFFFF");
});

test("darken black", () => {
  expect(new Color("#000").darken(33).toHex()).toEqual("#000000");
});

test("darken white", () => {
  expect(new Color("#FFF").darken(33).toHex()).toEqual("#AAAAAA");
});

test("lighten midnight blue", () => {
  expect(new Color("#2C3E50").lighten(5).toHex()).toEqual("#354A60");
});

test("increase hue", () => {
  expect(new Color("#2C3E50").increaseHue(10).toHex()).toEqual("#2F2C50");
});

test("decrease hue", () => {
  expect(new Color("#2C3E50").decreaseHue(10).toHex()).toEqual("#2C504C");
});

test("increase saturation", () => {
  expect(new Color("#2C3E50").increaseSaturation(10).toHex()).toEqual("#253D56");
});

test("decrease saturation", () => {
  expect(new Color("#2C3E50").decreaseSaturation(10).toHex()).toEqual("#323D49");
});
