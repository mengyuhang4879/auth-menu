let express = require("express");
let app = express();

//设置跨域访问
app.all("*", (req, res, next) => {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers", "content-type");
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() == "options") {
    res.send(200); //让options尝试请求快速结束
  } else {
    next();
  }
});
app.get("/menuList", (req, res) => {
  res.json({
    menuList: [
      { id: 1, name: "办公管理", auth: "office", pid: 0 },
      { id: 2, name: "请假申请", auth: "leaveApplication", pid: 1 },
      { id: 3, name: "出差申请", auth: "businessTripApplication", pid: 1 },
      { id: 4, name: "请假记录", auth: "leaveRecord", pid: 2 },
      { id: 5, name: "系统设置", auth: "systemSettings", pid: 0 },
      { id: 6, name: "权限管理", auth: "authority", pid: 5 },
      { id: 7, name: "用户角色", auth: "userRoles", pid: 6 },
      { id: 8, name: "菜单设置", auth: "menuSettings", pid: 6 }
    ]
  });
});
app.listen(8887, () => {
  console.log("服务启动成功");
});
