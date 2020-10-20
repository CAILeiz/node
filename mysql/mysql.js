const mysql = require("mysql");
let options = {
  host: "localhost",
  // port: "3306", // 端口默认为3306 也可以设置其他的
  user: "root",
  password: "123456",
  database: "mall", // 数据库名
};

let connection = mysql.createConnection(options);
connection.connect((err) => {
  if (err) {
    console.log(err);
    console.log("连接失败");
  } else {
    console.log("连接成功");
  }
});
// 展示所有的数据库
connection.query("show databases", (err, results, fields) => {
  if (err) throw err;
  console.log(results);
});
// 展示所有的表
connection.query("show tables", (err, results) => {
  if (err) throw err;
  console.log(results);
});
// 查看一个表中所有的数据
connection.query("select * from  mysupermarket", (err, results) => {
  if (err) throw err;
  console.log(results);
});
// 在表中插入数据 因为id是递增的所以可以不插入goodId
// let strSql6 =
//   "insert into mysupermarket (goodId, goodName, price, sellPeople, customer) values (2, '吐司', 15, 'daleizi', 'baicai')";
// connection.query(strSql6, (err, results) => {
//   console.log(err);/,  ,
//   console.log(results);
// });
// 查看一个表中所有的数据
connection.query("select * from  mysupermarket", (err, results) => {
  if (err) throw err;
  console.log(results);
});
// 假如数据是插入的数据是前端给的,插入的写法会发生改变,可以用?来占位
let strSql7 =
  "insert into mysupermarket (goodName, price, sellPeople, customer) values (?, ?, ?, ?)";
connection.query(
  strSql7,
  ["小面包", 15, "daleizi", "baicai"],
  (err, results) => {
    console.log(err);
    console.log(results);
  }
);
// 删除表
// let strSql2 = "drop table carrierinfo";
// connection.query(strSql2, (err, results) => {
//   console.log(err);
//   console.log(results);
// });
// 删除库
// let strSql3 = "drop database carrier";
// connection.query(strSql3, (err, results) => {
//   console.log(err);
//   console.log(results);
// });
// 创建库
// let strSql4 = "create database mall";
// connection.query(strSql4, (err, results) => {
//   console.log(err);
//   console.log(results);
// });
