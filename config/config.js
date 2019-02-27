export default {
  plugins:[
    ['umi-plugin-react',{antd:true}]
  ],
  singular: true, // 让存放页面的文件夹允许为page ，单数。因为。umi中约定存放页面代码的文件夹是pages
  routes:
  [
    { path:'/', component:'./HelloWorld'}
  ]
};
