# 面试过程

+ useEffect
    + hooks 陷阱
    + useEffect cleanup 
        ```js
        //什么时候执行return backcall
        //  1. 组件周期 =>  组件卸载前 执行回调
        //  2. 有依赖更新 => 下次依赖更新前
        useEffect(()=>{
            return ()=>{
                //clean
            }
        },[])
        useEffect(()=>{

            return ()=>{
                //clean
            }
        },[count])
        ```
    + 请求时序（a,b请求）
        + 如何取消请求
            + xhr.abort
            + fetch => AbortController 实例，请求添加signal, 执行实例abort() 
            + axios => CancelToken
                + xhr.abort
                + nodejs => https/http
+ React 点击按钮自增三次
    + setCount => 传入函数
    ```js
        setCount(()=>{count+1})
        setCount(()=>{count+1})
        setCount(()=>{count+1})
    ```
+ useMemo/useCallback
    + useMemo => 缓存返回计算值
    + useCallback => 缓存回调函数
+ React.memo
    + props相同，返回结果也相同，则不会渲染,普通对象也会重新渲染(对复杂对象做浅层对比)，使用useMemo,useState处理,来避免组件的重复渲染; state(useState) 或 context(useContext) 变化，仍会重新渲染
    + 如何自定义比较函数（memo第二参数函数）
+ 前端工程化实践
    + prettier
    + eslint
        + eslint-loader
        + vue-eslint-loader
    + githooks
        + .git/hooks
        + precommit
        + 跳过检查: git commit --no-verify
    + commitlint
    + CICD -> jetbrain ->
        + 如何自动部署
+ webpack/rollup/esbuild -> npm package
    + 对比
    + webpack 的 runtime code => 加载依赖
    + 为啥要配置 hash
    + contenthash chunkhash
    
+ package-lock.json / yarn.lock
    + 锁定版本
    + 解决方案（.gitignore中去掉)
+ Umijs的好处
    + 约定式路由
    + ncc库
## 网络层http
+ http/https 区别
    + http明文传递
    + 数据加密
    + tls/ssl 加密
        + 对称加密 （私钥）
        + 非对称加密 （私钥+公钥）
        + 摘要算法 （散列函数 sha2加密）
        + 数字签名（ca第三方校验机构）
+ http.1/http.2

## virtual DOM  好处/坏处
+ 好处
    + 有利于跨平台
    + 可维护性，集中化操作，提高效率（阶段性）
    + 组件的高度抽象化
+ 坏处
    + 首次渲染大量 DOM ，大量计算 ，效率比较低
    + 内存维护一份dom副本，消耗大
    + 不利少量更改
    
## react与vue key作用
+ diff 算法 ,vnode 先比较 key 和标签名,一致再判断子节点
+ 一定程度提高diff 效率


## react hooks 替代 redux
+ 服务器端来 -> 封装useModel （Umijs : plugin-model）
+ 客户端 -> useContext/useReducer

## react fiber 原理
+ 前提
    + js 单线程的特点, 任务大耗时太长
+ 任务分成很多小片
    + 
    + 利用 requestIdeCallback 空闲时间递减
    + 收集片段任务结果

### 网站性能优化都有哪些点

+ 减少 http 请求次数： CSS Sprites, JS、CSS 源码压缩、图片大小适当控制； 网页 Gzip，CDN 托管，data 缓存 ，图片服务器。 尽量减少内联样式 将脚本放在底部 少用全局变量、缓存 DOM 节点查找的结果 图片预加载 按需加载