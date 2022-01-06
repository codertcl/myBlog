module.exports = {
    themeConfig: {
        logo: '/assets/img/1.jpg',
        nav: [
            {text: '主页', link: '/'},
            {text: '关于', link: '/about'},
            {
                text: '找到我',
                ariaLabel: '联系方式',//标签描述
                items: [
                    {text: 'GitHub', link: 'https://github.com/wuxinabc'},
                    {text: '语雀', link: 'https://www.yuque.com/alipayqal44koole'}
                ]
            },
            {text: '谷歌', link: 'https://google.com'},
        ]
    }
}
