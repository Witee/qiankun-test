# 解决 loading 显示问题

> 相关讨论在这里: [`https://github.com/umijs/qiankun/issues/881`](https://github.com/umijs/qiankun/issues/881)

演示过程如下:

- 分别进入 `main` 和 `app1` 目录, 执行 `npm i && npm start`
- 访问 `http://localhost:4000/`
- 点击页面上的 `APP1` 切换路由时会在页面中间显示一个 `Loading...`


这样是通过配置 loader 实现的, 在为 true 时找到子应用的挂载点 subApp 渲染 `Loading...`,
但在控制台会有一个报错:

```
Warning: render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.

```

如果在 `lifeCycles` 的 `beforeLoad` 生命周期中做同样的操作也可以实现, 而且没有报错, 但感觉这样操作不是很正规.

帮忙看看应该使用什么样的方式显示 `Loading...` 呢?