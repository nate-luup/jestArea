import DaBaoJian from "./DaBaoJian";

const baojian = new DaBaoJian();

describe("父级分组", () => {
    beforeAll(() => {
      console.log("beforeAll: 吃完饭后，走进了红浪漫洗浴");
    });
  //   beforeEach(() => {
  //     console.log("beforeEach: 给了300元钱后");
  //   });
  describe("大脚相关服务", () => {
    beforeAll(() => {
      console.log("beforeAll: 然后走进了666号房间");
    });
    test.only("大脚走进房间为你足疗", () => {
      baojian.gongzhu(1);
      baojian.anjiao();
      console.log(baojian.fuwu);
      expect(baojian.fuwu).toEqual("大脚走进房间为你足疗");
    });
    test("大脚走进房间为你-泰式保健", () => {
      baojian.gongzhu(1);
      baojian.taishi();
      console.log(baojian.fuwu);
      expect(baojian.fuwu).toEqual("大脚走进房间为你-泰式保健");
    });
    afterEach(() => {
      console.log("大脚你服务的很好，给你30元小费");
    });
  });
  describe("刘英相关服务", () => {
    test("刘英走进房间为你按摩", () => {
      baojian.gongzhu(2);
      baojian.anmo();
      console.log(baojian.fuwu);
      expect(baojian.fuwu).toEqual("刘英走进房间为你按摩");
    });

    test("刘英走进房间为你-宫廷御疗", () => {
      baojian.gongzhu(2);
      baojian.gongting();
      console.log(baojian.fuwu);
      expect(baojian.fuwu).toEqual("刘英走进房间为你-宫廷御疗");
    });
    afterEach(() => {
      console.log("刘英你服务的很好，给你50元小费");
    });
  });

  //   afterEach(() => {
  //     console.log("afterEach: 完成后我心满意足的坐在沙发上");
  //   });
  //   afterAll(() => {
  //     console.log("afterAll: 有钱人的生活就是这么枯燥且乏味");
  //   });
});
