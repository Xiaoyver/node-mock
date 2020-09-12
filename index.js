const express = require("express");
const app = express();
const port = "9000";
const url = "/vue_el";

var log = require("./utils/index");

app.get(url + "/user/login", function (req, res) {
  log.printLog(req);
  res.json(require("./data/user/login.json"));
});

app.post(url + "/user/login", function (req, res) {
  log.printLog(req);
  res.json(require("./data/user/login.json"));
});

// 这段在最后，在请求错误时返回
app.post("*", function (req, res) {
  log.printLog(req);
  res.json(require("./data/other/404.json"));
});

app.get("*", function (req, res) {
  log.printLog(req);
  res.json(require("./data/other/404.json"));
});

app.listen(port, function () {
  console.log("Node Mock start in port " + port);
});
