# 概念

- 单元测试：unit testing，软件中的最小可测试单元进行检查和验证（模块）
- 集成测试：组装测试或联合测试，在单元测试的基础上将所有模块按照设计要求组装成一个子系统进行测试

# 快速开始

1. 初始化项目

```
npm init -y
```

2. 安装 jest

```
npm i jest -D
```

3. 修改`package.json`中 test 脚本

```js
"scripts": {
  "test": "jest",
  // "test": "jest --watchAll" 监测文件修改重新执行测试用例
}
```

4. 编写`sum.js`

```js
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```

5. 编写`sum.test.js`

```js
const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
```

6. 运行测试脚本

```
npm run test
```

# 配置

1. 初始化配置

```
npx jest --init
```

2. 生成代码覆盖率报告.

```
npx jest --coverage
```

3. 查看覆盖率报告
   `./coverage/lcov-report/index.html`
4. 修改覆盖率文件生成目录

- `jest.config.js`

```js
  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",
```

5. 在`package.json`中添加覆盖率脚本

```json
 "scripts": {
    "test": "jest",
    "coverage": "jest --coverage"
  },
```

## 配置项说明

# Jest 中的匹配器

## 相等性

1. toBe: 绝对相等

```js
test("toBe", () => {
  expect(2 + 2).toBe(4);
});
```

2. toEqual: 判断引用值是否相等

```js
test("toEqual", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});
```

3. toBeNull: null 值匹配器

```js
test("null", () => {
  const n = null;
  expect(n).toBeNull();
});
```

4. toBeUndefined: undefined 匹配器

```js
test("undefined", () => {
  const n = undefined;
  expect(n).toBeUndefined();
});
```

5. toBeDefined: defined 匹配器

```js
test("defined", () => {
  const n = null;
  expect(n).toBeDefined();
});
```

6. toBeTruthy: 真值匹配器

```js
test("toBeTruthy", () => {
  const n = 1;
  expect(n).toBeTruthy();
});
```

7. toBeTruthy: 假值假匹配器

```js
test("toBeFalsy", () => {
  const n = 0;
  expect(n).toBeFalsy();
});
```

## 数字

8. toBeGreaterThan: 大于

```js
test("toBeGreaterThan", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
});
```

9. toBeLessThan: 小于

```js
test("toBeLessThan", () => {
  const value = 2 + 2;
  expect(value).toBeLessThan(5);
});
```

10. toBeGreaterThanOrEqual: 大于等于

```js
test("toBeGreaterThanOrEqual", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThanOrEqual(4);
});
```

11. toBeLessThanOrEqual: 小于等于

```js
test("toBeLessThanOrEqual", () => {
  const value = 2 + 2;
  expect(value).toBeLessThanOrEqual(4.5);
});
```

12. toBeCloseTo

```js
test("toBeCloseTo", () => {
  // 两个浮点数字相加
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);  // 这句会报错，因为浮点数有舍入误差
  expect(value).toBeCloseTo(0.3); // 这句可以运行
});
```

## 字符串

13. toMatch

```js
test("toMatch", () => {
  expect("Christoph").toMatch(/stop/);
});
```

## 数组

14. toContain

```js
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
```

## 异常

15. toThrow

```js
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
```

## 取反

16. not

```js
test("not", () => {
  expect(2 + 2).not.toBe(5);
});
```

# 让 jest 支持 import 和 es6 语法

1. 安装 babel

```
npm i -D @babel/core @babel/preset-env babel-jest
```

2. 添加`babel.config.js`

```js
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
      "@babel/preset-typescript",
    ],
  ],
};
```

babel-jest -> babel.config.js -> 执行代码转换 -> 运行测试代码

# jest 异步代码测试方法

## 创建 server

1. 安装 axios, koa, koa-router, koa2-cors

```
npm i axios koa koa-router koa2-cors
```

2. 创建 server

```
mkdir server
cd server
touch index.js
```

```js
// index.js
const koa = require("koa");
const Router = require("koa-router");
const cors = require("koa2-cors");

const app = new koa();

app.use(cors()); // 允许跨域

const router = new Router();

router.get("/news", (ctx, next) => {
  ctx.body = {
    success: true,
  };
});

app.use(router.routes()); //作用:启动路由
app.use(router.allowedMethods()); //作用: 当请求出错时的处理逻辑
app.listen(3000, () => {
  console.log("starting at port 3000");
});
```

4. 启动 server
   `nodemon server/index.js`

## 编写测试脚本

1. fetchData.js

```js
import axios from "axios";

// calback
const fetchData = (callback) => {
  axios.get("http://127.0.0.1:3000/news").then((response) => {
    callback(response.data);
  });
};
// promise
const fetchTwoData = () => {
  return axios.get("http://127.0.0.1:3000/news");
};
// 404
const fetchThreeData = () => {
  return axios.get("http://127.0.0.1:3000/xxx");
};

// async/await
const fetchFourData = () => {
  return axios.get("http://127.0.0.1:3000/news");
};
export { fetchData, fetchTwoData, fetchThreeData, fetchFourData };
```

2. fetchData.test.js

```js
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
```

3. 注意
   - 异步 callback 中`done`方法的使用
   - 异步 promise 中`return`的使用

# 原理

## test 和 expect 方法

```js
function add(num1, num2) {
  return num1 + num2;
}

function test(title, fn) {
  try {
    fn();
    console.log(title, "测试通过");
  } catch (error) {
    console.log(error);
    console.error(title, "测试失败");
  }
}
function expect(ret) {
  return {
    toBe: function (arg) {
      if (ret != arg) {
        throw Error(`预计和实际不符，预计:${arg}，实际:${ret}`);
      }
    },
  };
}
test("测试add数字相加", () => {
  expect(add(1, 2)).toBe(3);
});
test("测试add数字字符串相加", () => {
  expect(add("1", "2")).toBe(3);
});
```

# Reference

- [doc](https://jestjs.io/docs/zh-Hans/getting-started)
- [一起学前端自动化测试 技术胖视频](https://www.bilibili.com/video/BV1yA411b7EV?p=1)
- [一起学前端自动化测试 技术胖文档](https://jspang.com/detailed?id=65)
