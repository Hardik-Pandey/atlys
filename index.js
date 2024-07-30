// generate random id
// function generateId() {
//   // Combine timestamp and random number
//   return Date.now().toString(36) + Math.random().toString(36).substring(2, 7);
// }

// /* eslint-disable no-undef */
// currying using bind
// const multiply = (a, b) => {
//   const product = a * b;
//   console.log({ product });
//   return product;
// };
// const multiplyByTwo = multiply.bind(this, 2);
// const multiplyByThree = multiply.bind(this, 3);
// multiplyByTwo(3);
// multiplyByThree(3);

// currying using closures
// const closuresMultiply = a => {
//   return b => {
//     const product = a * b;
//     console.log({ product });
//     return product;
//   };
// };
// const closuresMultiplyByTwo = closuresMultiply(2);
// const closuresMultiplyByThree = closuresMultiply(3);
// closuresMultiplyByTwo(3);
// closuresMultiplyByThree(3);

// this keyword
// ('use strict');
// console.log(this); // globalObject => window in browser, and global in NodeJS

// const func = function () {
//   console.log(this);
//   // "this" is "undefined" in strict mode
//   // By default "this" inside function in non-strict mode is undefined. But due to "this substituion" it is set to globalObject whenever it is null or undefined
// };
// func(); // undefined in strict mode. window in non-strict mode
// debugger;
// window.func(); // window
// console.log(window.location.pathname);

// const obj = {
//   name: 'Hardik',
//   func1: function () {
//     console.log(this);
//   },
//   func2: () => {
//     console.log(this);
//   },
//   func3: function () {
//     const func4 = () => {
//       console.log(this);
//     };
//     func4();
//   },
// };
// obj.func1(); // obj
// obj.func2(); // window
// obj.func3(); // obj

// pollyfill for reduce
// Array.prototype.myReduce = function (callback, initialValue) {
//   let acc = initialValue;
//   this.forEach(item => {
//     acc = callback(acc, item);
//   });
//   return acc;
// };
// const myReduceResult = [1, 2, 3].myReduce((acc, curr) => {
//   return acc + curr;
// }, 0);
// console.log({ myReduceResult });

// pollyfill for filter
// Array.prototype.myFilter = function (callback) {
//   const ans = [];
//   this.forEach((item, index) => {
//     if (callback(item, index)) {
//       ans.push(item);
//     }
//   });
//   return ans;
// };

// const myFilterRes = [1, 2, 3, 4, 5, 6].myFilter(
//   (item, index) => item % 2 === 0
// );
// console.log({ myFilterRes });

// Pollyfill for map
// Array.prototype.myMap = function (cb) {
//   let arr = [];
//   for (let i = 0; i < this.length; i++) {
//     const element = this[i];
//     arr.push(cb(element, i));
//   }
//   return arr;
// };
// const newArr = [1, 2, 3].myMap((item, index) => {
//   return item * index;
// });
// console.log('newArr => ', newArr);

// Pollyfill for bind
// Function.prototype.myBind = function (obj, ...params1) {
//   // above is function. not arrow function
//   return (...params2) => this.apply(obj, [...params1, ...params2]); // here it is arrow function. Reason "this"
// };

// const obj2 = {
//   name: 'Hardik',
// };
// const printName = function (state, country, continent) {
//   console.log(`${this.name} ${state} ${country} ${continent}`);
// };
// const bindedPrintName = printName.myBind(obj2, 'Delhi', 'India');
// bindedPrintName('Asia');

// Throttling and Debouncing
// const expensiveFunction = (...args) => {
//   // for (let i = 0; i < 1000000000; i++) {}
//   console.log('!!!!! expensiveFunction -> args => ', args);
// };

// Method 1:
// const throttle1 = (func, delay) => {
//   let timerId;
//   return (...args) => {
//     if (timerId) {
//       return;
//     }
//     timerId = setTimeout(() => {
//       timerId = null;
//       return func(...args);
//     }, delay);
//   };
// };

