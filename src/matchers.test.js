// ----相等性判断-----
test("toBe", () => {
  expect(2 + 2).toBe(4);
});

test("toEqual", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});
test("null", () => {
  const n = null;
  expect(n).toBeNull();
});

test("undefined", () => {
  const n = undefined;
  expect(n).toBeUndefined();
});
test("defined", () => {
  const n = null;
  expect(n).toBeDefined();
});
test("toBeTruthy", () => {
  const n = 1;
  expect(n).toBeTruthy();
});
test("toBeFalsy", () => {
  const n = 0;
  expect(n).toBeFalsy();
});

test("zero", () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

// ----数字----

test("toBeGreaterThan", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
});

test("toBeLessThan", () => {
  const value = 2 + 2;
  expect(value).toBeLessThan(5);
});
test("toBeLessThanOrEqual", () => {
  const value = 2 + 2;
  expect(value).toBeLessThanOrEqual(4.5);
});
test("toBeGreaterThanOrEqual", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThanOrEqual(4);
});

test("toBeCloseTo", () => {
  // 两个浮点数字相加
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);  // 这句会报错，因为浮点数有舍入误差
  expect(value).toBeCloseTo(0.3); // 这句可以运行
});

// ----字符串----
test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect("Christoph").toMatch(/stop/);
});

// ----数组----
const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "beer",
];

test("toContain", () => {
  expect(shoppingList).toContain("beer");
  expect(new Set(shoppingList)).toContain("beer");
});

// ----Exception----
function compileAndroidCode() {
  throw new Error("you are using the wrong JDK");
}

test("toThrow", () => {
  expect(compileAndroidCode).toThrow();
  expect(compileAndroidCode).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(compileAndroidCode).toThrow("you are using the wrong JDK");
  expect(compileAndroidCode).toThrow(/JDK/);
});

// ----not----
test("not", () => {
  expect(2 + 2).not.toBe(5);
});
