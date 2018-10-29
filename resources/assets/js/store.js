/*
* 这里是我们 Vuex 模块的起点，
* Vuex 由一个父模块和多个子模块构成，
* 该文件包含父模块，随后我们会导入所有子模块到这个文件。
* 现在我们将其留空，在构建应用时再来填充内容。
* */
/**
 * npm install es6-promise --save-dev
 * 为了支持IE  promise语法
 */
require('es6-promise').polyfill();

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
   modules: {

   }
});