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
