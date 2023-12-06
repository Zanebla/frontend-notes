# Vue

## Vue 核心

[TOC]

https://vuejs.org/

The Progressive JavaScript Framework

An approachable, performant and versatile framework for building web user interfaces

### 特点

1 MVVM模式

- 模型（Model）代表数据和业务逻辑。它包含了数据模型、数据源和数据操作等。在MVVM中，模型并不直接与视图通信，而是通过ViewModel来传递数据 | data中的数据
- 视图（View）负责用户界面的展示和用户交互。视图通过绑定（Binding）与ViewModel进行通信，并将用户的操作传递给ViewModel处理 | 模版
- 视图模型（ViewModel）充当了模型和视图之间的桥梁。它从模型中获取数据，并对数据进行处理和转换，然后将处理后的数据传递给视图进行展示。ViewModel也负责处理用户的交互操作，并将相关的数据更新到模型中 | Vue实例对象

![mvvm](assets/mvvm.png)

**MVVM的核心思想是数据绑定（Data Binding）**，通过将视图与数据模型绑定起来，实现了数据的自动更新。这样一来，开发人员只需关注数据和业务逻辑的处理，而不必关心视图的更新。这种松耦合的架构有助于提高代码的可维护性和可测试性

MVVM模式在很多前端框架中得到了广泛应用，例如Angular、React和Vue.js等。它也适用于其他类型的应用程序开发，如WPF和Xamarin等跨平台应用开发

2 编码简洁，体积较小，效率较高，适合移动端/PC端开发

- Vue的语法简洁明了，使用模板语法进行视图的声明，通过数据绑定和指令来实现交互和逻辑控制，大大减少了开发的复杂性和冗余代码的编写
- Vue的核心库非常小巧，压缩后只有数十KB，这意味着在前端应用中加载和渲染速度快，同时也有利于移动端应用的性能优化
- Vue采用了虚拟DOM（Virtual DOM）的机制，通过比较差异来最小化实际的DOM操作，以提高渲染效率。此外，Vue还提供了异步渲染、组件级别的懒加载等优化策略，进一步提升应用的性能
- Vue不仅适用于移动端应用开发，也同样适用于PC端应用开发。它可以与各种工具、框架和第三方库进行集成，满足不同场景下的需求

3 关注UI层面开发，同时可引入第三方库开发项目，下面是集成第三方库的机制：

- 插件（Plugins）：Vue插件是一种扩展机制，可以通过Vue.use()方法引入第三方库，并在Vue应用中进行使用。插件可以用来添加全局的功能、指令、过滤器等，例如常见的Vue Router和Vuex就是通过插件进行集成的
- 组件封装（Component Wrappers）：如果希望在Vue应用中使用某个第三方组件库，可以将其封装为Vue组件，以便在Vue模板中进行使用。封装后的组件可以与Vue的数据绑定和生命周期钩子等特性进行交互
- 自定义指令（Custom Directives）：Vue的自定义指令允许开发人员直接操作DOM元素，并且可以与第三方库进行集成。自定义指令可以为DOM元素添加交互行为或操作，从而与其他功能库进行交互

### 借鉴

- Angular的模版和数据绑定技术

特别是在数据绑定方面，Vue也提供了类似Angular的双向绑定功能，可以更方便地处理用户界面与后端数据的同步更新问题。然而值得注意的是，Vue和Angular的整体设计和目标不同，Vue更注重简单、灵活的响应式数据绑定机制，而Angular则更加关注可扩展的应用程序架构和组件化

- React的组件化和虚拟DOM技术

组件化是指将用户界面拆分为独立、可复用的组件，每个组件负责特定的功能和显示逻辑。这种方式可以提高代码的可维护性和复用性

虚拟DOM是一种用于优化HTML DOM操作的技术。Vue参考了React的虚拟DOM实现，通过在内存中构建虚拟DOM树来代替直接操作实际的HTML DOM树。这种方式可以减少直接操作DOM带来的性能开销，提高应用的渲染效率

但是值得注意的是，Vue在组件化和虚拟DOM方面并不是完全照搬React的实现。Vue在设计上更加注重模板和数据的绑定关系，并提供了更直观的模板语法，同时也在一些细节上有所差异，使得Vue具有自己的特点和优势

### 周边库

- vue-cli

Vue CLI（Command-Line Interface）是一个官方提供的用于快速搭建 Vue.js 项目的脚手架工具。它为开发者提供了一套可扩展的插件体系，使得创建、构建和维护 Vue 项目变得更加简单和高效

- ~~vue-resource~~

