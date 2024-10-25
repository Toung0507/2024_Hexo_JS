// 功課用codepen回報
// 題目連結：https://codepen.io/hexschool/pen/ZEpwNwy
// 回報連結：https://codepen.io/Toung/pen/poMyYGG

// Q1

// 我的答案：
// true
// true
// true
// false
// true
// false
// true
// flase

let a = 4;
let b = 5;
console.log(a>0);
console.log(b>a);
console.log((a+b)>1);

let c = 5;
let d = 6;
console.log( c == d);
console.log( c !== d);

let e = 8;
let f = 5;
console.log(f>=e);
console.log(f!=e);
console.log(f==e);
console.log("Q1 The End");

// Q2

// 我的答案：
// false
// true
// false -> 答案是true；g*h是64，是數值也是64，所以會是true
 
// false -> 答案是true；i+j="99"，非嚴格比較，所以會被轉為數值跟99比較，兩個的數值相等
// true
// false
// 第二跟第三的嚴格比較就不會被轉成字串或數值了，所以只有第二個是true
 
//  true ， k*l結果是10，l會被轉為數值跟2相乘
let g = 8;
let h = "8";
console.log(g*h==88);
console.log(g*h==64);
console.log(g*h===64); // 錯


let i = "9" ;
let j = "9" ;
console.log(i+j==99); //錯
console.log(i+j==="99");
console.log(i+j===99);

let k = 2;
var l = "5";
console.log((k*l)>=5);
console.log("Q2 The End");

// Q3

// 我的答案：
// m 為：3
// m 為：15
// 原因是：
// 2>1是true，所以會進到if內，將m的值重新賦予成3
// true，代表直接進到if內，將n = n +10 15=5+10

let m = 1;

if(2>1){
  m = 3
}
console.log(m);

let n = 5;

if(true){
  n+=10
}
console.log(n);
console.log("Q3 The End");

// Q4

let childHeight = 133;
let restaurantChildHeight = 120;
let bill = 600;
let adultPrice = 600;
let childPrice = 300;

if (childHeight <= restaurantChildHeight) {
    bill += childPrice;
}
else{
    bill += adultPrice;
}

console.log(`他們總共支付了${bill}元`);
console.log("Q4 The End");

// Q5

let badge = 3;
let needAppleNum = 5;
let buyAppleNum = 4;

if (needAppleNum == buyAppleNum){
    badge += 3;
}
else{
    badge += 1;
}

console.log(`小華一共得了 ${badge} 個徽章`);
console.log("Q5 The End");

// Q6

// 我的回答：
// true
// false
// true

//是否有折扣資格
// true
// 原因是：hamNum > 10 此條件有成立，||代表OR，有一成立就是true

let o = 200;
let p = 300;

console.log( o == 200 || p == 300 );
console.log( o !== 200 || p !== 300 );
console.log( o == 200 && p == 300 );

let hamPrice = 50;
let hamNum = 20;
let isSale = 3000 <= hamPrice * hamNum || hamNum > 10;

console.log(isSale);
console.log("Q6 The End");

// Q7

let weight = 60;

if (weight >= 80){
    console.log(`過重囉`);
}
else if (weight >=60 && weight < 80){
    console.log(`正常體重~`);
}
else if (weight >=40 && weight < 60) {
    console.log(`過輕了！`);
}
else{
    console.log(`太太太輕了，你要飄走了`);
}
console.log("Q7 The End");

// Q8

let giftNum = 200 ; /* 贈品數量 */
let giftPriceRule = 399 ; /* 贈品消費門檻 */
let BobPrice = 500 ; /* Bob消費金額 */
let BobIsVip = false ; /* Bob是否為Vip */

if(BobIsVip || giftPriceRule <= BobPrice){
    console.log("客戶您好，您有符合贈品資格");
    giftNum --;
}
else{
    console.log("客戶您好，您沒有符合贈品資格");
}

console.log(`贈品還剩下${giftNum}個`);
console.log("Q8 The End");

// Q9

let mingMoney = 870000 ; /* 小明全年個人所得 */
let mingBill = 5000 ; /* 小明稅收帳單，並已加入條件一基本費5000元 */

if (mingMoney > 1000000) {
    mingBill += mingMoney*0.8;
}
else if(mingMoney >= 540000 && mingMoney <= 1000000){
    mingBill += mingMoney*0.5;
}
else{
    mingBill += mingMoney*0.3;
}

console.log(`小明總共需支付${mingBill}元帳單`);
console.log("Q9 The End");

// Q10

let playerA = '剪刀';
let playerB = '剪刀';

if (playerA === playerB) {
    console.log(`平手~`);
}
else if ( 
    (playerA == '剪刀' && playerB == '布') ||  
    (playerA == '布' && playerB == '石頭') || 
    (playerA == '石頭' && playerB == '剪刀') ) {
    console.log(`A贏啦`);
}
else{
    console.log(`B贏啦`);
}
console.log("Q10 The End");