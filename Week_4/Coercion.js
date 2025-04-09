console.log(typeof("a"+1)); //string
console.log("1"+2); //behave as string
console.log("1"-2); //behave as like number
console.log(false+1); //false = 0, 0+1=1
console.log(true+1); //true = 1, 1+1=1
console.log("true"+1); //string
console.log(true+false);//0+1=1 as number
console.log(null+1); //null -> 0 + 1 = 1
console.log(null*5); //0 x 5 = 5
//explicit coericion
console.log("***********************************************");
console.log(Boolean(0));
console.log(Number("456"))
console.log(Number("s"))
console.log(Number(false));
console.log(parseInt("s"));
console.log(parseInt("34 kg"));
console.log(parseInt("im only 1 and my age is 24 and i eat 6 eggs /1 meal"));
console.log(parseInt("hello 123"));
console.log(parseInt("123 hello im hello 123"));
console.log(parseInt("123 im only 1 and my age is 24 and i eat 6 eggs /1 meal"));
console.log("***********************************************");
console.log([1] + [2]);         // "" (empty string)
console.log([1] + {});         // "[object Object]"
console.log({} + [0]);         // 0 or "[object Object][object Object]" depending on context
console.log(null == undefined); // true (== allows coercion)
console.log(null === undefined); // false (=== checks type too)









