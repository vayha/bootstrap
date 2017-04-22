'use strict'



var i;
var tablicaFibo = [];

function poLicz(liczba) {
    var suma = 0;
   

 for (i =0; i <=liczba; i++) {
     
     if (i==0){
         tablicaFibo[i] = 0;
         
     }
     
     else if (i==1){
         tablicaFibo[i] = 1;
     } 
     
     else {
         tablicaFibo[i] = tablicaFibo[i-1] + tablicaFibo[i-2];
     }
     
     suma += tablicaFibo[i];
     
    
     
 }
    console.log(suma);
   
}

poLicz(4);

/*----------------------------------*/

var total = 0;
var count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);
// → 55

var i;
var suma = 0;
for (i=0; i<=10; i++)
    {
     suma +=i;
     console.log(suma);
    }
