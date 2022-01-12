"use strict";


function uniCode (str) {
    let a =  0;
    for(let i = 0; i < str.length; i++) {
      a += str[i].charCodeAt();
    }
    return a;
  }
  uniCode('aaa');


//строка должна менять число на букву.
  function correct(string) {
    let a = string.split(''); //разбила на массив
    for(let i=0; i < a.length; i++) {
      if(a[i] === '5') {
        a[i] = 's'.toUpperCase();
      } else if(a[i] === '0') {
        a[i] = 'o'.toUpperCase();
      } else if(a[i] === '1') {
        a[i] = 'i'.toUpperCase();
      } else if(a[i] === '') {
        a[i] = '';
      }
    }
    return a.join('');  //собрала в строку
  }
  correct('L0ND0N 55orry');

  //2 вариант. Меняем 1 на I, 5 = S, 0 = O;
function correct1(string) {
  return string.replace(/1/g, 'I').replace(/5/g, 'S').replace(/0/g, 'O');
}
correct1('L0nD0N 5orry');

// при вводе числа выводится это число словом. Чтоб не испол switch сase можно через массив
  function switchItUp(number){
    const words = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    return words[number];
  }

  switchItUp(2);
  // console.log(switchItUp(3));

  // или эту же задачу можно решить через обьекты
  function switchItUp(number){
    var a = number;
    var b = {
      0: "Zero",
      1: "One",
      2: "Two",
      3: "Three",
      4: "Four",
      5: "Five",
      6: "Six",
      7: "Seven",
      8: "Eight",
      9: "Nine"
    };
    return b[a];
  }


  function rentalCarCost(d) {
    const oneDay = 40;
    let res;
    if(d >= 1) {
      res = d * oneDay;
    } if(d >= 3) {
      res = d * oneDay - 20;
    } if(d >= 7) {
      res = d * oneDay - 50;
    }
    return res;

  }
  rentalCarCost(8);

  //определяем индекс массы человека
  function bmi(weight, height) {
    const bmi = weight / (height * height);  //or height**2;
    if(bmi <= 18.5) {
      return 'Underweight';
    } if(bmi <= 25) {
      return 'Normal';
    } if(bmi <= 30) {
      return 'Overweight'
    } if(bmi > 30) {
      return 'Obese';
    }
    return;
  }
  bmi(80, 1.8);

  //2 способ через тернарный оператор
  function bmi1(weight, height) {
  const bmi  = weight/(height*height);
  // console.log(bmi);
  return bmi < 18.5 ? "Underweight" : bmi <=25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";
  }
  bmi1(80, 1.8);

  //3 способо через свит кейс
  function bmi2(weight, height) {
    let bmi = weight / (height * height);
    switch(true){
      case bmi <= 18.5:
        return "Underweight";
      case bmi <= 25.0:
        return "Normal";
      case bmi <= 30.0:
        return "Overweight";
      case bmi > 30:
        return "Obese";
     }
   }
   bmi2(80, 1.8);


const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  if(strokes == 1) {
    return names[strokes];
  } else if(strokes <= par - 2) {
    return names[strokes];
  } else {
    return "Change Me";
  }
}

golfScore(1, 4);
// console.log(golfScore(1, 4));

function sequentialSizes(val) {
  let answer = "";
switch(val) {
  case 1:
  case 2:
  case 3:
    answer = 'Low';
    break;
  case 4:
  case 5:
  case 6:
    answer = 'Mid';
    break;
  case 7:
  case 8:
  case 9:
    answer = 'High';
    break;
  default:
    answer = 'yyyyps';
    break;
}
  return answer;
}

sequentialSizes(1);
// console.log(sequentialSizes(8));


//не работает
function arrowArea(a,b) {
  let d = Math.sqrt(a**2 + b**2) / 2;
  // let s = 0.5 * a * d;
  let f = Math.sqrt(a**2-(b**2/4));
  let s = b*f/2;
  // console.log(d);
  return s;
}
arrowArea(4, 2);
// console.log(arrowArea(4, 2));

