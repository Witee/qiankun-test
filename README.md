# 微前端(qiankun)实践 - 基于 react


> 三个项目都是通过 `create-react-app` 生成, 并做了精简.
> qiankun: https://qiankun.umijs.org/zh/guide

- 安装与启动
分别进入 `main` `app1` `app2` 目录中执行:
```
 npm i

 npm start
```

- 访问
`main` 中并没有做菜单的UI, 所以需要使用 url 直接访问, 用来切换每个应用.
```
http://localhost:4000/

http://localhost:4000/app1/

http://localhost:4000/app2/
```

- 注意事项
  - `main` 项目中没有UI展示, 只是用于启动 `qiankun`; 在 `public/index.html` 中增加了 `div` 指定 `id=subApp`, 用于挂载子项目.
    - `main` 项目中启动了沙箱, 并开启了严格的样式隔离 
    ```
      https://qiankun.umijs.org/zh/api#startopts
      当配置为 { strictStyleIsolation: true } 表示开启严格的样式隔离模式。
      这种模式下 qiankun 会为每个微应用的容器包裹上一个 shadow dom 节点，从而确保微应用的样式不会对全局造成影响。
    ```

  - `app1` `app2` 中使用 `craco` 配置了 `webpack`, 配置文件为 `craco.config.js`, 配置了 `qiankun` 项目需要的三个设置(`library` `libraryTarget` `jsonpFunction`), 及解决跨域访问问题.
  - `app1` `app2` 中最核心的设置在 `src/index.js` 中:
    - 导出 `bootstrap` `mount` `unmount`
    - 编写获取子项目挂载位置的方法 `getRootEle`, 主项目中启动了沙箱隔离, 子项目挂载位置需要在传递过来的容器中查找