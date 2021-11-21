// var a = 'MukhammadAliUbaydullayev'
// console.log(a.slice(9, 12));    // "Ali"


// ---------------------------------------------------------------


// console.log('abc'.padEnd(10));         // "abc       "
// console.log('abc'.padEnd(10, "foo"));  // "abcfoofoof"
// console.log('abc'.padEnd(10,"123456")); // "abc123"


// ---------------------------------------------------------------


// var anyString = 'Mozilla';

// // Отобразит 'Moz'
// console.log(anyString.substring(0, 3));
// console.log(anyString.substring(3, 0));

// // Отобразит 'lla'
// console.log(anyString.substring(4, 7));
// console.log(anyString.substring(7, 4));

// // Отобразит 'Mozill'
// console.log(anyString.substring(0, 6));

// // Отобразит 'Mozilla'
// console.log(anyString.substring(0, 7));
// console.log(anyString.substring(0, 10));


// ---------------------------------------------------------------


// В следующем примере indexOf() используется для поиска значений в массиве.

// var array = [2, 5, 9];
// console.log(array.indexOf(2));   // 0
// console.log(array.indexOf(7));     // -1
// console.log(array.indexOf(9, 2));  // 2
// console.log(array.indexOf(2, -1)); // -1
// console.log(array.indexOf(2, -3)); // 0


// ---------------------------------------------------------------


// console.log('канал'.lastIndexOf('а'));     // вернёт 3
// console.log('канал'.lastIndexOf('а', 2));  // вернёт 1
// console.log('канал'.lastIndexOf('а', 0));  // вернёт -1
// console.log('канал'.lastIndexOf('ч'));     // вернёт -1


// ---------------------------------------------------------------

// search()Метод ищет строку для значения.

// let text = "Mr. Blue has a blue house";
// let position = text.search("Blue");
// console.log(position);              // 4 


// ---------------------------------------------------------------

// Метод includes()определяет, содержит ли массивный элемент, возвращаемый в зависимости от этого trueили false.

// const array1 = [1, 2, 3];
// const pets = ['cat', 'dog', 'bat'];

// console.log(array1.includes(2));   // true
// console.log(pets.includes('cat')); // true
// console.log(pets.includes('at'));  //   false


// ---------------------------------------------------------------

// let a = 'sdahsf'
// let b = a.split('')  
// console.log(b);         // [ 's', 'd', 'a', 'h', 's', 'f' ]
// b = b.join('')
// console.log(b);         // sdahsf


// ---------------------------------------------------------------


// let a = 'abc'        
// a = a.repeat(2)      // 2 раза
// console.log(a);      // 'abcabs' 


// ---------------------------------------------------------------


// let text = "Visit Microsoft!";
// let result = text.replace("Microsoft", "W3Schools");  // 'Mictasoft заменяется на W3Schools'
// console.log(result);            //  'Visit W3Schools!'


// replace()Метод ищет строку для значения или регулярного выражения.

// В replace()метод возвращает новую строку со значением (S) заменен.

// replace()Метод не изменяет исходную строку.


// ---------------------------------------------------------------

// Метод startsWith()помогает определить, начинается ли строка с обозначенными в скобках, 
// возвращая, соответственно, trueили false.  str.endsWith(searchString[, length])



// var str = 'Быть или не быть, вот в чём вопрос.';
// console.log(str.startsWith('Быть'));            // true
// console.log(str.startsWith('не быть'));         // false
// console.log(str.startsWith('не быть', 9));      // true


// ---------------------------------------------------------------


// Метод endsWith()позволяет определить, соответствует ли строка символами указанными в скобках,
//  возвращая, соответственно, trueили false   str.endsWith(searchString[, length])


// var str = 'Быть или не быть, вот в чём вопрос.';
// console.log(str.endsWith('вопрос.'));   // true
// console.log(str.endsWith('быть'));      // false
// console.log(str.endsWith('быть', 16));  // true


// ---------------------------------------------------------------


// Метод toUpperCase()возвращает значение строки, преобразованное в верхний регистр.
//  Метод toUpperCase()не изменяет значение самой строки.


// console.log('АЛФАВИТ'.toLowerCase()); // 'алфавит'
// console.log('алфавит'.toUpperCase()); // 'АЛФАВИТ'   


// ---------------------------------------------------------------


// Другой пример, в котором .trim() убирает пробельные символы только с одной стороны.


// var orig = '   foo  ';
// console.log(orig.trim()); // 'foo'
// var orig = 'foo    ';
// console.log(orig.trim()); // 'foo'


// ---------------------------------------------------------------


let myFunction = (a, b) => a * b;
console.log(myFunction(5, 5));


// hello = function() {
//     return "Hello World!"
// }
// console.log(hello());


// hello1 = () => {
//     return "Hello World!"
// }
// console.log(hello1());


// ---------------------------------------------------------------







// ---------------------------------------------------------------





// ---------------------------------------------------------------





// ---------------------------------------------------------------





// ---------------------------------------------------------------

