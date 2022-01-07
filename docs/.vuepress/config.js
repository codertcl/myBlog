module.exports = {
    title: 'TCL博客',
    description: '个人小天地',
    dest: './dist',//默认在.vuepress下
    port: '8080',
    head: [
        ['link', {rel: 'icon', href: 'favicon.ico'}],//设置页面标签icon
        ['meta', {author: 'SXY', content: 'TCL'}],
        ['meta', {name: 'keyowrds', content: 'vuepress,个人博客'}]
    ],
    markdown: {
        lineNumbers: true
    },
    subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    sidebar: "auto",//所有页面自动生成侧边栏
    themeConfig: {
        lastUpdated:'更新时间',
        logo: '/assets/img/1.jpg',//左上角logo
        nav: require('./nav'),
        sidebar: [
            '/',
            '/about', {
                title: 'CSS 1',   // 必要的
                path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/'
                ]
            },
            '/about1', {
                title: 'CSS 1',   // 必要的
                path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/'
                ]
            },
        ]
    },
    plugins: [
        ["vuepress-plugin-auto-sidebar", {
            sort: {
                mode: "asc",
                readmeFirst: true,
                readmeFirstForce: false
            },
            title: {
                mode: "titlecase",
                map: {}
            },
            sidebarDepth: 1,
            collapse: {
                open: false,
                collapseList: [],
                uncollapseList: []
            },
            ignore: [],
            git: {
                trackStatus: 'all'
            }
        }]
    ]
}
