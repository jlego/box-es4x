/**
 * 应用主体类
 */
import { Router, TimeoutHandler } from "@vertx/web";
const { success, error, catchErr } = require("./func");
const config = {
  modulesPath: './src', //业务模块路径
  port: 8080,  //服务监听端口
}

// 路由
const router = Router.router(vertx);
router.get("/*").handler(TimeoutHandler.create(5000));

module.exports = {
  router,
  success,
  error,
  catchErr,
  setting(conf={}){
    Object.assign(config, conf);
    return this
  },
  async start(_port){
    // 加载业务模块
    let dirArr = await vertx.fileSystem().readDir(config.modulesPath);
    if(Array.isArray(dirArr)){
      for(let path of dirArr){
        let pathArr = path.split('/');
        require(`../.${config.modulesPath}/${pathArr[pathArr.length - 1]}/`);
      }
    }
    // http服务监听
    let port = _port || config.port;
    vertx.createHttpServer().requestHandler(router).listen(port);
    console.log(`Server listening at: http://localhost:${port}/`);
  }
}
