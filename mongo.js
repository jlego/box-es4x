/**
 * mongodb
 * 2021-2-23
 */
import { MongoClient } from "@vertx/mongo-client";

exports.client = MongoClient;

// 创建数据库实例
module.exports = config => MongoClient.create(vertx, config);
