// 第一階段：請寫 printBmi 函式，並印出對應狀態

// printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕」
// printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常」
// printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重」
// printBmi(178, 90)>> 印出 console.log 文字為「您的體重輕度肥胖」
// printBmi(178, 110)>> 印出 console.log 文字為「您的體重中度肥胖」
// printBmi(178, 130)>> 印出 console.log 文字為「您的體重重度肥胖」
// printBmi("身高","體重")>> 印出 console.log 文字為「您的數值輸入錯誤，請重新輸入」


// 第二階段：請程式碼裡加入此變數，並嘗試運用此變數裡的資訊。

// printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕，健康指數為藍色」
// printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常，健康指數為紅色」
// printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重，健康指數為澄色」
// printBmi(178, 90)>> 印出 console.log 文字為「您的體重輕度肥胖，健康指數為黃色」
// printBmi(178, 110)>> 印出 console.log 文字為「您的體重中度肥胖，健康指數為黑色」
// printBmi(178, 130)>> 印出 console.log 文字為「您的體重重度肥胖，健康指數為綠色」
// printBmi("身高","體重")>> 印出 console.log 文字為「您的數值輸入錯誤，請重新輸入」


// 第三階段：儲存每筆計算資料，多一個變數為 bmiHistoryData，並賦予空陣列來儲存計算物件資料，若數值輸入錯誤，則不儲存。

// printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕，健康指數為藍色」
// printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常，健康指數為紅色」
// printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重，健康指數為澄色」
// showHistoryData() >> 印出 console.log 文字為「您總共計算 3 次 BMI 紀錄，最後一次 BMI 指數為 26.83，體重過重！健康指數為澄色！」

// BMI =  	體重(公斤)
// 	身高2(公尺2)
	
// BMI 狀態	數值
// 體重過輕	BMI ＜ 18.5
// 正常範圍	18.5≦BMI＜24
// 過重	24≦BMI＜27
// 輕度肥胖	27≦BMI＜30
// 中度肥胖	30≦BMI＜35
// 重度肥胖	BMI≧35

const bmiData = {
    underWeight : {
        status : '過輕' ,
        healthIndex: '藍色'
    },
    normalWeight : {
        status : '正常' ,
        healthIndex: '紅色'
    },
    overWeight : {
        status : '過重' ,
        healthIndex: '澄色'
    },
    slightObesity : {
        status : '輕度肥胖' ,
        healthIndex: '黃色'
    },
    middleObesity : {
        status : '中度肥胖' ,
        healthIndex: '黑色'
    },
    extremeObesity : {
        status : '重度肥胖' ,
        healthIndex: '綠色'
    }
}

function printBmi(height,weight) {
    let bmi = weight / ((height/100)**2) ;
    console.log(bmi);
    if (bmi >= 35) {
        console.log(`您的體重${bmiData.extremeObesity.status}，健康指數為${bmiData.extremeObesity.healthIndex}`);
    } 
    else if(bmi >= 30 && bmi < 35) {
        console.log(`您的體重${bmiData.middleObesity.status}，健康指數為${bmiData.middleObesity.healthIndex}`);
    }
    else if(bmi >= 27 && bmi < 30){
        console.log(`您的體重${bmiData.slightObesity.status}，健康指數為${bmiData.slightObesity.healthIndex}`);
    }
    else if(bmi >= 24 && bmi < 27){
        console.log(`您的體重${bmiData.overWeight.status}，健康指數為${bmiData.overWeight.healthIndex}`);
    }
    else if(bmi >= 18.5 && bmi < 24){
        console.log(`您的體重${bmiData.normalWeight.status}，健康指數為${bmiData.normalWeight.healthIndex}`);
    }
    else if(bmi < 18.5){
        console.log(`您的體重${bmiData.underWeight.status}，健康指數為${bmiData.underWeight.healthIndex}`);
    }
    else{
        console.log(`您的數值輸入錯誤，請重新輸入`);
    }
};
printBmi(178, 20) 
printBmi(178, 70) 
printBmi(178, 85)
printBmi(178, 90)
printBmi(178, 110)
printBmi(178, 130)
printBmi("身高","體重")