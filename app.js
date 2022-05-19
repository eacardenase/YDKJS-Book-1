'use strict';

// function foo () {
//   console.log(this.a)
// }

// const a = 5;

// const obj = {
//   a: 10,
//   foo: foo
// }

// obj.foo()

// function foo () {
//   console.log(this.a)
// }

// const obj2 = {
//   a: 42,
//   foo: foo
// }

// const obj1 = {
//   a: 2,
//   obj2: obj2
// }

// obj1.obj2.foo()

// function greeting () {
//     console.log(`Hello, my name is ${this.name} ${this.lastName}`)
//   }

// const Edwin = {
//   name: 'Edwin',
//   lastName: 'Cardenas',
//   greeting: greeting
// }

// Edwin.greeting()

// const Ana = {
//   name: 'Ana',
//   lastName: 'Torres',
//   greeting: greeting
// }

// Ana.greeting()

// function foo () {
//   console.log(this.a)
// }

// var obj = {
//   a: 2,
//   foo: foo
// }

// var bar = obj.foo

// var a = 'oops, global'

// bar()

// function foo () {
//   console.log(this.a);
// }

// function doFoo (fn) {
//   fn();
// }

// var obj = {
//   a: 5,
//   foo: foo
// }

// var a = 'oops, global!'

// doFoo(obj.foo)

/////////////

// function foo () {
//   console.log(this.a);
//   console.log(typeof this.a);
// }

// var obj = {
//   a: 2
// }

// foo.call(obj);

// const obj = {
//   a: 10,
//   bar: function () {
//     console.log(`This is just a test with ${this.a}`)
//   }
// }

// const obj2 = {
//   a: 2
// }

// obj.bar();
// obj.bar.call(obj2);

//////////////////

// function foo () {
//   console.log(this.a);
// }

// var obj = {
//   a: 2
// }

// var bar = function () {
//   foo.call(obj);
// }

// var a = 40;

// bar()
// setTimeout(bar, 100)

// bar.call(window)

///////////////

// function foo (something) {
//   console.log(this.a, something)
//   return this.a + something
// }

// var obj = {
//   a: 2
// }

// var bar = function () {
//   return foo.apply(obj, arguments)
// }

// var b = bar(3)
// console.log(b)

/////////

// function foo (something) {
//   console.log(this.a, something)
//   return this.a + something
// }

// // simple bind
// function bind (fn, obj) {
//   return function () {
//     return fn.apply(obj, arguments)
//   }
// }

// var obj = {
//   a: 7
// }

// var bar = bind(foo, obj)
// var b = bar(3)
// console.log(b)

/////////

// function foo (something) {
//   console.log(this.a, something)
//   return this.a + something
// }

// var obj = {
//   a: 3
// }

// var bar = foo.bind(obj)

// var b = bar(5)
// console.log(b)

// var c = bar()
// console.log(c)

/////////////

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age
//   }
// }

// const person = new Person('Edwin', 25)

// console.log(typeof person) // object

///////////////

// function foo () {
//   console.log(this.a);
// }

// var obj1 = {
//   a: 2,
//   foo: foo
// }

// var obj2 = {
//   a: 3,
//   foo: foo
// }

// obj1.foo(); // 2
// obj2.foo(); // 3

// obj1.foo.call(obj2); // 3
// obj2.foo.call(obj1)  // 2

//////////////

// function foo (something) {
//   this.a = something;
// };

// var obj1 = {
//   foo: foo
// };

// var obj2 = {};

// obj1.foo(2);
// console.log(obj1.a); // 2

// obj1.foo.call(obj2, 3);
// console.log(obj2.a); // 3

// var bar = new obj1.foo(4);
// console.log(obj1.a); // 2
// console.log(bar.a); // 4

//////////////

// function foo (something) {
//   this.a = something;
// }

// var obj = {};

// var bar = foo.bind(obj);
// bar(2);
// console.log(obj.a); // 2

// var baz = new bar(3);
// console.log(obj.a); // 2
// console.log(baz.a); // 3

