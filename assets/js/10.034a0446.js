(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{387:function(t,a,s){"use strict";s.r(a);var n=s(44),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("ul",[s("li",[t._v("原文地址："),s("a",{attrs:{href:"https://blog.cloudboost.io/reactivity-in-vue-js-2-vs-vue-js-3-dcdd0728dcdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Reactivity in Vue.js 2 vs Vue.js 3"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("原文作者："),s("a",{attrs:{href:"https://twitter.com/dennythecoder",target:"_blank",rel:"noopener noreferrer"}},[t._v("Denny Headrick"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("译文出自："),s("a",{attrs:{href:"https://blog.zthxxx.me/post/reactivity-in-vue-2-vs-vue-3/",target:"_blank",rel:"noopener noreferrer"}},[t._v("zthxxx's blog"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("译者："),s("a",{attrs:{href:"https://github.com/zthxxx",target:"_blank",rel:"noopener noreferrer"}},[t._v("zthxxx"),s("OutboundLink")],1)])])]),t._v(" "),s("p",[t._v("Vue.js 核心团队已经开始讨论将在 Vue3 中改变的实现了。API 不会有变化，但响应式机制将会有所不用。这意味着什么，对你来说有什么意义？")]),t._v(" "),s("h2",{attrs:{id:"vue-2-的响应式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-2-的响应式"}},[t._v("#")]),t._v(" Vue 2 的响应式")]),t._v(" "),s("p",[t._v("Vue.js 2 中的响应式是通过 "),s("code",[t._v("Object.defineProperty")]),t._v(" 方法定义 "),s("code",[t._v("getter")]),t._v(" 和 "),s("code",[t._v("setter")]),t._v(" 完成的。我们来把 Vue 中做的事情简化出一个版本。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  enumerable"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  configurable"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" value\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("newValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" newValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newValue\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tellTheWorldIhaveChanged")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//somebody is watching!")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("使用形如这样的结构，当我们每次对属性进行更改时，它都会去通知需要知道这里有变化的观察者和依赖。这个属性的设置（注：指 "),s("code",[t._v("defineProperty")]),t._v("）是在我们的初始化模型(注："),s("code",[t._v("this.data")]),t._v(")和我们显式调用 "),s("a",{attrs:{href:"https://vuejs.org/v2/api/#Vue-set",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.set"),s("OutboundLink")],1),t._v("/"),s("a",{attrs:{href:"https://vuejs.org/v2/api/#vm-set",target:"_blank",rel:"noopener noreferrer"}},[t._v("vm.$set"),s("OutboundLink")],1),t._v(" 时工作的。")]),t._v(" "),s("p",[t._v("但是，通过这样的设置使下面内容需要额外处理：")]),t._v(" "),s("h3",{attrs:{id:"_1-按索引更新数组元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-按索引更新数组元素"}},[t._v("#")]),t._v(" 1. 按索引更新数组元素")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    names"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("persons"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'John Elway'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("你很可能已经意识到以上代码不会触发更新。事实上，"),s("a",{attrs:{href:"https://vuejs.org/v2/guide/list.html#Caveats",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue 详细的指南"),s("OutboundLink")],1),t._v(" 中明确地提到关于数组的警告。为啥会这样呢？因为数组的 "),s("code",[t._v("setter")]),t._v(" 属性无法拦截检测通过索引的赋值。")]),t._v(" "),s("p",[t._v("一个处理办法是使用 "),s("code",[t._v("Vue.set")]),t._v(" 方法")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("names"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'John Elway'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("并且 Vue 也对"),s("a",{attrs:{href:"https://github.com/vuejs/vue/blob/dev/dist/vue.js#L806",target:"_blank",rel:"noopener noreferrer"}},[t._v("一些数组方法"),s("OutboundLink")],1),t._v("做了足够的包装，我们可以直接使用 Array 方法直接更新数组对象。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("names"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'John Elway'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-动态添加属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-动态添加属性"}},[t._v("#")]),t._v(" 2. 动态添加属性")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    names"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastAddedName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'John Elway'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("这可能是最好的例子，对吧？我可能应该知道某个属性已经存在，但有些情况下我们或许并不知道属性名称。JavaScript 提供 "),s("strong",[s("em",[t._v("loosed-typedness")])]),t._v(" 允许我们轻松添加属性。然而，Vue 响应式并不清楚我们添加了什么。")]),t._v(" "),s("blockquote",[s("p",[t._v("放着我来！ —— "),s("code",[t._v("Vue.set")])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lastAddedName'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'John Elway'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("如果我们能有一种避免所有 "),s("code",[t._v("Vue.set")]),t._v(" 使用情况并把索引操作还给我们的方法 ...")]),t._v(" "),s("h2",{attrs:{id:"vue-3-的响应式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-3-的响应式"}},[t._v("#")]),t._v(" Vue 3 的响应式")]),t._v(" "),s("p",[t._v("Welcome to 通过代理 ("),s("code",[t._v("Proxy")]),t._v(") 实现响应式的世界。"),s("code",[t._v("Proxy")]),t._v(" 是在 ES6 或者称 ES2015 中引进的特性，他们已经出现一段时间，因此我确信大家已经了解他们了，但可能不会在生产环境中使用。因为 "),s("code",[t._v("Proxy")]),t._v(" 也是无法 shim 的特性，没有 polyfill，也无法在浏览器中 fake 实现。")]),t._v(" "),s("p",[t._v("幸运的是，它的语法并不荒谬。事实上，他也算有些熟悉。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  names"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\ndata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("names "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Proxy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("names"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("prop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("prop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" value\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tellTheWorldIhaveChanged")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("这里 proxy 不仅拦截前面提到的数组索引赋值，还会在调用数组方法时触发，不再需要包装方法。")]),t._v(" "),s("p",[t._v("那么关于动态添加属性呢？")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Proxy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("prop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("prop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" value\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tellTheWorldIhaveChanged")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastAddedName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'John Elway'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//tellTheWorldIhaveChanged()")]),t._v("\n")])])]),s("p",[t._v("OMG. Awesome! 让我们赶紧在 "),s("a",{attrs:{href:"change.org"}},[t._v("Change.org")]),t._v(" 上催更让它快点发布吧！")]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("我在 "),s("a",{attrs:{href:"https://medium.com/the-vue-point/upcoming-typescript-changes-in-vue-2-5-e9bd7e2ecf08",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue 2.5 发布"),s("OutboundLink")],1),t._v("之前就开始简短的写了。Vue 3 并没有被过多讨论，但由于上面提到的变化，我真的很期待它。话虽如此，我还是无法在近期的工作项目中使用它。Why? Vue3 没有对 IE 的兼容性，Babel 也不能解决这个问题。")]),t._v(" "),s("p",[t._v("但是，这种重构依然有长期优势：")]),t._v(" "),s("ol",[s("li",[t._v("简化源码 - 这种重构使得团队去掉数组方法包装并减少需要做的类型检查")]),t._v(" "),s("li",[t._v("新手更易上手 - 从响应式中获取的警告有助于 Vue 新手，这将消除社区论坛一整类的问题")]),t._v(" "),s("li",[t._v("更好的性能 - 我见到一些人们建议这样做来提升响应式的速度，它其实已经非常快了，我还没在这一点上被说服")])]),t._v(" "),s("p",[t._v("感谢阅读！如果你发现了任何错误，请联系我")]),t._v(" "),s("h2",{attrs:{id:"update"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update"}},[t._v("#")]),t._v(" Update")]),t._v(" "),s("p",[t._v("似乎使用 Proxy 的版本将附加 "),s("code",[t._v("-next")]),t._v(" (像 ES-next) 到当前版本号，而不是用 "),s("code",[t._v("Vue 3")]),t._v("。这种更新可能最早出现在 "),s("code",[t._v("Vue 2.6")]),t._v(" 和 "),s("code",[t._v("Vue2.6-next")]),t._v(" 中。这将消除对 API 中可用内容的混淆。")])])}),[],!1,null,null,null);a.default=e.exports}}]);