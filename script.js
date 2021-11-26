"use strict";


function uniCode (str) {
    let a =  0;
    for(let i = 0; i < str.length; i++) {
      a += str[i].charCodeAt();
    }
    console.log(a);
    return a;
  }
  uniCode('aaa');


  //код не работает. Нужно доделать
  // function correct(string) {
  //   for(let i=0; i < string.length; i++) {
  //     if(string[i] == 5) {
  //       return string = string.replace(/5/g, 's').toUpperCase();
  //     } else if (string[i] == 0) {
  //       console.log(string);
  //       return string = string.replace(/0/g, 'o').toUpperCase();
  //     }
  //   }

  // }
  // correct('L0ND015N');
 