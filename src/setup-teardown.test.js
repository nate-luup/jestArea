// 为多次测试重复设置 beforeEach 和 afterEach
// beforeEach(() => {
//   initializeCityDatabase();
// });

// afterEach(() => {
//   clearCityDatabase();
// });

// test("city database has Vienna", () => {
//   expect(isCity("Vienna")).toBeTruthy();
// });

// test("city database has San Juan", () => {
//   expect(isCity("San Juan")).toBeTruthy();
// });

// 一次性设置 beforeAll 和 afterAll 处理这种情况

// 作用域 describe 块来将测试分组。

// describe 和 test 块的执行顺序

describe("outer", () => {
  console.log("describe outer-a");

  describe("describe inner 1", () => {
    console.log("describe inner 1");
    test("test 1", () => {
      console.log("test for describe inner 1");
      expect(true).toEqual(true);
    });
  });

  console.log("describe outer-b");

  test("test 1", () => {
    console.log("test for describe outer");
    expect(true).toEqual(true);
  });

  describe("describe inner 2", () => {
    console.log("describe inner 2");
    test("test for describe inner 2", () => {
      console.log("test for describe inner 2");
      expect(false).toEqual(false);
    });
  });

  console.log("describe outer-c");
});

// describe outer-a
// describe inner 1
// describe outer-b
// describe inner 2
// describe outer-c
// test for describe inner 1
// test for describe outer
// test for describe inner 2
