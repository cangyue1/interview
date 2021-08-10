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

`WeakMap`只接受对象作为键名（`null`除外），不接受其他类型的值作为键名。使用：私有变量；保存dom节点元数据，dom被删除则释放内存。

WeakSet、weakMap 不可遍历，WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，WeakSet 的成员只能是对象，而不能是其他类型的值。WeakSet使用，给对象打标签。

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
- 定义的时候确定this
- 没有prototype

函数中的this：

- 纯粹的函数调用  会调用call方法，call方法接收的第一个参数就是this，如果为null 或者 undefined，那么 window 对象就是默认的 context（严格模式下默认 context 是 undefined）。
- 对象中函数的调用
- 构造函数中this，构造函数在new之后都会返回一个对象，这个对象就是this，也就是context上下文。
- window.setTimeout()和window.setInterval()中函数的调用，里面的this默认是window对象。

### 7、let const var

let const：块级作用域，暂时性死区，全局声明不会成为window的属性，无法使用条件声明，for循环与setTimeout

var： 函数作用域，声明提升

### 8、正则、定型数组以及迭代生成器

### 9、继承的多种方式

原型链继承 ：

​	原型中包含引用值的时候，原型中包含的引用值会在所有实例间共享。 

​	子类型在实例化时不能给父类型的构造函数传参

盗用构造函数继承：

​	可以在子类构造函数中向父类构造函数传参。

​	必须在构造函数中定义方法，因此函数不能重用。 

​	此外，子类也不能访问父类原型上定义的方法，因此所有类型只能使用构造函数模式。

组合继承 ：

​	使用原型链继承原型上的属性和方法，而通过盗用构造函数继承实例属性。

​	既可以把方法定义在原型上以实现重用，又可以让每个实例都有自己的属性。 

​	保留了 instanceof 操作符和 isPrototypeOf()方法识别合成对象的能力。 

​	组合继承其实也存在效率问题。最主要的效率问题就是父类构造函数始终会被调用两次

```javascript
function SuperType(name){ 
 this.name = name; 
 this.colors = ["red", "blue", "green"]; 
} 
SuperType.prototype.sayName = function() { 
 console.log(this.name); 
}; 
function SubType(name, age){ 
 // 继承属性
 SuperType.call(this, name);  //第二次调用构造函数
 this.age = age; 
} 
// 继承方法
SubType.prototype = new SuperType();  //第一次调用构造函数
SubType.prototype.sayAge = function() { 
 console.log(this.age); 
}; 
let instance1 = new SubType("Nicholas", 29); 
instance1.colors.push("black"); 
console.log(instance1.colors); // "red,blue,green,black" 
instance1.sayName(); // "Nicholas"; 
instance1.sayAge(); // 29 
let instance2 = new SubType("Greg", 27); 
console.log(instance2.colors); // "red,blue,green" 
instance2.sayName(); // "Greg"; 
instance2.sayAge(); // 27
```

原型式继承：

​	Object.create()方法将原型式继承的概念规范化了  。

​	非常适合不需要单独创建构造函数，但仍然需要在对象间共享信息的场合。但要记住，属性中包含的引用值始终会在相关对象间共享，跟使用原型模式是一样的。

```javascript
function object(o) { 
 function F() {} 
 F.prototype = o; 
 return new F(); 
}

let person = { 
 name: "Nicholas", 
 friends: ["Shelby", "Court", "Van"] 
}; 
let anotherPerson = Object.create(person); 
anotherPerson.name = "Greg"; 
anotherPerson.friends.push("Rob"); 
let yetAnotherPerson = Object.create(person); 
yetAnotherPerson.name = "Linda"; 
yetAnotherPerson.friends.push("Barbie"); 
console.log(person.friends); // "Shelby,Court,Van,Rob,Barbie"

```

寄生式继承：

```javascript
function createAnother(original){ 
 let clone = object(original); // 通过调用函数创建一个新对象
 clone.sayHi = function() { // 以某种方式增强这个对象
 console.log("hi"); 
 }; 
 return clone; // 返回这个对象
}

let person = { 
 name: "Nicholas", 
 friends: ["Shelby", "Court", "Van"] 
}; 
let anotherPerson = createAnother(person); 
anotherPerson.sayHi(); // "hi"
```

寄生式组合继承：

​	只调用了一次 SuperType 构造函数，避免了 SubType.prototype 上不必要也用不到的属性

```javascript
function inheritPrototype(subType, superType) { 
 let prototype = object(superType.prototype); // 创建对象
 prototype.constructor = subType; // 增强对象 
 subType.prototype = prototype; // 赋值对象
}

function SuperType(name) { 
 this.name = name; 
 this.colors = ["red", "blue", "green"]; 
} 
SuperType.prototype.sayName = function() { 
 console.log(this.name); 
}; 
function SubType(name, age) { 
 SuperType.call(this, name);
    this.age = age; 
} 
inheritPrototype(SubType, SuperType); 
SubType.prototype.sayAge = function() { 
 console.log(this.age); 
};
```

### 10、requestanimationFrame  和 setinterval

- 经过浏览器优化，动画更流畅

- 窗口没激活时，动画将停止，省计算资源
- 更省电，尤其是对移动终端


requestAnimationFrame最大的优势是
由系统来决定回调函数的执行时机。具体一点讲，如果屏幕刷新率是60Hz,那么回调函数就每16.7ms被执行一次，如果刷新率是75Hz，那么这个时间间隔就变成了1000/75=13.3ms，换句话说就是，requestAnimationFrame的步伐跟着系统的刷新步伐走。它能保证回调函数在屏幕每一次的刷新间隔中只被执行一次，这样就不会引起丢帧现象，也不会导致动画出现卡顿的问题

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

​	**只在最顶层调用Hooks**

不要在循环、条件语句或者嵌套方法中调用Hooks。

要在你React方法的顶层里调用。遵循这个方式，你能保证每次组件渲染时Hooks都是按照相同的顺序被调用。这能使React在多个useState和useEffect的情形下正确保存state数据。

​	**只在function组件里调用Hooks**

不在普通的JavaScript方法里调用Hooks。你只能

- 在function组件里调用Hooks
- 在自定义Hooks里调用Hooks

遵循这个能保证所有组件里的有状态逻辑足够清晰。

### 3、Diff算法

- React/Vue 的 DIff 策略使遍历复杂度降低为 O(n)，是一个重大的优化
- React/Vue 在做循环时，一定要加上唯一的 key 值，这样不仅能有效提高 Diff 效率，减少 DOM 的重绘，还能避免一些稀奇古怪的错误
- 尽量减少跨层级的组件改动，尽量使用 v-show/display:none 来保持 DOM 结构的稳定性，防止新增、删除等消耗大量性能的操作
- 尽量减少将节点尾部移动到节点头部等操作，当节点数量过大或更新操作过于频繁时，在一定程度上会影响 React 的渲染性能。
- 另外，React 从 16 版本开始使用了 Fiber 架构，这个架构解决了大型 React 项目的性能问题及一些之前框架的痛点，我会在下一章详细介绍 Fiber 架构的奥秘和其与之前架构的区别

### 4、组件通信

### 5、redux单项数据流

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

