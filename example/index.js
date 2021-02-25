/// <reference types="es4x" />
const config = require("./config");
const app = require("box-es4x");
const mongo = require("box-es4x/mongo");

app.db = mongo(config.database); // 创建数据库连接
app.setting(config).start(8080); // 启动应用