// const debounce1 = (func, delay) => {
//   let timerId;
//   return (...args) => {
//     if (timerId) {
//       clearTimeout(timerId);
//     }
//     timerId = setTimeout(() => {
//       func(...args);
//       timerId = null;
//     }, delay);
//   };
// };

// const throttledExpensiveFunction1 = throttle1(expensiveFunction, 3000);
// const debouncedExpensiveFunction1 = debounce1(expensiveFunction, 3000);
// setInterval(() => {
//   throttledExpensiveFunction1('Hardik', 'Pandey', new Date().getSeconds());
//   // debouncedExpensiveFunction1('Hardik', 'Pandey', new Date().getSeconds());
// }, 100); // 3500

// Method 2:
// const throttle2 = (func, delay) => {
//   let lastCall = 0;
//   return (...args) => {
//     const now = new Date().getTime();
//     if (now - lastCall >= delay) {
//       lastCall = now;
//       return func(...args);
//     }
//   };
// };

// const debounce2 = (func, delay) => {
//   let lastCall = 0;
//   return (...args) => {
//     const now = new Date().getTime();
//     if (now - lastCall >= delay) {
//       lastCall = now;
//       return func(...args);
//     }
//     lastCall = now;
//   };
// };

// const throttledExpensiveFunction2 = throttle2(expensiveFunction, 3000);
// const debouncedExpensiveFunction2 = debounce2(expensiveFunction, 3000);
// setInterval(() => {
//   throttledExpensiveFunction2('Hardik', 'Pandey', new Date().getSeconds());
//   // debouncedExpensiveFunction2('Hardik', 'Pandey', new Date().getSeconds());
// }, 100); // 3500

// reduce
// const sum = [1, 2, 3].reduce((acc, curr) => {
//   return acc + curr;
// }, 0);
// console.log('Sum using reduce => ', sum);

// useReducer
// import React, { useReducer } from 'react';

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case 'increment':
//       return state + 1;
//     case 'decrement':
//       return state - 1;
//     case 'reset':
//     return initialState;
//     default:
//       return state;
//   }
// };

// const Comp = () => {
//   const [count, dispatch] = useReducer(reducer, initialState);
//   return (
//     <>
//       Count: {count}
//       <button
//         onClick={() => {
//           dispatch('increment');
//         }}
//       >
//         increment
//       </button>
//       ;
//       <button
//         onClick={() => {
//           dispatch('decrement');
//         }}
//       >
//         decrement
//       </button>
//       ;
//       <button
//         onClick={() => {
//           dispatch('reset');
//         }}
//       >
//         reset
//       </button>
//       ;
//     </>
//   );
// };
// export default Comp;

// const myObj = {
//   a1: {
//     a11: {
//       a111: {
//         a1111: 'a1111',
//         a1112: 'a1112',
//       },
//       a112: {
//         a1121: 'a1121',
//         a1122: 'a1122',
//       },
//     },
//     a12: ['a12', { a121: 'a121', a122: 'a122' }],
//   },
//   a2: 'a2',
// };

// const ans = {
//   a1_a11_a111_a1111: 'a1111',
//   a1_a11_a111_a1112: 'a1112',
//   a1_a11_a112_a1121: 'a1121',
//   a1_a11_a112_a1122: 'a1122',
//   a1_a12: 'a12',
//   a2: 'a2',
// };

// const refactor = obj => {
//   const ans = {};
//   const recursiveFunc = (obj, currKey, ans) => {
//     if (Array.isArray(obj)) {
//       obj.map((item, index) => {
//         return recursiveFunc(item, `${currKey}_${index}`, ans);
//       })
//     } else if (typeof obj === 'object') {
//       Object.keys(obj).forEach(objKey => {
//         if (typeof obj[objKey] === 'object') {
//           return recursiveFunc(obj[objKey], `${currKey}_${objKey}`, ans);
//         } else {
//           ans[`${currKey}_${objKey}`.slice(1)] = obj[objKey];
//           return ans;
//         }
//       });
//     } else {
//       return
//     }
//     return ans;
//   };
//   return recursiveFunc(obj, '', ans);
// };

