import { resolve } from 'path'
export default {
  mode: 'site',
  logo: 'https://img.alicdn.com/imgextra/i2/O1CN01Kq3OHU1fph6LGqjIz_!!6000000004056-55-tps-1141-150.svg',
  title: 'Core',
  hash: true,
  favicon:
    'https://img.alicdn.com/imgextra/i3/O1CN01XtT3Tv1Wd1b5hNVKy_!!6000000002810-55-tps-360-360.svg',
  outputPath: './doc-site',
  navs: {
    'en-US': [
      {
        title: 'Guide',
        path: '/guide',
      },
      {
        title: 'API',
        path: '/api',
      },
      {
        title: 'Home Site',
        path: 'https://formilyjs.org',
      },
      {
        title: 'GITHUB',
        path: 'https://github.com/alibaba/formily',
      },
    ],
    'zh-CN': [
      {
        title: '指南',
        path: '/zh-CN/guide',
      },
      {
        title: 'API',
        path: '/zh-CN/api',
      },
      {
        title: '主站',
        path: 'https://formilyjs.org',
      },
      {
        title: 'GITHUB',
        path: 'https://github.com/alibaba/formily',
      },
    ],
  },
  styles: [
    `.__dumi-default-navbar-logo{
      background-size: 140px!important;
      background-position: center left!important;
      background-repeat: no-repeat!important;
      padding-left: 150px!important;/*可根据title的宽度调整*/
      font-size: 22px!important;
      color: #000!important;
      font-weight: lighter!important;
    }
    .__dumi-default-navbar{
      padding: 0 28px !important;
    }
    .__dumi-default-layout-hero{
      background-image: url(//img.alicdn.com/imgextra/i4/O1CN01ZcvS4e26XMsdsCkf9_!!6000000007671-2-tps-6001-4001.png);
      background-size: cover;
      background-repeat: no-repeat;
      padding: 120px 0 !important;
    }
    .__dumi-default-layout-hero h1{
      color:#45124e !important;
      font-size:80px !important;
      padding-bottom: 30px !important;
    }
    .__dumi-default-dark-switch {
      display:none
    }
    nav a{
      text-decoration: none !important;
    }
    `,
  ],
  menus: {
    '/guide': [
      {
        title: 'Introduction',
        children: [
          {
            title: 'Introduction',
            path: '/guide',
          },
          { title: 'Architecture', path: '/guide/architecture' },
        ],
      },
      {
        title: 'Concept',
        children: [
          {
            title: 'MVVM',
            path: '/guide/mvvm',
          },
          {
            title: 'Form Model',
            path: '/guide/form',
          },
          {
            title: 'Field Model',
            path: '/guide/field',
          },
        ],
      },
    ],

    '/zh-CN/guide': [
      {
        title: '概览',
        children: [
          {
            title: '介绍',
            path: '/zh-CN/guide',
          },
          { title: '核心架构', path: '/zh-CN/guide/architecture' },
        ],
      },
      {
        title: '概念',
        children: [
          {
            title: 'MVVM',
            path: '/zh-CN/guide/mvvm',
          },
          {
            title: '表单模型',
            path: '/zh-CN/guide/form',
          },
          {
            title: '字段模型',
            path: '/zh-CN/guide/field',
          },
        ],
      },
    ],
  },
}
