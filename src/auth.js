import Vue from "vue";
//其组件目录的相对路径 是否查询其子目录 匹配基础组件文件名的正则表达式
const componentsContext = require.context(
  "./components/_global",
  true,
  /.vue$/
);
componentsContext.keys().forEach(component => {
  // 获取组件配置
  const componentConfig = componentsContext(component).default;
  Vue.component(componentConfig.name, componentConfig);
});