Vue Resource 是 Vue.js 官方提供的一个基于 Promise 的 AJAX 库，它和 Vue.js 的整体设计非常协调，可以很方便地和 Vue.js 项目进行集成

Vue Resource 提供了一个简单的、基于 Promise 的 API，具有以下特性：

1 与 Vue.js 高度集成：Vue Resource 和 Vue.js 设计类似，将请求结果转换为 JavaScript 对象，并允许在各种方式下使用响应式数据和双向绑定

2 支持多种请求方式：Vue Resource 支持多种常用的请求方式，包括 GET、POST、PUT、PATCH、DELETE、JSONP 等

3 支持拦截器：Vue Resource 支持请求和响应拦截器，可以对请求和响应进行全局或局部的处理

4 支持插件机制：Vue Resource 提供了插件机制，可以方便地扩展和定制功能

5 支持请求的取消：Vue Resource 支持请求的取消操作，可以通过调用 cancel() 方法来取消请求

需要注意的是，Vue Resource 目前已停止维护，官方已推荐使用 Axios 作为替代方案

- axios
- vue-router
- vuex
- element-ui

### 模版语法

- 插值语法
- 指令语法

### 数据绑定

- 单向 v-bind:href = "xxx" or :href = "xxx"   数据只能从data流向页面
- 双向 v-model:value = "xxx" or v-model = "xxx" 数据可以在data和页面之间双向流动

### 事件处理

- 事件监听
  - v-on:xxx="fun"
  - @xxx="fun"
  - @xxx="fun(参数)"
  - 默认事件形参：event
  - 隐含属性对象：$event

- 事件修饰符
  - .prevent：阻止事件默认行为 event.preventDefault()
  - .stop：停止事件冒泡 event.stopPropagation()
- 按键修饰符
  - keycode
  - keyName

### 计算属性

- 在computed对象中定义计算属性
- 在页面中使用{{方法名}}显示计算结果

### 监视属性

- 通过vm对象的$watch()或watch配置监视指定属性
- 属性变化时回调函数自动调用并在函数内部计算

### class and style

class or style 绑定是用于实现动态样式效果的技术

- :class="xxx"
- "classA"
- {classA:isA, classB:isB}
- ["classA", "classB"]
- :style="{color: activeColor, fontSize: fontSize + 'px'}"
- 其中的activeColor/fontSize是data属性

### 条件渲染

- v-if and v-else
- v-show

### 列表渲染

- 遍历数组 v-for / index
- 遍历对象 v-for / key

### 表单数据



### 过滤器

- 对需要显示的数据进行特定格式化后显示
- 不改变原有数据而是产生新的对应数据

### 内置指令

- v-text 更新元素的 textContent
- v-html 更新元素的 innerHTML
- v-if 如果为 true, 当前标签才会输出到页面
- v-else 如果为 false, 当前标签才会输出到页面
- v-show 通过控制 display 样式来控制显示/隐藏
- v-for 遍历数组/对象
- v-on 绑定事件监听, 一般简写为@
- v-bind 绑定解析表达式, 可以省略 v-bind
- v-model 双向数据绑定
- v-cloak 防止闪现, 与 css 配合: [v-cloak] { display: none }

### 自定义指令

1. 注册全局指令

```js
Vue.directive('my-directive', function(el, binding){
    el.innerHTML = binding.value.toupperCase()
})
```

2. 注册局部指令

```js
directives: {
    'my-directive':{
        bind(el, binding){
            el.innerHTML = binding.value.toupperCase()
        }
    }
}
```

使用指令：v-my-directive="xxx"

### Vue实例生命周期

![vue-lifecycle-hooks](/assets/vue-lifecycle-hooks.png)

1 初始化显示

- beforeCreate()
- created()
- beforeMount()
- mounted()

2 更新状态 this.xxx = value

- beforeUpdate()
- updated()

3 销毁vue实例 vm.$destory()

- beforeDestory()
- destoryed()

mounted(): 发送ajax请求，启动定时器等异步任务

beforeDestory(): 收尾工作，清除定时器

## Vue 组件化编程

### 模块与组件

**模块**：是向外提供特定功能的JS程序

作用：复用JS，简化JS编写，提高JS运行效率

**组件**：用于实现局部特定功能效果的代码集合（html/css/js/image...

作用：复用编码，简化项目编码，提高运行效率

- 非单文件组件

1 模版编写无提示

2 没有构建过程，ES6无法转换为ES5

3 不支持组件CSS

- 单文件组件

1 模版页面 template

2 JS模块对象 script

3 样式 style

### 使用

- 引入组件
- 映射标签
- 使用组件