/////////////

// var prefix = 'foo';

// var myObject = {
//   [prefix + 'bar']: 'hello',
//   [prefix + 'baz']: 'world'
// }

// console.log(myObject['foobar']);
// console.log(myObject.foobaz);

/////////////

// var myArray = ['foo', 42, 'bar'];

// myArray.baz = 'baz';

// console.log(myArray.length);

// console.log(myArray.baz);

/////////////

// function anotherFunction () {};

// var anotherObject = {
//   c: true
// };

// var anotherArray = [];

// var myObject = {
//   a: 2,
//   b: anotherObject,
//   c: anotherArray,
//   d: anotherFunction
// }

// anotherArray.push(anotherObject, myObject);

// console.log(anotherArray)

//////////////

// var myArray = ['foo', 42, 'bar'];

// myArray['10'] = 'baz';

// console.log(myArray.length);
// console.log(myArray[10]);
// console.log(myArray);

///////////////

// var newObj = Object.assign({}, myObject);

// newObj.a;
// newObj.b === anotherObject;
// newObj.c === anotherArray;
// newObj.d === anotherFunction;

/////////////

// var myObject = {
//   a: 2
// };

// console.log(Object.getOwnPropertyDescriptor(myObject, 'a'));

/////////////

// var myObject = {}

// Object.defineProperty(myObject, 'a', {
//   value: 5,
//   writable: false,
//   configurable: false,
//   enumerable: true
// })

// console.log(myObject.a);
// console.log(Object.getOwnPropertyDescriptor(myObject, 'a'));

///////////////

// var myObject = {
//   // define a getter for a
//   get a() {
//     return 2;
//   }
// }

// Object.defineProperty(myObject, 'b', {
//   get: function() {
//     return this.a * 3;
//   },
//   enumerable: true
// })

// console.log(myObject.a)
// console.log(myObject.b)

///////////////

// var myObject = {
//   get a() {
//     return this._a_;
//   },
//   set a(val) {
//     return this._a_ = val * 2;
//   }
// }

// myObject.a = 2;
// console.log(myObject.a);
// myObject.a = 5;
// console.log(myObject.a);

////////////

// var myObject = {
//   a: 2
// };

// console.log("a" in myObject);
// console.log("b" in myObject);

// myObject.hasOwnProperty("a");
// myObject.hasOwnProperty("b");

////////////

// var myObject = {};

// Object.defineProperty(myObject, "a", {
//   value: 2,
//   enumerable: true
// })

// Object.defineProperty(myObject, "b", {
//   value: 3,
//   enumerable: false
// })

// console.log(myObject.b); // 3
// console.log("b" in myObject);
// console.log(myObject.hasOwnProperty("b"));

// for (var i in myObject) {
//   console.log(i, myObject[i]);
// }

///////////

// var myObject = {};

// Object.defineProperty(myObject, "a", {
//   value: 2,
//   enumerable: true
// })

// Object.defineProperty(myObject, "b", {
//   value: 3,
//   enumerable: false
// })

// console.log(myObject.propertyIsEnumerable("a"));
// console.log(myObject.propertyIsEnumerable("b"));

// console.log(Object.keys(myObject));
// console.log(Object.getOwnPropertyNames(myObject));
// console.log(Object.entries(myObject));

//////////////

// var myArray = [1, 2, 3, 4];
// var it = myArray[Symbol.iterator]();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

//////////

// var myObject = {
//   a: 2,
//   b: 3,
//   c: 4
// };

// Object.defineProperty(myObject, Symbol.iterator, {
//   enumerable: false,
//   writable: false,
//   configurable: true,
//   value: function() {
//     var obj = this;
//     var idx = 0;
//     var kys = Object.keys(obj);

//     return {
//       next: function () {
//         return {
//           value: obj[kys[idx++]],
//           done: (idx > kys.length)
//         }
//       }
//     }
//   }
// });

// var it = myObject[Symbol.iterator]();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// for (var v of myObject) {
//   console.log(v);
// };

