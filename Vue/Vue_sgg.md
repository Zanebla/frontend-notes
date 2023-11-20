## Vue

https://vuejs.org/

The Progressive JavaScript Framework

An approachable, performant and versatile framework for building web user interfaces

### 特点

1 MVVM模式

- 模型（Model）代表数据和业务逻辑。它包含了数据模型、数据源和数据操作等。在MVVM中，模型并不直接与视图通信，而是通过ViewModel来传递数据 | data中的数据
- 视图（View）负责用户界面的展示和用户交互。视图通过绑定（Binding）与ViewModel进行通信，并将用户的操作传递给ViewModel处理 | 模版
- 视图模型（ViewModel）充当了模型和视图之间的桥梁。它从模型中获取数据，并对数据进行处理和转换，然后将处理后的数据传递给视图进行展示。ViewModel也负责处理用户的交互操作，并将相关的数据更新到模型中 | Vue实例对象

![image-20231120143523682](C:\Users\zz153\AppData\Roaming\Typora\typora-user-images\image-20231120143523682.png)

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
- React的组件化和虚拟DOM技术

### 周边库

- vue-cli

Vue CLI（Command-Line Interface）是一个官方提供的用于快速搭建 Vue.js 项目的脚手架工具。它为开发者提供了一套可扩展的插件体系，使得创建、构建和维护 Vue 项目变得更加简单和高效

- vue-resource

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

