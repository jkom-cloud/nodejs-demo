# nodejs-demo
用于演示一个nodejs项目如何适配[自动化部署工具](https://github.com/jkom-cloud/deployment)

### 注意事项
1.启动脚本必须是 `bin/www.js`
2.首次需自己用pm2启动且`--name`参数必须是项目名即： `pm2 start bin/www.js --name nodejs-demo`
