
## es6 class 与 es5 function 的区别
    0.写法不同 es5通过prototype和object.create()实现类和继承。es6通过extends来实现类和继承
    1.class必须用new调用
    2.class中的方法不可用Object.keys(Point.prototype)枚举
    3.class没有变量提升 必须先声明class 之后才能new
    4.class内部无法重写类名
    5.__proto__的指向不同
        es5: 
        function Fa(){}
        function Ch(){}
        Ch.prototype = new Fa()
        Ch的__proto__并没有指向父类Fa，而是指向了Function.prototype
        es6:
        class Fa{}
        class Ch extends Fa{}
        ES6中的class实现类的继承的时候，__proto__是指向父类的
        Ch.__proto__===Fa // true
    6.class内部会采用严格模式

Function，Object，__proto__，prototype 的区别与关联
    1.对象(函数也是对象)有__proto__属性，函数有prototype属性；
    2.对象由函数生成;
    3.生成对象时，对象的__proto__属性指向函数的prototype属性。
    eg: function a() {}  函数a有prototype属性，var b = new a();(通过new关键字 生成对象b),
    b有__proto__属性。b.__proto__ === a.prototype



判断变量类型 
    typeof 可以判断 string,number,boolean,undefined,object,function,symbol
    instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上。
    (对象的constructor属性用于返回创建该对象的函数，也就是我们常说的构造函数。 )
    Array.isArray()


promise async await  generator
promsie.all 
    如何防止其中一个promise reject 引起整个all reject  在每个promise中使用catch方法返回一个常规值

Map和object的区别 
weakMap 和 weakSet

vue 父子组件生命周期
    加载渲染：父beforeCreate->父created->父beforemount->子beforeCreate->
            子created->子beforeMount->子mounted->父mounted
    子组件更新：父beforeUpdate->子beforeUpdate->子updated->父updated
    父组件更新：父beforeUpdate->父updated
    销毁：父beforeDestroy->子beforeDestroy->子destroyed->父destroyed
小程序页面的生命周期
vue.use 
keep-alive 
双向绑定的原理
响应式： 概念：监听数据改变，在变化之后做出响应
    vue2 缺点 1.首先在vue2中 每次只能对obj的一个key进行监听。如果obj中有多个key或者有深度的嵌套，
    就必须进行递归遍历，导致初始化时速度变慢 占用内存多 
    2无法拦截 数组原本的对象属性方法需要使用set和delete方法做处理让原型中的几个方法执行后触发更新
    vue3 proxy的优点  解决了这些问题

为啥要用vnode 
    用js对象来表现的dom树
    性能：
        直接操作dom会消耗大量内存 虚拟dom可以在多次操作后最终与真是dom做对比 然后进行dom操作 提高性能
    兼容性、跨平台： 
        可以根据需要编译成运行时需要的代码

setUp: 
    消除this
    将各个方法整合在一起 增加可读性和维护性  
    复用性
vue-router 看官网
action 与 mutation的区别 
视图触发Action，Action再触发Mutation。
Mutation：
    专注于修改State，理论上是修改State的唯一途径
    必须同步执行。
Action：
    业务代码、异步请求。
    可以异步，但不能直接操作State

常用那些优化手段  渲染 构建 加载 
中间会问网络的

防抖 节流
// 防抖
function debounce(fn,time = 200) {
    let timerId = null;
    const helper = ()=>{
        if(timerId) {
            clearInterval(timerId)
            timerId = null;
        }
        timerId = setTimeout(()=>{
            fn()
        },time)
        
    }
    return helper;
}

// 节流
function throttle(fn,time) {
    let lock = true;
    const helper = ()=>{
        if(!lock) {
            return false
        }
        lock = false;
        setTimeout(()=>{
            fn();
            lock = true;
        },time)
    }
    return helper
}
promise new  bind 深拷贝 JSON.Stringify()的缺点

es6继承与es5的区别 
es6: 使用extend关键字，子类可以继承父类的所有方法和属性 子类的coustructor 必须调用super方法

算法：排序 爬楼梯就常见的一些算法

数据结构：链表 二叉树 

移动端会问与原生的交互方式，一般怎么处理

模块化 js

npm install 安装过程

webpack 的构建过程 用过那些优化方式 
loader和plugin的区别
loader:用于对模块源码的转换，loader描述了webpack如何处理非javascript模块，并且在buld中引入这些依赖。
    loader可以将文件从不同的语言（如TypeScript）转换为JavaScript，
    或者将内联图像转换为data URL。比如说：CSS-Loader，Style-Loader等。

webpack 的优化手段 

浏览器渲染流程

二面，都会贴着项目问：为什么采用某种方式 优缺点是啥 

简历上写的一定要仔细斟酌