// const ans = refactor(myObj);
// console.log('!!!!! ans => ', ans);

// Promise.turtle
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('promise1');
//   }, 2000);
// });
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('promise2');
//   }, 4000);
// });
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('promise3');
//   }, 3000);
// });

// Promise.turtle = promises => {
//   return new Promise((resolve, reject) => {
//     let count = 0;
//     const size = promises.length;
//     promises.forEach(promise => {
//       promise
//         .then(res => {
//           count++;
//           if (count === size) {
//             resolve(res);
//           }
//         })
//         .catch(err => {
//           count++;
//           if (count === size) {
//             reject(err);
//           }
//         });
//     });
//   });
// };
// Promise.turtle([promise1, promise2, promise3])
//   .then(slowestPromiseResponse => {
//     console.log({ slowestPromiseResponse });
//   })
//   .catch(slowestPromiseError => {
//     console.log({ slowestPromiseError });
//   });

// Promise.race
// Promise.myRace = promises => {
//   return new Promise((resolve, reject) => {
//     promises.forEach(promise => {
//       promise.then(res => resolve(res)).catch(err => reject(err));
//     });
//   });
// };
// Promise.myRace([promise1, promise2, promise3])
//   .then(fastestPromiseResponse => {
//     console.log({ fastestPromiseResponse });
//   })
//   .catch(fastestPromiseError => {
//     console.log({ fastestPromiseError });
//   });

// MMT SSE R1
// const obj1 = {
//   k1: '1',
//   k2: {
//     k21: 'k21',
//     k22: ['k220', 'k221', 'k222'],
//   },
//   k3: 'k3',
// };
// const myClone = obj => {
//   if (typeof obj !== 'object') {
//     return obj;
//   }
//   if (typeof obj === 'object' && Array.isArray(obj)) {
//     return obj.map(item => {
//       if (typeof item === 'object') {
//         return myClone(item);
//       } else {
//         return item;
//       }
//     });
//   }

//   const newObj = {};
//   for (let key in obj) {
//     if (typeof obj[key] === 'object') {
//       newObj[key] = myClone(obj[key]);
//     } else {
//       newObj[key] = obj[key];
//     }
//   }

//   return newObj;
// };

// const newObj1 = myClone(obj1);
// const newObj2 = myClone(5);
// console.log('newObj1 => ', newObj1);
// console.log('newObj2 => ', newObj2);
// const obj2 = {
//   a: 5,
//   b: {
//     ba: [
//       {
//         x: [2, 3, 4],
//         y: {
//           city: 'delhi',
//           address: {
//             street: 'x',
//             pincode: 123,
//           },
//         },
//       },
//     ],
//   },
// };
// const newObj3 = myClone(obj2);
// obj2.b.ba[0].y.address.pincode = 345;
// console.log('obj2 => ', obj2);
// console.log('newObj3 => ', newObj3);

// /** R2 mmt Sat 12:30pm
//  * MMT SSE FE R1 questions
//  * Features introduced in  React 18, 19
//  * versioning during deployment for cache busting. How without redeploying master can it serve updated web pages in micro-frontends?
//  * What is webpack? Webpack loaders vs plugins
//  * CSS: inline vs inline-block
//  * How deployments are done at Housing.com. How downtime can be reduced?
//  * microfrontends and module federation
//  * CDN
//  * useCallback vs useMemo. throttling vs debouncing
//  * what will happen if you write <footer> at start & <header> at end inside <body> of html file?
//  * Error boundaries
//  */

// const findSumPair = (numbers, k) => {
//   const map = new Map();

//   for (let i = 0; i < numbers.length; i++) {
//     const item = numbers[i];
//     if (map.has(k - item)) {
//       return [map.get(k - item), i];
//     }
//     map.set(item, i);
//   }
//   return [0, 0];
// };

