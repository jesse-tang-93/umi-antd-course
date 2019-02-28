export default {
  plugins:[
    ['umi-plugin-react',{antd:true,dva: true}]
  ],
  singular: true, // 让存放页面的文件夹允许为page ，单数。因为。umi中约定存放页面代码的文件夹是pages
  routes: [{
    path: '/',
    component: '../layout',
    routes: [
      { path: 'puzzlecards', component: './puzzlecards' },
      {
        path: '/',
        component: './HelloWorld'
      },
      {
        path:'/dashboard',
        routes:[
          { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
          { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
          { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
        ]
      }
    ]
  }],
};
