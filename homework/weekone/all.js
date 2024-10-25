// 功課用codepen回報
// 題目連結：https://codepen.io/hexschool/pen/NWRJKBq
// 回報連結：https://codepen.io/Toung/pen/BaXNrLG

// Q1
const janeOld = 14;
const janePhoneNumber = '0955713484';
const isWakeUp = false;

console.log(janeOld,janePhoneNumber,isWakeUp);

// Q2
// const beef = 50;
// const fish = 30;
// const rice = 10;

const beefPrice = 50;
const fishPrice = 30;
const ricePrice = 10;

let walletTotal = 200;
// 助教建議：作業二：有關價錢的變數名稱可以加上 Price 增加可讀性

// Q3
let cost = 0;
cost = (ricePrice*3) + (beefPrice*2) + fishPrice ;

console.log('小明買完飯了，他一共剩下',walletTotal-cost,'元');

// Q4
let peopleCount = 10;
let isTraficRed = true;
let traficStatus = ''
let remainSeconds = 35;
let clouds = 3;
const sun = 1;

if (isTraficRed){
    traficStatus = '紅';
}
else{
    traficStatus = '綠';
}

console.log('小華在馬路上看到了',peopleCount,'個人，且看到',traficStatus,'燈還有',remainSeconds,'秒，因為等',traficStatus,'燈無聊，所以抬頭看到天空有',clouds,'朵白雲，',sun,'顆太陽',);

// Q5
let challengePeople = 62;
let spentDays = 16;
let spentHours = 9;
let points = 50;

// Q6
let a = 1;  //宣告一個變數a，並賦予一個值1，變數型別為數值
let b = 0;  //宣告一個變數a，並賦予一個值1，變數型別為數值
a = 3;      //將變數a的值重新賦予成3
a = b + 2;  //將變數a的值重新賦予成b的值+2，因此目前變數a的值為2=0+2
a - b;      //純計算，但未賦予值，這行單獨執行，結果會是2-0=2
b += 1;     //將變數b的值重新賦予成b自己本身再加一，因此目前變數b的值為b=b+1，1=0+1
// 最後結果a=2，b=1

// Q7畫圖

let arr1 = [1,2,3];
let arr2 = arr1;

arr2.push(4);
arr2 = [5,6,7];
console.log(arr1,arr2);

// Q8
let maryAppleNum = 20;
maryAppleNum -= 5;
maryAppleNum -= 12;
maryAppleNum += 4;

console.log('Mary還有',maryAppleNum,'顆蘋果');

// Q9
let bill = 0;
const hamburgerPrice = 30;
const milkteaPrice = 15;
let eatCount = 0;
eatCount = 3;
bill += hamburgerPrice * eatCount;
eatCount = 32;
bill += milkteaPrice * eatCount;
console.log('Nick 的帳單總共',bill,'元');

// 助教建議：作業九：數量建議設定為變數存放，日後在閱讀程式碼時可以馬上得知此數字代表什麼意思

// Q10
let g = "hello";
let h = 123;
let i = g+h;
let j = true;
let k = h+h;
let l = j+k;

// g是字串
// h是數值
// i是字串
// j是boolean布林
// k是數值
// l是數值