const Koa = require("koa");
const path = require("path");
const static = require("koa-static");
const session = require("koa-session-minimal");
const redisStore = require("koa-redis");
const views = require("koa-views");
const body = require("koa-body");

const config = require("./config");
// router
const user = require("./router/user");

const app = new Koa();
const staticPath = "./static";
const keys = ["maxy612", "hello,world"];

// for cookies signed
app.keys = keys;

// for session
app.use(
  session({
    store: redisStore({}),
    key: "SESSION_ID",
    cookie: config.cookie
  })
);

// for template engine
app.use(
  views(path.join(__dirname, "./views"), {
    extension: "ejs"
  })
);

// for body parser
app.use(body());

// user router config
app.use(user.routes());
app.use(user.allowedMethods());

// test
app.use(async ctx => {
  let count = ctx.session.count || 0;
  let oriName = ctx.cookies.get("name");
  if (!oriName) {
    ctx.cookies.set("name", "maxy61209", { signed: true });
  }
  ctx.session.count = count + 1;
  // ctx.body = "hello,world, " + oriName + " maxy61209, This is your " + ctx.session.count + '次访问';
  await ctx.render("index", {
    title: ctx.session.count + " times view"
  });
});

// for static file request
app.use(static(path.join(__dirname, staticPath)));

app.listen(config.port, err => {
  if (err) return console.error(err);
  console.log(`server start successfully on port:${config.port}`);
});