// const spy = (fun, callback) => {
//   return function (...args) {
//     callback();
//     return fun(...args);
//   };
// };

// const compute = (num1, num2, result) => {
//   let strNum1 = num1.toString();
//   let strNum2 = num2.toString();
//   let strResult = result.toString();

//   const maxLen = Math.max(strNum1, strNum2, strResult);
//   strNum1 = strNum1.padStart(maxLen, '0');
//   strNum2 = strNum2.padStart(maxLen, '0');
//   strResult = strResult.padStart(maxLen, '0');

//   let carry = 0;
//   for (let i = maxLen - 1; i >= 0; i--) {
//     const sumDigit = parseInt(strNum1[i]) + parseInt(strNum2[i]) + carry;
//     const resultDigit = parseInt(strResult[i]);
//     carry = Math.floor(sumDigit / 10);
//     if (resultDigit !== sumDigit % 10) {
//       return (maxLen - 1 - i).toString();
//     }
//   }
//   return 'ok';
// };

// Sumo Logic R1
/*
Q: 1
You’re given a digital clock which shows time in format HH:MM, for ex. 3:30, 22:46, 10:10, etc. But our clock is slightly modified
It doesn’t show any leading zeroes in hour & minute. For ex. 01:10 -> 1:10,   12:06 -> 12:6,   06:02 -> 6:2, etc.
A day in the clock can be upto  99 hours long  & an hour can be upto 99 minutes long. i.e clock can show these times as well 42:78, 1:62, 85:1, 99:99, etc.
You’re given the maximum hours (H) and minutes(M) clock can show. You need to find how many minutes during a day the digital clock will have identical digits displayed on it?
By identical digits we mean 3:3, 2:22, 22:2, 0:0, 7:77, 11:11, etc.

Explanation:
H = 24, M = 65
Identical digits clock can show: 0:0, 1:1, 1:11, 2:2, 2:22, 3:3, 3:33, 4:4, 4:44,  5:5, 5:55, 6:6, 7:7, 8:8, 9:9, 11:1,  11:11, 22:2, 22:22
Ans: 19
*/

// function func(h, m) {
//   let ans = 0;
//   for (let i = 0; i <= 9; i++) {
//     if (i === 0) {
//       ans++;
//       continue;
//     }

//     const onlyAtUnit = i; // 3
//     const atTensAndUnit = i * 10 + i; // 33
//     if (onlyAtUnit <= h && onlyAtUnit <= m) {
//       // 3:3
//       ans++;
//     }
//     if (atTensAndUnit <= h && atTensAndUnit <= m) {
//       ans++;
//     }
//     if (onlyAtUnit <= h && atTensAndUnit <= m) {
//       // 3:33
//       ans++;
//     }
//     if (atTensAndUnit <= h && onlyAtUnit <= m) {
//       ans++;
//     }
//   }

//   console.log(ans);
// }

// func(24, 65) // 19
// func(0, 0) // 1
// func(10, 11) // 0:0 1:1 1:11 2:2 3:3 4:4 5:5 6:6 7:7 8:8 9:9
// func(1, 11) // 3

/*
Q:2

You are given a 0-indexed integer array nums and a positive integer x.
You are initially at position 0 in the array and you can visit other positions according to the following rules:
1. f you are currently in position i, then you can move to any position j such that i < j.
2. For each position i that you visit, you get a score of nums[i].
3. If you move from a position i to a position j and the parities of nums[i] and nums[j] differ, then you lose a score of x.
Return the maximum total score you can get.

Input: nums = [2,3,6,1,9,2], x = 5
Explanation: We can visit the following positions in the array: 0 -> 2 -> 3 -> 4.
The corresponding values are 2, 6, 1 and 9. Integers 6 and 1 have different parities, the move 2 -> 3 will decrease your score by x = 5.
The total score will be: 2 + 6 + 1 + 9 - 5 = 13.

*/

