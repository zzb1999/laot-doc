module.exports = {
    title: 'Laot的笔记本',
    description: 'Laot的笔记本，记录学习的技术知识。',
    head: [
        ['link', {
            rel: 'icon',
            href: `/favicon.ico`
        }]
    ],
    dest: './docs/.vuepress/dist',
    ga: '',
    evergreen: true,



    themeConfig: {
        nav: [
            {
                text: '渗透测试',
                items:[
                    {text:'Web安全',link: '/penetrationTest/Web/SQL注入'},
                    {text:'内网渗透',link: '/penetrationTest/Web/'},
                    {text:'渗透工具',link: '/penetrationTest/Web/'}
                ]
            },
            {text: 'PHP', link: '/PHP/'},
            {
                text: '前端', 
                items:[
                    {text: 'HTML', link: '/Web/HTML/01基础知识'},
                    {text: 'CSS', link: '/Web/CSS/01基础知识'},
                ]
            },
            {text: '工具软件', link: '/Tools/'},
        ],
        sidebarDepth: 2,
        sidebar: {
            '/penetrationTest/Web/':[
                {
                    title: 'SQL注入',
                    path: 'SQL注入',
                },
                {
                    title: '文件上传',
                    path: '文件上传',
                }
            ],
            '/Web/HTML/':[
                {
                    title: '基础知识',
                    path: '01基础知识',
                },
                {
                    title: '页面结构',
                    path: '02页面结构',
                },
                {
                    title: '文本相关',
                    path: '03文本相关',
                },
                {
                    title: '链接与图片',
                    path: '04链接与图片',
                },
                {
                    title: '表单与列表',
                    path: '05表单与列表',
                },
                {
                    title: '表格与多媒体',
                    path: '06表格与多媒体',
                }
            ],
            'Web/CSS/':[
                {
                    title: '基础知识',
                    path: '01基础知识',
                },
            ],
            '/':[
                ''
            ]
        }
    }
}

