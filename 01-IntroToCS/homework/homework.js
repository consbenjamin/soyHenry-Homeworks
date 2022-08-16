'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let a = 0;
    for (let i = 0; i < num.length; i++) {
       a = a + num[i] * 2 ** (num.length - 1 - i);
    }
    return a;
}

function DecimalABinario(num) {
  // tu codigo aca
  let binario = (num % 2).toString();
    for (let i =0; num > 1; ) {
      num = parseInt(num / 2);
      binario =  (num % 2) + (binario);
 }
     return binario
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}