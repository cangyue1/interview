## 算法

### 1、排序算法及相关复杂度

## HTML

### 1、html语义化

## CSS

### 1、flex布局

弹性布局 主轴 交叉轴

flex 0 1 auto

1. flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
2. flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
3. flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。

### 2、grid布局

### 3、清除浮动

### 4、伪类伪元素

伪类和伪元素的根本区别在于：**它们是否创造了新的元素。**

伪类只能使用“：”
而伪元素既可以使用“:”，也可以使用“::”
因为伪类是类似于添加类所以可以是多个，而伪元素在一个选择器中只能出现一次，并且只能出现在末尾

## JavaScript

### 1、事件循环

### 2、Map、Set、WeakMap、WeakSet

Map 的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键。这就解决了同名属性碰撞（clash）的问题，

如果 Map 的键是一个简单类型的值（数字、字符串、布尔值），则只要两个值严格相等，Map 将其视为一个键，比如`0`和`-0`就是一个键，布尔值`true`和字符串`true`则是两个不同的键。另外，`undefined`和`null`也是两个不同的键。虽然`NaN`不严格相等于自身，但 Map 将其视为同一个键。

`WeakMap`只接受对象作为键名（`null`除外），不接受其他类型的值作为键名。

WeakSet、weakMap 不可遍历，WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，WeakSet 的成员只能是对象，而不能是其他类型的值。

### 3、类型判断

基本数据类型：String、Number、Boolean、Null、Undefined、symbol（ES6）

- typeof ：  返回结果为number、boolean、string、object、undefined、function、Symbol
- **instanceof**   检查原型链是否有关系，基本数据类型要通过new来创建才可以检测
- constructor   除了null和undefined，constructor容易被修改
- Object.prototype.toString.call()    都可以   ie6兼容问题  ['Object', 'Array']

### 4、async await以及generate

### 5、try catch异常

### 6、箭头函数及this

写法规则：

- 箭头函数只能用赋值式写法，不能用声明式写法
- 如果参数只有一个，可以不加括号，如果没有参数或者参数多于一个就需要加括号
- 如果函数体只有一句话，可以不加花括号
- 如果函数体没有括号，可以不写return，箭头函数会帮你return

特性：

- 默认绑定外层this
- 不能用call方法修改里面的this

函数中的this：

- 纯粹的函数调用  会调用call方法，call方法接收的第一个参数就是this，如果为null 或者 undefined，那么 window 对象就是默认的 context（严格模式下默认 context 是 undefined）。
- 对象中函数的调用
- 构造函数中this，构造函数在new之后都会返回一个对象，这个对象就是this，也就是context上下文。
- window.setTimeout()和window.setInterval()中函数的调用，里面的this默认是window对象。

## TypeScript

### 1、类型检测

## Nodejs

### 1、中间件洋葱模型

### 2、事件循环

## Vue

### 1、响应式原理

### 2、Vue.use   component等

### 3、new Vue

### 4、生命周期顺序

### 5、动态添加属性

Vue.util.reactive

## React

### 1、函数式组件和类式组件

### 2、Hooks

### 3、Diff算法

- React/Vue 的 DIff 策略使遍历复杂度降低为 O(n)，是一个重大的优化
- React/Vue 在做循环时，一定要加上唯一的 key 值，这样不仅能有效提高 Diff 效率，减少 DOM 的重绘，还能避免一些稀奇古怪的错误
- 尽量减少跨层级的组件改动，尽量使用 v-show/display:none 来保持 DOM 结构的稳定性，防止新增、删除等消耗大量性能的操作
- 尽量减少将节点尾部移动到节点头部等操作，当节点数量过大或更新操作过于频繁时，在一定程度上会影响 React 的渲染性能。
- 另外，React 从 16 版本开始使用了 Fiber 架构，这个架构解决了大型 React 项目的性能问题及一些之前框架的痛点，我会在下一章详细介绍 Fiber 架构的奥秘和其与之前架构的区别

## uni-app

### 1、移动端

### 2、小程序

## 前端工程化与发展

### 1、webpack

### 2、性能优化

cdn分发网络

### 3、单页面应用

### 4、屏幕自适应

​	rem、em   @media    postcss     picture标签 resize监听防抖

### 5、require与import

require：

​	AMD规范，commonjs， 运行时调用， 理论上可以运用在代码的任何地方。

​	赋值过程，赋值变量以及浅拷贝对象。

​	出现模块之间循环引用时, 会输出已执行的模块, 未执行模块不会输出

​	CommonJS规范默认`export`的是一个对象,即使导出的是基础数据类型

import：

​	ES6，编译时调用，必须放在文件开头，解构过程，只读引用传递

​	出现模块之间的循环引用时，只要模块存在某个引用，代码就能够执行。

​	import()动态导入

## 手写实现类问题

1、函数柯里化

2、手写实现apply

3、实现promise并发数目控制

4、eventEmitter

