// 課前最終作業二

let beautyWallet = 200;
let icePrice = 25;
let buyIceQuantity = 7;
let TotalPrice = icePrice * buyIceQuantity;
let finalbeautyWallet = beautyWallet - TotalPrice;

console.log(`小美剩下${finalbeautyWallet}元`);


let hamburgerPrice = 50;
let cokePrice = 30;
let buyHamburgerQuantity = 1;
let buyCokeQuantity = 2;
let brotherWallet = 180;
let TotalBuyPrice = (hamburgerPrice * buyHamburgerQuantity) + (cokePrice * buyCokeQuantity);
let finalbrotherWallet = brotherWallet - TotalBuyPrice;
console.log(`小華剩下${finalbrotherWallet}元`);

// 課前最終作業三

let a = 50;
a = a + 200;
a += 150;  //等同於a=a+150;
a++; //等同於a=a+1
//+= 跟++ 差別，都有重新賦予值的意思，但差別在++只限於加一或減一，+=或者-=就不限於一而是可以根據寫的數值來做處理

console.log(a);

// 課前最終作業四

// 第一題
/*
「阿貓與阿狗玩棒球，要記錄比分」
流程一：第一回合，阿貓得 3 分，阿狗得 2 分
流程二：第二回合，阿貓得 20 分，阿狗得 3 分
流程三：中間有插曲，就是阿貓作弊，第二回合才得 2 分卻謊報 20 分，所以必須扣掉 18 分
流程四：第三回合，阿貓得 1 分，阿狗得 7 分
*/
let roundNum = 0;
let catScore = 0;
let dogScore = 0;
// 程式碼開始填寫處

// 流程一：第一回合，阿貓得 3 分，阿狗得 2 分
roundNum++;
catScore += 3;
dogScore += 2;

// 流程二：第二回合，阿貓得 20 分，阿狗得 3 分
roundNum++;
catScore += 20;
dogScore += 3;

// 流程三：中間有插曲，就是阿貓作弊，第二回合才得 2 分卻謊報 20 分，所以必須扣掉 18 分
catScore -= 18;

// 流程四：第三回合，阿貓得 1 分，阿狗得 7 分
roundNum++;
catScore += 1;
dogScore += 7;

// 程式碼結束處
// 顯示雙方總得分，console 應印出阿貓 6 分、阿狗 12 分
console.log(`總得分：阿貓 ${catScore} 分、阿狗 ${dogScore} 分`);
// 顯示比了幾回合
console.log(`總共比了 ${roundNum} 回合`);

// 第二題
// 鍛鍊：拆解任務流程與設定變數
/*
「幫媽媽跑腿，紀錄花了多少錢，與跑腿了幾次」
小明的媽媽請她跑腿，小明和媽媽說最多跑三次腿
小明媽給了小明 300 元，請他去買兩罐牛奶跟兩份吐司，小明到超商後看到牛奶 30 元吐司 20 元
當她到櫃台結帳時，櫃台告訴他剛好今天全部品項都打 5 折 !
買回家後，媽媽發現小明的東西都有買齊，就讓小明去玩耍了。
*/// 請試著拆解流程，並透過註解告知您的解題流程
// 最後兩行 code 請用 console.log 印出最後小明花完剩下多少錢，以及當天還能跑腿幾次的變數
// 最後提交 Codepen 連結給我們檢視

// 先將所需的變數及初始值都列出來

//花費金額一開始等於0
let amountSpent = 0;
//小明可跑腿次數
let runErrands = 3;
// 錢包一開始的金額
let WalletAmount = 300;
// 錢包剩餘金額(預設為一開始金額)
let finalWallet = 300;
//牛奶價格
const milkPrice = 30;
let buyMilkQuantity = 2;
// 吐司價格
const toastPrice = 20;
let buytoastQuantity = 2;
// 打折比率
const disCountRate = 0.5;

// 開始執行流程

// 跑腿到超商一次
runErrands--;

// 計算花費金額兩個牛奶兩個吐司
amountSpent = (milkPrice * buyMilkQuantity) + (toastPrice * buytoastQuantity);

// 結帳全品項打五折
amountSpent *= disCountRate;

// 錢包剩餘金額
finalWallet = finalWallet - amountSpent;

console.log(`小明花完剩下 ${finalWallet} 元 ，當天還可跑腿 ${runErrands} 次`);
