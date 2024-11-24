//https://whimsical.com/4oYtsHWjADWsieeNrjY1Xa 題目連結

// 第一題：觀察客戶體溫

// 先設定變數及測試資料；偵測路人甲體溫
let pedestrianDegress = 36;

// 判斷 溫度是否含37.5度以上
if (pedestrianDegress >= 37.5) {
    console.log('您的體溫過高，不得進入');
}
else {
    console.log('歡迎進入');
}
console.log('此題結束');
//第二題：計算成績是否合格

// 先設定變數及測試資料；設定小明成績
let TomScore = 100;

// 判斷小明成績是否合格
if (TomScore >= 60) {
    console.log('恭喜小明，成績合格！');
}
else {
    console.log('小明要加油喔，成績不合格');
}
console.log('此題結束');
//第三題：計算成績評等

// 先設定變數及測試資料；設定小明成績
let TomSecondScore = 50;

// 判斷小明成績是否合格
if (TomSecondScore >= 80) {
    console.log('恭喜小明，成績評等為優秀！');
}
// else if (TomSecondScore >= 60 && TomSecondScore <= 79)    將區間條件定義得更清楚
else if (TomSecondScore >= 60) {
    console.log('小明繼續保持，成績評等為普通');
}
// else if (TomSecondScore <= 59)    將區間條件定義得更符合題目敘述
else if (TomSecondScore < 60) {
    console.log('小明要加油啦，成績評等為不及格')
}
console.log('此題結束');
//第四題：計算成績評等，進階多一個else處理例外狀況

// 先設定變數及測試資料；設定小明成績
let TomThirdScore = "ds";

// 判斷小明成績是否合格
if (TomThirdScore >= 80) {
    console.log('恭喜小明，成績評等為優秀！');
}
else if (TomThirdScore >= 60) {
    console.log('小明繼續保持，成績評等為普通');
}
else if (TomThirdScore < 60) {
    console.log('小明要加油啦，成績評等為不及格');
}
else {
    console.log(`您輸入的好像非成績，無法判斷`);
}
console.log('此題結束');
// 第五題：判斷腰圍

// 先設定變數及測試資料
let sex = "女生";
let waislineCm = 82;
let overStatus = `您是${sex}，而且體型過胖了喔~`;
let thinStatus = `您是${sex}，體型正常喔~`;

// 判斷男生或女生，接著男生超過90為過胖；女生超過80為過胖
if (sex == "男生") {
    if (waislineCm > 90) {
        console.log(overStatus);
    }
    else {
        console.log(thinStatus);
    }
}
else if (sex == "女生") {
    if (waislineCm > 80) {
        console.log(overStatus);
    }
    else {
        console.log(thinStatus);
    }
}
console.log('此題結束');
//第六題：是否達到去遊樂門檻

// 先設定初始值
let chScore = 0;
let enScore = 0;
let mathScore = 0;
let total = 0;

// 賦予對應值
chScore = 10;
enScore = 60;
mathScore = 100;
total = chScore + enScore + mathScore;

//判斷總分是否有達到240
if (total >= 240) {
    console.log('恭喜小朋友，你可以去遊樂園了！');
}
else {
    console.log('要再加油，你的分數不夠去遊樂園！');
}
console.log('此題結束');
//第七題：小美的心情對應會做的事情

// 先設定初始值
let todayScore = 6;

// 判斷指數是否有在8以上
if (todayScore > 8) {
    console.log('小美決定宅在家');
}
else if (todayScore >= 5) {
    console.log('小美決定去血拚');
}
else {
    console.log('小美決定去唱歌');
}