// const func2 = (nums, x) => {
//   const n = nums.length;
//   const dp = new Array(n).fill(-Infinity);
//   dp[0] = nums[0];

//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       dp[j] = Math.max(
//         dp[j],
//         dp[i] + nums[j] - (nums[i] % 2 !== nums[j] % 2 ? x : 0)
//       );
//     }
//   }

//   return Math.max(...dp);
// };

// console.log(func2([2, 3, 6, 1, 9, 2], 5));

// mmt r2
// const data = [
//   {
//     id: 1,
//     lowerLimit: 10,
//     upperLimit: 100,
//   },
//   {
//     id: 5,
//     lowerLimit: 11,
//     upperLimit: 101,
//   },
//   {
//     id: 2,
//     upperLimit: 100,
//   },
//   {
//     id: 3,
//     lowerLimit: 10,
//   },
//   {
//     id: 4,
//   },
// ];
// input - 1, 10, 101
// Output - data = [
//   {
// 	  id:2,
// 		upperLimit:100,
// 	},
// 	{
// 		id:4,
// 	},
// 	{
// 		id:1,
// 		lowerLimit:10,
// 		upperLimit:100,
// 	},
//   {
// 		id:5,
// 		lowerLimit:11,
// 		upperLimit:101,
// 	},
// 	{
// 		id:3,
// 		lowerLimit:10,
// 	},
// ]
// let a;
// const func = (arr, x) => {
//   const inRange = [],
//     notInRange = [];

//   arr.forEach(item => {
//     const { lowerLimit = -Infinity, upperLimit = Infinity } = item || {};
//     if (lowerLimit <= x && upperLimit >= x) {
//       inRange.push(item);
//     } else {
//       notInRange.push(item);
//     }
//   });

//   const ans = [...inRange, ...notInRange];
//   console.log('ans => ', a, ans);
//   return ans;
// };

// func(data, 1);
// func(data, 10);
// func(data, 101);

// var arr = [];
// for (var i = 0; i < 5; i++) {
//   arr[i] = () => i;
// }

// console.log(arr[0]());
// console.log(arr[1]());
// console.log(arr[2]());

// p.then(a, b);
// Promise.reject().then(
//   () => console.log('a'),
//   () => console.log('b')
// );
// Promise.reject()
//   .then(
//     () => console.log('a'),
//     () => console.log('b')
//   )

//   .then(
//     () => console.log('a1'),
//     () => console.log('b1')
//   );
// Promise.reject()
//   .then(
//     () => console.log('a'),
//     () => console.log('b')
//   )
//   .then(
//     () => console.log('a1'),
//     () => console.log('b1')
//   )
//   .catch(e => console.log('catch'));

// p.then(a, b);

// Promise.reject().then(() => console.log('a'), () => console.log('b'))

// Promise.reject()
// .then(() => console.log('a'), () => console.log('b'))
// .then(() => console.log('a1'), () => console.log('b1'));

// return new Promise((res, rej) => {
//   rej('hardik')
// }).then((x) => {
//   console.log(x)
//   return x
// }).then((x) => {
//   console.log(x)
//   return x
// }).catch((x) => {
//   console.log(x)
//   return x
// }).then((x) => {
//   console.log(x)
//   return x
// })

// Promise.reject()
//   .then(
//     () => console.log('a')
//     // () => console.log('b')
//   )
//   .then(
//     () => console.log('a1')
//     // () => console.log('b1')
//   )
//   .catch(e => console.log('catch'))
//   .then(
//     () => console.log('a2'),
//     () => console.log('b2')
//   );

// mmt r3
// const checkOverlappingRectangles = (rect1, rect2) => {
//   const rect1BottomLeftX = rect1[0][0]; //
//   const rect1BottomLeftY = rect1[0][1];
//   const rect1TopRightX = rect1[1][0]; //
//   const rect1TopRightY = rect1[1][1];

