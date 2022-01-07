// const autosidebar = require('vuepress-auto-sidebar-doumjun')

module.exports = [
    {text: '主页', link: '/'},
    {text: '关于', link: '/about'},
    {text: '关于1', link: '/about1'},
    {
        text: '面试',
        link: '/interview/',
        items: [
            {text: 'Vue', link: '/vue/'},
            {text: 'Node', link: '/node/'},
        ]
    },
    {text: '标签', link: 'https://github.com/wuxinabc'},
    {
        text: '工具箱',
        items: [
            {
                text: 'GitHub',
                link: 'https://github.com/wuxinabc'
            },
            {
                text: '语雀',
                items: [
                    {
                        text: 'GitHub',
                        link: 'https://www.yuque.com/alipayqal44koole'
                    },
                    {
                        text: '语雀',
                        link: 'https://www.yuque.com/alipayqal44koole'
                    },
                ]
            },
        ]
    },
    {text: '谷歌', link: 'https://google.com'},
]
