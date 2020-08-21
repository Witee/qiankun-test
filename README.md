# 微前端(qiankun)实践 - 基于 react


> 三个项目都是通过 `create-react-app` 生成, 并做了精简.
> qiankun: https://qiankun.umijs.org/zh/guide

### 安装与启动
分别进入 `main` `app1` `app2` 目录中执行:

```
 npm i

 npm start
```

### 访问, 并点击菜单访问不同 app
```
  http://localhost:4000/
```

### 注意事项
  - `main` 项目
    - 用于启动 `qiankun` 及菜单显示; 
    - 在 `src/App.js` 中增加了 `div` 指定 `id=subApp`, 用于挂载子项目.
    - 禁止设置全局 CSS 防止污染子项目, 本项目中 antd 指定了 CSS 前缀.


  - `app1` `app2` 项目
    - 使用 `craco` 配置了 `webpack`, 配置文件为 `craco.config.js`
    - `craco` 配置了 `qiankun` 项目需要的三个设置(`library` `libraryTarget` `jsonpFunction`), 及解决跨域访问问题.
    - `library` 的名称设置与主项目中 qiankun 注册应用名称保持一致
    - 导出 `bootstrap` `mount` `unmount`
    - 编写获取子项目挂载位置的方法 `getRootEle`, 如主项目中启动了沙箱隔离, 子项目挂载位置需要在传递过来的容器中查找