//   const rect2BottomLeftX = rect2[0][0]; //
//   const rect2BottomLeftY = rect2[0][1];
//   const rect2TopRightX = rect2[1][0]; //
//   const rect2TopRightY = rect2[1][1];

//   if (
//     rect1BottomLeftX > rect2TopRightX ||
//     rect1TopRightX < rect2BottomLeftX ||
//     rect1BottomLeftY > rect2TopRightY ||
//     rect1TopRightY < rect2BottomLeftY
//   ) {
//     return false;
//   }
//   return true;
// };

// const isOverlapping = checkOverlappingRectangles(
//   [
//     [0, 0],
//     [2, 2],
//   ],
//   [
//     [3, 3],
//     [4, 4],
//   ]
// );

// console.log(isOverlapping);

// Ixigo R1
// setTimeout(() => {
//   console.log('setTimeout-called');
// }, 0);

// async function foo(name) {
//   console.log(name, 'start');
//   await console.log(name, 'middle');
//   console.log(name, 'end');
// }

// foo('First');
// foo('Second');

// console.log('ended');

// /**
//  * First start
//  * Second start
//  * ended
//  * First middle
//  * First end
//  * Second middle
//  * Second end
//  * setTimeout-called
//  */

// const promise = new Promise((resolve, reject) => {
//   console.log(1);
//   setTimeout(() => console.log(2));
//   resolve(3);
//   console.log(4);
// });

// promise.then(data => {
//   console.log(data);
// });

// /**
//  * 1
//  * 4
//  * 3
//  * 2
//  */

// const debounce1 = (func, delay) => {
//   let timerId;
//   return (...args) => {
//     if (timerId) {
//       clearTimeout(timerId);
//     }
//     timerId = setTimeout(() => {
//       func(...args);
//     }, delay);
//   };
// };

// const expensiveFunction = () => {
//   for (let i = 0; i < 10000000000; i++) {
//     continue;
//   }
// };

// const debouncedExpensiveFunction1 = debounce1(expensiveFunction, 1000);
// debouncedExpensiveFunction1('a', 'b', 1);

// const setInterval2 = (func, delay) => {
//   setTimeout(() => {
//     func();
//     setInterval2(func, delay);
//   }, delay);

//   // const now = new Date().getTime()
//   // while (true) {

//   // }
// };

// setInterval2(() => {
//   console.log('hi');
// }, 1000);

// ShopDeck R1
// https://jsfiddle.net/k83vsntc/34/
// https://stackblitz.com/edit/react-zsj8zm?file=src%2FApp.js

// ShopDeck R2
// const arr = [1, 2, 3, 4, 5]
// Array.prototype.myReduce = function (...args) {
//     const cb = args[0], initialValue = args[1]
//     let ans = args.length >= 2 ? initialValue : this[0]
//     for (let i = 0; i < this.length; i++) {
//         ans = cb(ans, this[i])
//     }
//     return ans
// }
// const sum = arr.myReduce((acc, curr) => {
//     return acc + curr
// }, 0)
// console.log(sum)
// ==============================================
// typeof 'abc' === 'string'
// typeof {} === 'object'

// const array1 = [1,2,3];
// const array2 = array1;

// array1 == array2   // false
// array1 === array2  // false

// someFunction(array1) === someFunction(array2)

// true?

// const arr2 = []
// const someFunction = (a) => {
//     while (arr2.length) arr2.pop()
//     a.forEach(item => {
//         arr2.push(item)
//     })
//      return arr2;
// }

// ================================
// const employee = {
//   name: 'John Doe',
//   displayName: () => {
//      console.log(`Hello ${this.name}`);
//   },
//   displayName2: function () {
//      console.log(`Hello ${this.name}`);
//   }
// }

// employee.displayName();
// const displayName = employee.displayName;
// const displayName2 = employee.displayName2;

// displayName();    // Hello undefined
// displayName2();   // Hello John Doe // Hello undefined

// 4 years 1 month

// =================================

// Custom Checkout