///////////////

// explicit mixin example

// function mixin(sourceObj, targetObj) {
//     for (var key in sourceObj) {
//         if (!(key in targetObj)) {
//             targetObj[key] = sourceObj[key];
//         }
//     }

//     return targetObj;
// }

// var Vehicle = {
//     engines: 1,
//     ignition: function() {
//         console.log('Turning on my engine');
//     },
//     drive: function() {
//         this.ignition();
//         console.log('Steering and mooving forward');
//     }
// }

// var Car = mixin(Vehicle, {
//     wheels: 4,
//     drive: function() {
//         Vehicle.drive.call(this);
//         console.log(`Rolling on all ${this.wheels} wheels!`);
//     }
// });

// Car.drive();
// console.log(Car.engines);

//////////////////

// parasitic inheritance

// function Vehicle() {
//     this.engines = 1;
// }

// Vehicle.prototype.ignition = function() {
//     console.log('Turning on my engine.');
// };

// Vehicle.prototype.drive = function() {
//     this.ignition();
//     console.log('Steering and moving forward!');
// };

// // Parasitic Class
// function Car() {
//     var car = new Vehicle();

//     car.wheels = 4;

//     var vehDrive = car.drive;

//     car.drive = function() {
//         vehDrive.call(this);
//         console.log(`Rolling on all ${this.wheels} wheels!`);
//     }

//     return car;
// };

// var myCar = new Car();
// myCar.drive();

///////////

// implicit mixin

// var Something = {
//     cool: function() {
//         this.greeting = 'Hello World';
//         this.count = this.count ? this.count + 1 : 1;
//     }
// }

// Something.cool();
// Something.cool();
// console.log(Something.greeting);
// console.log(Something.count);

// var Another = {
//     cool: function () {
//         Something.cool.call(this);
//     }
// }

// Another.cool();
// console.log(Another.greeting);
// console.log(Another.count);

/*
######### Chapter 5. Prototypes
*/

// var myObject = {};

// Object.defineProperty(myObject, "a", {
//     value: 2,
//     writable: false
// });

// var anotherObject = Object.create(myObject);

// var lastObject = Object.create(anotherObject);

// console.log(anotherObject.a);

// console.log(lastObject.a);

// for (let prop in anotherObject) {
//     console.log(prop);
// }

// console.log("a" in anotherObject);

// anotherObject.a = 4;
// console.log(myObject.a);
// console.log(anotherObject.a);
// console.log(anotherObject.hasOwnProperty("a"));

/////////

// var anotherObject = {
//     a: 2
// }

// var myObject = Object.create(anotherObject);

// console.log(anotherObject.a);
// console.log(myObject.a);

// console.log(anotherObject.hasOwnProperty('a'))
// console.log(myObject.hasOwnProperty('a'))

// myObject.a++;

// console.log(anotherObject.a)
// console.log(myObject.a)

// console.log(myObject.hasOwnProperty('a'))

///////////

// function Foo () {
//     this.b = 2;
// }

// const a = new Foo();

// console.log(Foo.prototype)
// console.log(Object.getPrototypeOf(a) === Foo.prototype);

//////////

// function Car() {
//   this.engine = 1;
//   this.wheels = 4;
// }

// const myCar = new Car();
// console.log(myCar);

//////////////

// Prototypal Inheritance

// function Foo(name) {
//     this.name = name;
// }

// Foo.prototype.myName = function () {
//     return this.name;
// };

// function Bar(name, label) {
//     Foo.call(this, name);
//     this.label = label;
// }

// Bar.prototype = Object.create(Foo.prototype);

// // console.log(Bar.prototype.constructor);

// Bar.prototype.constructor = Bar;

// // console.log(Bar.prototype.constructor);

// Bar.prototype.myLabel = function () {
//     return this.label;
// };

// const a = new Bar('a', 'obj a');

// console.log(a.myName());
// console.log(a.myLabel());

// ////////////////

// function Foo () {}
// Foo.prototype.blah = function(){}

// const a = new Foo()