function reverseNumber(n) {
  let number = Math.abs(n);
  let res = [...number + ''];
  let a = +res.reverse().join('');

  if(n<0) {
   return -1 * a; //именно умножить а не + 
  }
  return a;  //Или return n<0 ? -a : a; Тогда убираем if
}
reverseNumber(-123);
// console.log(reverseNumber(-123));

//2 способ
function reverseNumber1(n) {
  let isNegative = n < 0;  
  let reverseAsString = Math.abs(n).toString().split('').reverse().join('');
  let result = Number(reverseAsString);
  
  return isNegative ? -result : result;
}
reverseNumber1(-123);

const myArray1 = [];
let i = 5;
while(i >= 0) {
  myArray1.push(i);
  i--;
}


const myArray = [];
for(let i=1; i<=9; i++) {
  if(i % 2 == 1) {
   myArray.push(i);
  }
}
// console.log(myArray);

function arr(arr) {
  let res = arr.sort((a, b) => {
    return b - a;
  })
  let a = res[0] - res[1];
  return a;
}
arr([5,6,1,16]);
// console.log(arr([5,6,1,16]));

function arr1(arr) {  //[5,6,1,16]
  let a = Math.max.apply(null, arr);  //16  нашла наибольшее число в массиве
  arr = arr.filter(item => item !== a); // [5,6,1] удалила наибольшее число 

  let b = Math.max.apply(null, arr);  //6 нашла из оставшегося массива опять второе наибольшее число
  let res = a - b;  //отняла разницу между первым большим и вторым большим числом

  // console.log(res);
  return res;
}
arr1([5,6,1,26]);
// console.log(arr1([5,6,1,16]));


function solution(a, b){
  let res = '';
  if(a.length < b.length) {
    res = a + b + a;
  } else {
    res = b + a + b;
  }
  return res;
}
solution('478','56');

function abbrevName(name){
    let arr = name.split(' ');
    let res = arr.map(item => {
      return item[0];
    })

    return res.join('.');
}
abbrevName('Sam Frank');


function array(arr) {
  // let a = arr.split('');
  // a.pop();
  // a.shift();
  // let b = a.join(' ');
  // console.log(arr[0] + ' ' + arr[arr.length -1]);
  // console.log(b);
  for (let i=0; i<arr.length; i++) {
    
  }
}
array('1,2,5,9');
// console.log(array('1,2,5,9'));

function part(x) {
  const arr = ['ship', 'use', 'food'];
  let num = x.filter(v => arr.includes(v)).length;
  if(arr.some(v => x.includes(v))) return `Mine\'s a Pint ${'!'.repeat(num)}`;
  return 'Lynn';
}

part(['part', 'goust', 'ship']);
part(['part', 'goust']);

// console.log(part(['part', 'goust', 'ship']));
// console.log(part(['part', 'goust']));

function arrayPlus(arr1, arr2) {
  let arrMerge = [...arr1, ...arr2];
  let res =0;
  arrMerge.forEach(i => {
      res += i;
  });
  return res;
}
arrayPlus([1,2,3], [4,5,6]);

//считаем какое кол-во true в массиве
function sheep(arr) {
  let res = [];
  arr.forEach(i => {
      if(i) res.push(i);
  })

  return res.length;
}
sheep([true, true, false]);

//2й способ короткий
function sheep1(arr) {
  return arr.filter(Boolean).length;
}
sheep1([true, true, false]);

//получить число. сделать из него массив и реверс
function dig(n) {
  let str = String(n).split('');
  let res = [];
  for(let i=0; i<str.length; i++) {
      res.push(Number(str[i]));
  }
 
  return res.reverse();
}
dig(123568);

//2 способ короткий
function dig1(n) {
  return String(n).split('').map(Number).reverse();
}
dig1(125698);


function aver(m) {
  let res = 0;
  m.map(i => {
      res += i;
  })
  return res / m.length;
}
aver([2,2,2,2]);


let number = function(array) {
  let res = [];
  array.map((item, index) => {
      res.push(`${index + 1}: ${item}`);
  })
  return res;
}
number(['f','d','t']);

function arr(array) {
  let res = array.flat();
  res.sort((a,b) => {
      return a-b;
  })
  return res;
}
arr([[1,2,5],[8,3,45]]);

