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
  console.log(switchItUp(3));

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
  console.log(bmi);
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
console.log(golfScore(1, 4));

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
console.log(sequentialSizes(8));


//не работает
function arrowArea(a,b) {
  let d = Math.sqrt(a**2 + b**2) / 2;
  let s = 0.5 * a * d;
  console.log(d);
  return s;
}
arrowArea(4, 2);
console.log(arrowArea(4, 2));

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
console.log(reverseNumber(-123));

//2 способ
function reverseNumber1(n) {
  let isNegative = n < 0;  
  let reverseAsString = Math.abs(n).toString().split('').reverse().join('');
  let result = Number(reverseAsString);
  
  return isNegative ? -result : result;
}
reverseNumber1(-123);