// console.log(a instanceof Foo);
// console.log(Foo.prototype.isPrototypeOf(a));
// console.log(Object.getPrototypeOf(a)  === Foo.prototype)
// console.log(a.__proto__);
// console.log(Foo.__proto__)
// console.log(a.__proto__ === Foo.prototype);

// //////////

// const foo = {
//     something: function() {
//         console.log('Tell me something good...');
//     }
// }

// const bar = Object.create(foo)

// bar.something()

// //////////

// const anotherObject = {
//     a: 2
// }

// const myObject = Object.create(anotherObject, {
//     b: {
//         enumerable: false,
//         writable: true,
//         configurable: false,
//         value: 3
//     },
//     c: {
//         enumerable: true,
//         writable: false,
//         configurable: false,
//         value: 4
//     }
// })

// console.log(myObject.hasOwnProperty('a'))
// console.log(myObject.hasOwnProperty('b'))
// console.log(myObject.hasOwnProperty('c'))

// console.log(myObject.a)
// console.log(myObject.b)
// console.log(myObject.c)

// Partial pollyfill of Object.create

// function createAndLinkObject(o){
//     function F() {}
//     F.prototype = o
//     return new F()
// }

// const anotherObject = {
//     a: 2
// }

// const myObject = createAndLinkObject(anotherObject)

// console.log(myObject.a);

// //////////

// const myObject = {
//     cool: function() {
//         console.log('Cool!');
//     }
// }

// const anotherObject = Object.create(myObject);

// anotherObject.cool();

// Delegation Design Pattern

// const myObject = {
//     cool: function() {
//         console.log('Cool!');
//     },
//     name: 'Edwin'
// }

// const anotherObject = Object.create(myObject)

// anotherObject.doCool = function() {
//     this.cool()
// }

// anotherObject.doCool()

// console.log(Object.valueOf(myObject))
// console.log(Object.valueOf(anotherObject))
// console.log(anotherObject.valueOf(myObject))
// console.log(myObject.valueOf(anotherObject))

/*
######### Chapter 6. Behavior Delegation
*/

// class Task {
//     constructor(ID) {
//         this.id = ID;
//     }

//     outputTask() {
//         console.log(this.id);
//     }
// }

// class XYZ extends Task {
//     constructor(ID, label) {
//         super(ID);
//         this.label = label
//     }

//     outputTask() {
//         super.outputTask();
//         console.log(this.label);
//     }
// }

// const task = new Task('123')
// task.outputTask()

// const xyz = new XYZ('123', 'Bread')
// xyz.outputTask()

// ///////////

// const Task = {
//     setID: function(ID) {
//         this.id = ID
//     },
//     outputID: function() {
//         console.log(this.id);
//     }
// }

// const XYZ = Object.create(Task)

// XYZ.prepareTask = function(ID, Label) {
//     this.setID(ID);
//     this.label = Label
// }

// XYZ.outputTaskDetails = function() {
//     this.outputID();
//     console.log(this.label);
// }

// XYZ.prepareTask('123', 'Bread')
// XYZ.outputTaskDetails()

// /////////// Simple recursion? 

// const Foo = {
//     bar: function bar(x) {
//         if (x < 10) {
//             return bar(x * 2)
//         }

//         return x;
//     }
// }

// console.log(Foo.bar(10));
// console.log(Foo.bar(9));

/*
######### Appendix A - ES6 Classes
*/

// class C {
//     constructor() {
//         this.num = Math.random();
//     }

//     rand() {
//         console.log('Random: ', this.num);
//     }
// }

// const c1 = new C();
// c1.rand()

// C.prototype.rand = function() {
//     console.log('Random: ' + Math.round(this.num * 1000));
// }

// const c2 = new C();
// c2.rand();
// c1.rand();

// console.log(C.prototype.rand());

// /////////

// class P {
//     foo() {
//         console.log('P.foo');
//     }
// }

// class C extends P {
//     foo() {
//         super.foo();
//     }
// }

// const c = new C();
// c.foo()