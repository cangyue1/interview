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

## JavaScript

### 1、事件循环

### 2、Map、Set、WeakMap、WeakSet

### 3、类型判断

基本数据类型：String、Number、Boolean、Null、Undefined、symbol（ES6）

- typeof ：  返回结果为number、boolean、string、object、undefined、function、Symbol
- **instanceof**   检查原型链是否有关系，基本数据类型要通过new来创建才可以检测
- constructor   除了null和undefined，constructor容易被修改
- Object.prototype.toString.call()    都可以   ie6兼容问题

4、async await以及generate

5、try catch异常

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

