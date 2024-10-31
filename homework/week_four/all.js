/*第一階段：請寫 printBmi 函式，並印出對應狀態

printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕」
printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常」
printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重」
printBmi(178, 90)>> 印出 console.log 文字為「您的體重輕度肥胖」
printBmi(178, 110)>> 印出 console.log 文字為「您的體重中度肥胖」
printBmi(178, 130)>> 印出 console.log 文字為「您的體重重度肥胖」
printBmi("身高","體重")>> 印出 console.log 文字為「您的數值輸入錯誤，請重新輸入」
*/

/*第二階段：請程式碼裡加入此變數，並嘗試運用此變數裡的資訊。

printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕，健康指數為藍色」
printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常，健康指數為紅色」
printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重，健康指數為澄色」
printBmi(178, 90)>> 印出 console.log 文字為「您的體重輕度肥胖，健康指數為黃色」
printBmi(178, 110)>> 印出 console.log 文字為「您的體重中度肥胖，健康指數為黑色」
printBmi(178, 130)>> 印出 console.log 文字為「您的體重重度肥胖，健康指數為綠色」
printBmi("身高","體重")>> 印出 console.log 文字為「您的數值輸入錯誤，請重新輸入」*/


/*第三階段：儲存每筆計算資料，多一個變數為 bmiHistoryData，並賦予空陣列來儲存計算物件資料，若數值輸入錯誤，則不儲存。

printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕，健康指數為藍色」
printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常，健康指數為紅色」
printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重，健康指數為澄色」
showHistoryData() >> 印出 console.log 文字為「您總共計算 3 次 BMI 紀錄，最後一次 BMI 指數為 26.83，體重過重！健康指數為澄色！」*/

/*BMI =  	體重(公斤)
    身高2(公尺2)

BMI 狀態	數值
體重過輕	BMI ＜ 18.5
正常範圍	18.5≦BMI＜24
過重	24≦BMI＜27
輕度肥胖	27≦BMI＜30
中度肥胖	30≦BMI＜35
重度肥胖	BMI≧35*/

const bmiData = {
    underWeight: {
        status: '過輕',
        healthIndex: '藍色'
    },
    normalWeight: {
        status: '正常',
        healthIndex: '紅色'
    },
    overWeight: {
        status: '過重',
        healthIndex: '澄色'
    },
    slightObesity: {
        status: '輕度肥胖',
        healthIndex: '黃色'
    },
    middleObesity: {
        status: '中度肥胖',
        healthIndex: '黑色'
    },
    extremeObesity: {
        status: '重度肥胖',
        healthIndex: '綠色'
    }
}

let bmiHistoryData = [];

function addRecord(bmi, status, healthIndex) {
    let record = {};
    record.bmi = bmi;
    record.status = status;
    record.healthIndex = healthIndex;
    bmiHistoryData.push(record);
}

function calculatebmi(height, weight) {
    let bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    let bmitext = '';
    if (bmi >= 35) {
        bmitext = 'extremeObesity';
    }
    else if (bmi >= 30 && bmi < 35) {
        bmitext = 'middleObesity';
    }
    else if (bmi >= 27 && bmi < 30) {
        bmitext = 'slightObesity';
    }
    else if (bmi >= 24 && bmi < 27) {
        bmitext = 'overWeight';
    }
    else if (bmi >= 18.5 && bmi < 24) {
        bmitext = 'normalWeight';
    }
    else if (bmi < 18.5) {
        bmitext = 'underWeight';
    }
    else {
        return `您的數值輸入錯誤，請重新輸入`;
    }
    addRecord(bmi, bmiData[bmitext].status, bmiData[bmitext].healthIndex);
    return `您的體重${bmiData[bmitext].status}，健康指數為${bmiData[bmitext].healthIndex}`;
}



function printBmi(height, weight) {
    let bmiResult = calculatebmi(height, weight);
    console.log(bmiResult);
};

function showHistoryData() {
    console.log(`您總共計算 ${bmiHistoryData.length} 次 BMI 紀錄，最後一次 BMI 指數為 ${bmiHistoryData[bmiHistoryData.length - 1].bmi}，體重${bmiHistoryData[bmiHistoryData.length - 1].status}！健康指數為${bmiHistoryData[bmiHistoryData.length - 1].healthIndex}！`);
}

// printBmi(178, 20)
// printBmi(178, 70)
// printBmi(178, 85)
// printBmi(178, 90)
// printBmi(178, 110)
// printBmi("身高", "體重")
// printBmi(178, 130)

// showHistoryData();

// 以下需一行一行執行
printBmi(178, 20); // 您的體重過輕，健康指數為藍色
printBmi(178, 70); // 您的體重正常，健康指數為紅色
printBmi(178, 85); // 您的體重過重，健康指數為澄色


// showHistoryData(); // 您總共計算 3 次 BMI 紀錄，最後一次 BMI 指數為 26.83，體重過重！健康指數為澄色！