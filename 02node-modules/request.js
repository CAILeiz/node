const request = require("request");
console.log(123);
request.get("https://v.sogou.com/film/list/style-+zone-+year-+starring-.html", (err, response, body) => {
    console.log(err);
    console.log(response);
    console.log(body);
})