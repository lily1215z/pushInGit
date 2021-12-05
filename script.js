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
// console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));

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
// console.log(well(['bad', 'bad', 'bad', 'bad']));

function mix(x) {
  let res = 0;
  x.map(i=> {
    res += Number(i);
  })
  return res;
}
mix([9, 3, '7', '3']);
console.log(mix([9, 3, '7', '3']));