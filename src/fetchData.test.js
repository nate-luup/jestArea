import {
  fetchData,
  fetchTwoData,
  fetchThreeData,
  fetchFourData,
} from "./fetchData";
test("fetchData 异步方法测试: callback", (done) => {
  fetchData((data) => {
    expect(data).toEqual({
      success: true,
    });
    done();
  });
});
test("fetchTwoData 异步方法测试: promise", () => {
  return fetchTwoData().then((response) => {
    expect(response.data).toEqual({
      success: true,
    });
  });
});
test("fetchThreeData 异步方法测试: 404", () => {
  expect.assertions(1); // 断言，必须执行一次expect
  return fetchThreeData().catch((e) => {
    // Error: Request failed with status code 404
    // console.log(e.toString());
    expect(e.toString().indexOf("404") > -1).toBe(true);
  });
});

test("fetchFourData 异步方法测试: async/await", async () => {
  const response = await fetchFourData();
  expect(response.data).toEqual({ success: true });
});