function mis(arr) {
  let res = 0;
  let sort = arr.sort((a,b) => {
      return a-b;
  })
  sort.forEach((item, index) => {
      if(index === item) {
          res++;
      }
  })
  return res;
}
mis([0,5,4,8,1,3,2,8,7,9]);
// console.log(mis([0,5,4,1,3,2,8,7,9]));

function array(str) {
  return str.split(',').slice(1, -1).join(' ');
}
array('1,2,3'); 

function big(arr) {
  let n = Math.max(...arr); 
  arr.splice(arr.indexOf(n), 1);
  return n-Math.max(...arr);
}
big([5,9,14,26]);

function smash(w) {
  return w.join(' ');
}
smash(['hello', 'world']);


function twoSort(s) {
  let res = s.sort()[0];
  let a = '';
  for(let i=0; i<res.length; i++) {
    a += res[i] + '***';
  }
  return a.slice(0, -3);
}
twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]);
// console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));

function noSpace(x){
 let arr = x.split(' '); //['8', 'j', '8', '', '', 'mBliB8g', '', 'imjB8B8', '', 'jl', '', 'B']
 let res = '';
 arr.map(i => {
   if(i) {
    res += i;
   }
 })

 return res;
}
noSpace('8 j 8   mBliB8g  imjB8B8  jl  B');

function well(x) {
  let res = '';
  let a = '';
  x.filter(i => {
    if(i.includes('good')) res++;
  })
  if(res === 1 || res === 2) a = 'Publish!';
  if(res > 2) a = 'I smell a serites!';
  if(res === '') a = 'Fail!';
  return a;
}
well(['bad', 'bad', 'bad', 'bad']);


function mix(x) {
  let res = 0;
  x.map(i=> {
    res += Number(i);
  })
  return res;
}
mix([9, 3, '7', '3']);
console.log(mix([9, 3, '7', '3']));


function small(arr, limit) {
  let res = false;
  arr.filter(i => {
    if(i <= limit) {
      res = true;
    }
  })
  return res;
}
small([66,201], 200);
console.log(small([66,201], 200));


const is = function(arr) {
  let res = '';
  arr.map(i => {
      if(Math.sqrt(i)) {
          return res = true;
      } else if(!Math.sqrt(i)){
          return res = false;
      }
  })
  return res;
}
is([1,4,9,16,25,36]);
// console.log(is([1,4,9,16,25,36]));
// console.log(is([1,2,3,4,5,6]));

function even(arr, num) {
  let rev = arr.reverse();
  let res=[];
  rev.filter(i => {
      if(i %2 === 0) res.push(i);
  })
  res.splice(num);
  return res.reverse();
}
even([-22,5,3,11,26,-6,-7,-8,-9,-8,-26],2);
// console.log(even([-22,5,3,11,26,-6,-7,-8,-9,-8,-26],2));

function oddEven (arr) {
  let res = arr.reduce((total, amount) => {
      return total + amount;
  })
  if(res % 2 === 0) res ='even';
  if(res % 2) res = 'odd';

  return res;
}
oddEven([0,1,2,1]);
// console.log(oddEven([0,1,2,1]));

function small (arr, pos) {
  let res = arr.sort((a,b) => {
      return a - b;
  })
  return res[pos-1];
}
small([15,20,7,10,4,3],3);
// console.log(small([15,20,7,10,4,3],3));

function check(arr1, arr2) {
  let res = 0;
  for(let i=0; i<arr1.length; i++) {
      if(arr1[i] === arr2[i]) {
          res += 4;
      } else if(arr2[i] === '') {
          res += 0;
      } else {
          res -= 1;
      }
  }

  return res > 0 ? res : 0;
}
check(['a','a','b','b'], ['a','c','b','d']); //6
// console.log(check(['a','a','b','b'], ['a','c','b','d']));

function smallEnough(a, limit) {
  let res = a.every(item => {
    if(item <= limit) {
      return true;
    }
  })
  return res;
}
smallEnough([66,195],200);
// console.log(smallEnough([66,195],200));

function zeroArray(m, n) {
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
      let row = [];
    for (let j = 0; j < n; j++) {
      row.push(0);
    }
    newArray.push(row);
  }
  return newArray;
}
zeroArray(3, 2);
// console.log(zeroArray(3, 2));


