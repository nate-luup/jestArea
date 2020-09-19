// 回调
// 不要这样做！
const fetchData = (callback) => {
  setTimeout(() => {
    callback("peanut butter");
  }, 300);
};
test("the data is peanut butter", () => {
  function callback(data) {
    expect(data).toBe("peanut butter");
  }
  fetchData(callback);
});

test("the data is peanut butter", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("peanut butter");
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});

// Promises
const fetchDataPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("peanut butter");
    }, 300);
  });
};

test("the data is peanut butter", () => {
  return fetchDataPromise().then((data) => {
    expect(data).toBe("peanut butter");
  });
});

// .resolves / .rejects
test("the data is peanut butter", () => {
  return expect(fetchDataPromise()).resolves.toBe("peanut butter");
});

// Async/Await

test("the data is peanut butter", async () => {
  const data = await fetchDataPromise();
  expect(data).toBe("peanut butter");
});

// test("the fetch fails with an error", async () => {
//   try {
//     await fetchDataPromise();
//   } catch (e) {
//     expect(e).toMatch("error");
//   }
// });
