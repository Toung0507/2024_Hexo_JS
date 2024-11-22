let number = 10;
let numberText = '10';
let numberAndText = parseInt("10"); // parseInt() 將字串轉成數字

console.log(typeof number); // number
console.log(typeof numberText); // string
console.log(typeof numberAndText); // number

/* 
若回傳值是NaN (Not a Number),可能有兩種原因
1. 透過parseInt()時，中間的內容是放文字字串而非數值，那就會回傳NaN，因為他沒辦法轉成數字
2. 如果是字串*數值，也會回傳Nan，因為字串本身就非數值的字串，所以他會跟第一點一樣沒辦法轉
*/

/* 常用語法
1. parseInt(需放入內容)： 將字串轉成數字：parseInt("10") > 型別從string變成number
2. toString(利用.跟變數連結)： 將數字轉成字串:"10".toString() >結果"10" 型別從number變成string
3. length(利用.跟變數連結)： 取得字串長度:"10".length > 結果會變為2
3-1 除了字串長度外，也可用來取陣列的長度
4. trim()(利用.跟變數連結)： 去除字串前後空白："  10  ".trim() > 結果會變為"10"
*/

/* 樣板字面值 (Template Literals) > 推薦大部分都用這個來顯示需要用到變數的顯示資料
不用+號來連結字串，直接用``來連結
中間的變數可以用${變數}來連結，就不需要用+號一直連結下去，可以用``來一次寫完顯示的字串，
例如：
let myName = 'Toung';
let myJob = 'student';
let plusText = "您好，我是" + myName + "是一位" + myJob + "。";
let tempText = `您好，我是${myName}是一位${myJob}。`;
plusText 跟 tempText 的執行結果都是一樣的：
您好，我是Toung是一位student。
*/

/* 布林值：true(可用1代表)和false(可用0代表)
通常是布林值的變數，宣告時都用is開頭，例如：
let isOpen = false; 代表是否開啟
*/

/* 常見的typeof結果有，string、number、boolean、undefined、null等等
● undefined：代表有宣告但未定義，出現在有宣告變數但沒有賦予值，這代表還是有傳出一個值；尚未被賦予值
變數：a、值：undefined，型別：undefined

● null：代表有宣告也有賦予值，值就是null，型別就是object

★ undefined ：尚未被賦予值 & null：已經被賦予值為null
*/


/* 陣列
新增資料的方式：
1. push():將資料放在陣列的最後
2. unshift():將資料放在陣列的最前
*/


/* 物件 */