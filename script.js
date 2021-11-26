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