## Vue脚手架

https://cli.vuejs.org/

Standard Tooling for Vue.js Development

1. 全局安装@vue/cli	npm install -g @vue/cli
2. 切换到要创建项目的目录，然后使用命令创建项目	vue create xxx
3. 启动项目	npm run serve

Vue脚手架隐藏了所有webpack相关配置

### ref and props

ref 用于给节点打标识

读取：this.$refs.xxx



props 用于父组件给子组件传递数据

读取：

指定名称 props:['name', 'age', 'setName']

指定名称和类型

```js
props:{
    name: String,
    age: Number,
    setName: Function
}
```

指定名称/类型/必要性/默认值

```js
props: {
    name:{type: String, required: true, default: xxx}
}
```

### 混入

### 插件

1 Vue插件是一个包含install方法的对象

2 通过install方法为Vue或Vue实例添加方法，定义全局指令等

### 组件化编码流程

- 实现静态组件：抽取组件，使用组件实现静态页面效果
- 实现动态数据
  - 数据类型与名称
  - 数据保存在的组件
- 交互
  - 绑定事件监听

### Vue自定义事件

绑定事件监听

```vue
<Header @addTodo="addTodo"/>
or
<Header ref="header"/>
this.$refs.header.$on('addTodo', this.addTodo)
```

触发事件

```vue
this.emit('addTodo', todo)
```

### 全局事件总线

Vue提供了一种全局事件总线的机制，用于在组件之间进行通信

全局事件总线是通过Vue实例的事件系统来实现的

**理解**

- Vue原型对象上包含事件处理的方法
  - $on(eventName, listener)：绑定自定义事件监听
  - $emit(eventName, data)：分发自定义事件
  - $off(eventName)：解绑自定义事件监听
  - $once(eventName, listener)：绑定事件监听，但是只能处理一次
- 所有组件实例对象的原型对象的原型对象就是Vue的原型对象
  - 所有组件对象都能看到Vue原型对象上的属性和方法
  - Vue.prototype.$bus = new Vue()，所有组件对象都能看到$bus这个属性对象

- 全局事件总线
  - 包含事件处理相关方法的对象（Only One
  - 所有组件可得


**指定事件总线对象**

```vue
new Vue({
	beforeCreate(){ // 尽早执行挂载全局事件总线对象的操作
		Vue.prototype.$globalEventBus = this
	}
}).$mount('#root')
```

**绑定事件**

```vue
this.$globalEventBus.$on('deleteTodo', this.deleteTodo)  监听事件
处理事件
```

**分发事件**

```vue
this.$globalEventBus.$emit('deleteTodo', this.index)  触发事件
```

**解绑事件**

```vue
this.$globalEventBus.$off('deleteTodo')
```

需要注意的是，全局事件总线是一个简单而有效的组件通信方式，但也可能导致组件之间的耦合性增加。在大型应用中，你可能会考虑使用更复杂的状态管理方案，如Vuex

### 消息订阅与发布

思想与全局事件总线相似

- 订阅消息 - 绑定事件监听
- 发布消息 - 分发事件
- 取消消息订阅 - 解绑事件监听

需要引入一个消息订阅与发布的第三方实现库: **PubSubJS**

PubSubJS 是一个基于 JavaScript 的发布/订阅模式库，用于实现模块之间的消息传递。它提供了一种简单而强大的方式来实现解耦的组件通信

https://github.com/mroderick/PubSubJS

可以通过在项目中引入 PubSubJS 库来使用它。可以使用 npm 命令安装 PubSubJS

```shell
npm install -S pubsub-js
```

> 在 `npm install` 命令中，参数 `-S` 或 `--save` 表示将安装的包信息保存到项目的 `package.json` 文件中的 `dependencies` 字段中
>
> 这样做的好处是，在之后的项目构建或部署中，可以根据 `package.json` 中的依赖信息自动安装所需的包
>
> 同时，其他人在获取项目源代码后，只需要运行 `npm install` 就能自动安装所有依赖的包

**相关语法**

- import PubSub from 'pubsub-js' 引入
- PubSub.subscribe('msgName', function(msgName, data){})
- PubSub.publish('msgName', data) 发布消息，触发订阅的回调函数调用
- PubSub.unsubscribe(token) 取消消息的订阅

### 过渡与动画

- 操作css的transition or animation
- vue 会给目标元素添加/移除特定的class
- 过渡的相关类名
  - xxx-enter-active 指定显示的 transition
  - xxx-leave-active 指定隐藏的 transition
  - xxx-enter/xxx-leave-to 指定隐藏时的样式

