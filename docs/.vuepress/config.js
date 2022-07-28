console.log("环境变量", process.env.MONGOOSE_URL);
module.exports = {
  head: [
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
    ["link", { rel: "icon", href: "favicon.ico" }],
  ],
  base: "/myBlog/", // 部署到GitHub相关的配置
  title: "myBlog",
  description: "myBlogmyBlogmyBlogmyBlog",

  markdown: {
    lineNumbers: false, // 代码块不显示行号
  },
  themeConfig: {
    huawei: true,
    type: "blog",
    author: "Hamlin",
    // valine
    valineConfig: {
      appId: "20uttEi9BN7qb7fMVhJwCEoc-gzGzoHsz", // your appId
      appKey: "W2mkX4DhUukTDsfQeHi7mzQu", // your appKey
      notify: false,
      verify: false,
      avatar: "mp",
      placeholder: "填写邮箱可以收到回复提醒哦",
      visitor: true, // 阅读量统计
    },
    nav: [
      { text: "Home", link: "/" },
      {
        text: "导航栏配置",
        items: [
          { text: "自动读取", link: "/guide/vue/" },
          { text: "自定义", link: "/guide/ts/" },
        ],
      },
      {
        text: "错误总结",
        items: [{ text: "github", link: "/error/" }],
      },
      {
        text: "前端",
        link: "/web/",
        items: [
          { text: "es6", link: "/web/es6/" },
          { text: "vue", link: "/web/vue/" },
          { text: "H5", link: "/web/H5/" },
          { text: "React", link: "/web/React/" },
          { text: "ts", link: "/web/ts/" },
          { text: "进阶系列", link: "/web/advanced/" },
          { text: "面试题", link: "/web/interview/" },
          { text: "前端工程化", link: "/web/webpack/" },
        ],
      },
      { text: "nodejs", link: "/node/" },
      { text: "mysql", link: "/mysql/" },
      { text: "java", link: "/java/" },
      { text: "时间线", link: "/timeLine/", icon: "reco-date" },
      { text: "友链", link: "/friendLink/" },
      { text: "关于", link: "/nested/", icon: "account_circle" },
    ],

    sidebar: {
      "/web/es6/": [
        "es7_decorator",
        "ArrayBuffer",
        "ts_config",
        "front_end_modul",
        {
          title: "es6 个别案例模拟",
          collapsable: true,
          children: ["mini_set", "iterator"],
        },
      ],
      "/web/vue/": [
        "vuePress_deploy",
        {
          title: "vue3 指导",
          collapsable: true,
          children: ["vue3_intro"],
        },
      ],
      "/node/": [
        "node_process",
        {
          title: "redis与cache区别",
          collapsable: true,
          children: ["cache-redis"],
        },
        "cli",
        "npm",
      ],
      "/web/H5/": ["svg"],
      "/web/React/": [
        {
          title: "hooks api学习",
          collapsable: true,
          children: ["useCallback-api"],
        },
        {
          title: "实现三子棋小游戏 ",
          collapsable: true,
          children: ["chess"],
        },
      ],
      "/web/ts/": ["install"],
      "/web/interview/": [
        "notes",
        "webpack",
        "http_https",
        {
          title: "跨域的解决方案",
          collapsable: true,
          children: ["cross-domain"],
        },
      ],
      "/web/webpack/": [
        {
          title: "webpack",
          collapsable: true,
          children: ["instro"],
        },
        {
          title: "rollup",
          collapsable: true,
          children: ["rollup/test"],
        },
      ],
      "/mysql/": [
        "dowloadAndinstall",
        "introduce",
        "db_base_table",
        "date_type",
        "operate_sql",
        "insert_update",
        "indexes",
        "node_engine",
      ],
      "/guide/vue/": ["test01", "test02", "test03"],
      "/guide/ts/": [
        {
          title: "Typescript 学习",
          collapsable: true,
          children: ["test01", "test02", "test03"],
        },
      ],
      "/error/": [
        {
          title: "github 提交错误",
          collapsable: true,
          children: ["git_error"],
        },
      ],
    },
    // 博客设置
    blogConfig: {
      category: {
        location: 6, // 在导航栏菜单中所占的位置，默认2
        text: "Category", // 默认文案 “分类”
      },
      tag: {
        location: 5, // 在导航栏菜单中所占的位置，默认3
        text: "Tag", // 默认文案 “标签”
      },
    },
    sidebarDepth: 3, // 侧边栏显示2级
    algolia: {
      // 搜索需要提交
      apiKey: "<API_KEY>",
      indexName: "<INDEX_NAME>",
    },
    lastUpdated: "Last Updated", // string | boolean
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: "mzmuping/myBlog",
    // 以下为可选的编辑链接选项
    // 假如文档不是放在仓库的根目录下：
    docsDir: "docs",
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    editLinkText: "在 GitHub 上编辑此页",
    // Service Worker 的配置
    serviceWorker: {
      updatePopup: {
        message: "发现新内容可用.",
        buttonText: "刷新",
      },
    },
  },
  plugins: ["@vuepress/medium-zoom"],
};
