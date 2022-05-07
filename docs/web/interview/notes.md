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
    
    



