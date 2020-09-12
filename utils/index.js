var logger = require("../log/logger");
module.exports = {
  printLog: function (req) {
    logger.warn("请求IP：", req.ip);
    logger.warn("请求url：", req.path);
    logger.warn("请求参数：", req.query);
  },
};
