var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var session = require("express-session");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var csdnRouter = require("./routes/csdn");
var loginRouter = require("./routes/login");
var app = express();

// view engine setup
// 设置静态模板
app.set("views", path.join(__dirname, "views"));
// 设置ejs模板渲染引擎
app.set("view engine", "ejs");

// 中间件
app.use(
  session({
    secret: "dl",
    cookie: {
      // 设置过期时间为一周
      maxAge: 7 * 24 * 60 * 60 * 1000,
    },
    // 保存到本地
    resave: true,
    // 是否保存初始化的session
    saveUninitialized: true,
  })
);
app.use(logger("dev"));
// 请求参数json转换
app.use(express.json());
// express.urlencoded本质上是让req多了一个body 让你可以访问req.body
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/csdn", csdnRouter);
app.use("/login", loginRouter);
app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
console.log("localhost:3000");
module.exports = app;