function repeatStr(n, s) {
  let res = '';
  for(let i=0; i<n; i++) {
    res += s;
  }
  return res;
}
repeatStr(3, '*');
// console.log(repeatStr(3, "*"));

var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript2' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];
function one(a) {
  // let b = a.every(item => {
  //   let c = new Set(item.language);
  //   console.log(c);
  // })
 
  // return b;
}
one(list1);

function countDevelopers(list) {
  let a = '';
  list.forEach(item => {
    if(item.continent === 'Europe') {
      return a = 1;
    } else {
      return a = 0;
    }
  })
  // console.log(a);
  return a;
}
countDevelopers(list1);

function descendingOrder(n){
  let a = String(n).split('').sort((a,b) => {
    return b - a;
  });
  // console.log(+a.join('')); 
  return +a.join('');
}
descendingOrder(5689);

function reverse(n){
  // let a = '';
  // n.map(item => {
  //   item += a;
  // })
  // console.log(a);
  // return a;
}
reverse(856247);

//нужно посчитать кол-во положительных чисел и сумму отрицательных чисел. Если массив null или пустой то выдать [].

function countPositivesSumNegatives (input) {
  if (!input || !input.length) return [];
  let pos = input.filter(item => item > 0);  //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  let neg = input.filter(item => item <= 0);  //[-11, -12, -13, -14, -15]
  return [pos.length, Math.floor(neg.reduce((a, b) => a + b, 0))]
}
countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]);   //[10, -65]
countPositivesSumNegatives([]);  //[]
// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
// console.log(countPositivesSumNegatives([]));

function squareSum(numbers){
  let res = 0;
  numbers.map(item => {
    res += item*item;
  })
  return res;
}
squareSum([0, 3, 4, 5]);
// console.log(squareSum([1,2]));

function first(arr, n) {
  if(n === undefined) {
    return arr[0];
  } else {
    return arr.slice(0, n);
  }
}
first(['a', 'b', 'c', 'd', 'e']);

function divisibleBy(numbers, divisor){
  let res = numbers.filter(item => {
    if(item % divisor === 0) {
      return true;
    }
  })
  return res;
}
divisibleBy([1,2,3,4,5,6], 2);

function mergeArrays(arr1, arr2) {
  let res = [...arr1, ...arr2];
  res.sort((a,b) => {
    return a - b;
  })
  return [...new Set(res)];
}
mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]); //[1,2,3,4,5,7,9,10,11,12]

function falsyOrTruthy(arr) {
  let res = arr.filter(item => {
    if(arr.length %2) {
      return !item;
    } else {
      return item;
    }
  })
return res;
}
//короткий варик
// const falsyOrTruthy = a => a.filter(e=> a.length%2 ? !e : e);

falsyOrTruthy([false,NaN,NaN,4,5,{}]);

function arrCheck(value) {
  const res = value.every(item => Array.isArray(item));
  return res;
}
arrCheck([[],{}]);

function countBy(x, n) {
  var z = [];
  for (i = 1; i <= n; i++) {
      z.push(x * i);
  }
  return z;
}
countBy(2,5);

function even(num) {
  let res = 0;
  num.filter((item, index) => {
      if(index %2 === 0) {
          res += item;
      }
  })
  return res * num[num.length-1] ? res * num[num.length-1] : 0;
}
even([2,3,4,5]);

function math(n, k) {
  let res = [0];
  for(let i = 1; i <= n; i++) res.push(i);
  return res.sort().indexOf(k);
  //или через цикл
//    for(let i = 0; i < res.length; i++) {
//        if(res[i] === k) return i + 1;
//    }
}
math(11,2);

const data = [
  {name: 'Alex', language: 'JavaScript', age: 36, githubAdmin: 'yes'},
  {name: 'Lime', language: 'JavaScript', age: 96, githubAdmin: 'no'},
  {name: 'Leo', language: 'JavaScript', age: 52, githubAdmin: 'yes'},
]
function same(data) {
  let a = data[0].language;
  let res = data.every(item => {
      if(item.language === a) {
          return true;
      } else {
          return false;
      }
  })
  return res;
}
same(data);

