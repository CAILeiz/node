# 我是注册模块的 readme

1. 注册页面/register get 请求 使用表单 post 提交 用户名 邮箱 密码进行注册
2. 跳转/register post 路由 在该路由中进行数据库的写入 其中密码需要进行 crypto 加密
3. 判断数据库中该邮箱是已注册 如果已注册跳转到 info.ejs 页面 提示邮箱已注册, 5 秒后自动跳转注册页面重新注册
4. 如果邮箱未注册 将 username, password, email 写入数据库并跳转到登录页面进行邮箱密码的登录即可
