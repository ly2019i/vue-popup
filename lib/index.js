import Popup from './Popup.vue';
const my_popup = {
  //  使用install为vue添加插件
  install (Vue) {
    Vue.component(Popup.name,Popup)
  }
}
if(typeof window !== 'undefined' && window.vue){
  window.vue.use(my_popup);
}
export default my_popup;