function maxDiff(list) {
  if(list.length === 0 || list.length === 1) {
    return 0;
  }
    let max = Math.max(...list);
    let min = Math.min(...list);
    return max - min;
};
maxDiff([0, 1, 2, 3, 4, 5, 6]);

// function sumEvenNumbers(input) {
  // let res = 0;
  // input.filter(i => {
  //   if(i%2 == 0) res += i;
  // })
  // return res;
// }

// function sumEvenNumbers(a) {
//   return a.reduce((a, b) => a + (b % 2 == 0 && b), 0)
// }
// const sumEvenNumbers = (input) => input.reduce((acc, cur) => cur % 2 === 0 ? cur + acc : acc, 0);
function sumEvenNumbers(arr) {
  return arr.reduce((acc, item) => {
    if(item %2 === 0) {
      return acc + item;
    } else {
      return acc;
    }
  },0);
}

sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


function filter_list(l) {
  return l.filter(i => typeof i !== 'string' || i === 0);
}
filter_list([1,2,'aasf','1','123',123,0]);


function uniqueSum(lst){
  let unique = [...new Set(lst)];
  if(lst.length === 0) return null;
  return unique.reduce((acc, i) => acc + i, 0);
}
uniqueSum([]);

function findAdmin(list, lang) {
  let res = [];
  list.map(item => {
    if(item.language === lang && item.githubAdmin === 'yes') {
      res.push(item);
    } 
  })
  return res;
}
findAdmin(data, 'JavaScript');

var list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];


function greetDevelopers(list) {
  list.forEach(v=> v.greeting= `Hi ${v.firstName}, what do you like the most about ${v.language}?`)
  return list
}
greetDevelopers([list1]);
// console.log(greetDevelopers([list1]));

//1 неделя от 3 января 2022
function monkeyCount(n) {
  let res = [];
  for(let i = 1; i<=n; i++) {
      res.push(i);
  }
  return res;
}
monkeyCount(15);
// console.log(monkeyCount(15));

function grow(arr) {
  return arr.reduce((acc, item) => {
      return acc * item;
  })
}
grow([1,2,3]);




//================ Type Scripte =======
// const isFetching: boolean = true;
// const isLoading: boolean = false;

// const int: number = 42;
// const float: number = 4.2;
// const num: number = 3e10;

// const message: string = 'Hello';

// const numArray: number[] = [1,2,3];
// const numArray2: Array<number> = [1,2,3];

// const word: string[] = ['Hello', 'Type'];

// //Tuple - тип данных в TS
// const contact: [string, number] = ['Vlad', 12568];

// //Any - тип данных в TS Но в ней нет смысла. это как обычный JS
// let variable: any = 42;
// // ...
// variable = 'New string';
// variable = [];

// //====== тип на примере функции. Тип void - означает что функция ничего нам не вернет
// function sayName(name: string): void {
//   console.log(name);
// }
// sayName(name: 'Leo');

// //Never тип данных в TS. Когда используем этот тип? - когда функция выдает нам ошибку и никогда 
// // не заканчивает свое выполнение либо она постоянно что либо делает
// function throwError(message: string): never {
//   throw new Error(message)
// }
// //эта функция не завершится никогда поэтому указываем тип never
// function infinite(): never {
//   while(true) {
//   }
// }

// //конструкция кот позволяет создавать свои типы в TS, можем создавать примитивные типы и создавать для них элеосы
// //используем спец слово type
// type Login = string
// const log: Login = 'admin';
// //и через type можем создать смешаный тип: строка или число
// type ID = string | number

// type SomeType = string | null | undefined
// //но если мы прописываем пустой тип для функции  и ничегоне не возвращает то лучше использовать тип void

