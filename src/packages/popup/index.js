/**
 * Vue组件：自定义弹窗组件
 * 
 * 作者：李增
 * 邮箱：634401745@qq.com
 * 
 * 组件安装方法：
 *   #1 引入Vue && popup组件
 *     import Vue from 'Vue' 
 *     import Popup from 'xxx/popup'
 *   #2 安装组件
 *     Vue.component(Popup.name, Popup);
 * 
 * 用法：
 *   <sxx-popup>
 *       <div>弹窗内容</div>
 *       <button>关闭</button>
 *   </sxx-popup>
 * 
 * options说明：
 * {
 *     visible: false, // 对话框是否可见，默认为false，[type: Boolean][必填项]
 *
 *     layerTap: '', // 蒙层点击后调起的钩子函数，默认为''[type: Function]
 *
 *     afterClose: '', // popup 完全关闭后的回调，[type: Function]
 *
 * }
 */

import Popup from './src/main.vue';
Popup.install = function(Vue, opt={}) {
	Vue.component(Popup.name, Popup)
}
export default Popup;