// //Interface По сути мы создаем некоторый тип кот служит для обьектов или для классов
// //где мы указываем какие поля какие функции и какие эл вообще должны присутствовать 
// //у этих обьектов. Интерфейсы нив о сто не компилируются и нужны только на этапе разработки. 
// //Чтоб создать интерфейс используем ключевое слово Interface. Интерфейс может только читать, не можем потом изменять
// //Если параметр не обязательный то пишу знак вопроса - ?. Когда создали интерфейт теперь
// //можем создавать различные обьекты типа Rect
// interface Rect {
//   readonly id: string  //только для чтения, не можем потом присвоить др значение
//   color?: string
//   size: {
//     width: number
//     height: number
//   }
// }
// const rect1: Rect = {
//   id: '123',
//   size: {
//     width: 20,
//     height: 30
//   },
//   color: '#ccc' //могу здесь не писать а потом присвоить после
// }
// rect1.color = 'black'
// //могу др переменную применить к типу Rect или считается этим типом
// const rect3 = {} as Rect
// const rect4 = <Rect>{}        //это старая запись</Rect>

// //Наследование интерфейса. Можем наследовать интерфейс
// interface RectWithArea extends Rect {
//   getArea: () => number   //видео Минина 28 мин ,,TypeScript - Быстрый курс за 70 минут
// }
// //Функции. Напрмиер есть функция кот принмиает 2 числа кот будут слаживаться 
// //и вернуть должна число поэтому вконце опять же пропишу number
// function add(a: number, b: number): number {
//   return a + b;
// }
// //generic типы
// //например одна и та же функция может работать с разными типами данных.
// //массивы могут состоять из разных типов, т.е. Tuple типов. И мы здесь можем
// //использовать generic тип. Указываем что данная функция работает с типом Т reverse<T>, потом 
// //мы принимает массив с типом Т array: T[] и возвращать будем также некоторый массив типа Т-  : T[] и данный параметр
// //будет динамически подстраиваться под те значения кот мы передаем
// const arrNum: Array<number> = [1,2,3]
// const arrStr: Array<string> = ['Hello', 'Leo']

// function reverse<T>(array: T[]): T[] {
//   return array.reverse();
// }
// reverse(arrNum)
// reverse(arrStr)
// //теперь мы можем вызывать функцию реверс с разными типами данных и все будет раб корректно
// //т.к. мы указали некоторый generic тип кот будет подстраиваться под контент кот есть в этом массиве

//1 Выведите с помощью цикла столбец чисел от 1 до 100.
for (let i = 0; i <= 100; i++) {
  // console.log(i);
}

//2 Выведите с помощью цикла столбец чисел от 100 до 1
for(let i = 100; i > 0; i--) {
  // console.log(i);
}

//3 Выведите с помощью цикла столбец четных чисел от 1 до 100
for(let i = 1; i <=100; i++) {
  if(i %2 == 0) {
    // console.log(i);
  }
}

//4 Заполните массив 10-ю иксами с помощью цикла
let res = []
for(let i=0; i < 10; i++) {
  res[i] = 'x';
}
console.log(res);

//5 Заполните массив числами от 1 до 10 с помощью цикла
let res1 = []
for(let i=1; i<=10; i++) {
  res1.push(i);
}
console.log(res1);

//6 Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла. Дроби округляйте до двух знаков в дробной части.
let res2 = [];
for(let i=0; i < 10; i++) {
  res2.push(+Math.random().toFixed(2))
}
console.log(res2);

//7  Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла
let res3 = [];
for(let i=0; i <= 10; i++) {
res3.push(Math.floor(Math.random()*10)+1)
}
console.log(res3);

//8 Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти
let res8 = [1,5,9,8,7,66,54,23,1,5];
for(let i=0; i < res8.length; i++) {
  if(res8[i] > 0 && res8[i] < 10) console.log(res8[i])
}

//9 Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5. Как только будет найден первый такой
// элемент - выведите 'Есть' и оборвите цикл. Если такого элемента нет - ничего не выводите
for(let i=0; i < res8.length; i++) {
  if(res8[i] === 5) {
    console.log('Yes');
    break;
  }
}

//10  Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.
const b = [1,2,3,4,5];  //15
let a = 0;
for(let i=0; i < b.length; i++) {
  a += b[i];
}
console.log(a);

//11 Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.
let aa = 0;
for(let i=0; i < b.length; i++) {
  aa += Math.pow(b[i], 2)
  // aa += b[i] * b[i]
}
console.log(aa);

//12  Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество)
let res12 = 0;
for(let i=0; i < b.length; i++) {
  res12 += b[i]/b.length;
}
console.log(res12);