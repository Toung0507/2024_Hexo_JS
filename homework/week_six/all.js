let data = [];

// 透過axios抓取資料
axios.get('https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json')
    .then(function (response) {
        data = response.data.data; //
        renderData();
    })
    .catch(function (error) {
        console.error("抓取資料失敗：", error);
    });

// 渲染資料
function renderData() {
    init();
    displayData(); // 顯示全部資料
    bindSearchEvent(); // 綁定搜尋事件
    init_alert();
}

// 表單的各input區塊
const ticketName = document.querySelector('#ticketName');// 套票名稱
const ticketImgUrl = document.querySelector('#ticketImgUrl'); //圖片網址
const ticketRegion = document.querySelector('#ticketRegion'); //景點地區
const ticketPrice = document.querySelector('#ticketPrice'); //套票金額
const ticketNum = document.querySelector('#ticketNum'); //套票組數
const ticketRate = document.querySelector('#ticketRate'); //套票星級
const ticketDescription = document.querySelector('#ticketDescription'); //套票描述

// 新增套票的按鈕DOM
const addTicket_btn = document.querySelector('.addTicket-btn');

// 選取錯誤訊息區塊的DOM
const alert_message = document.querySelectorAll('.alert-message');

// 選取搜尋按鈕的DOM
const searchArea = document.querySelector(".regionSearch");

// 選取搜尋結果文字的DOM
const searchResult = document.querySelector("#searchResult-text");

// 選取套票卡片區的DOM
const listArea = document.querySelector(".ticketCard-area");

// 選取查無關鍵字區的DOM
const cantFind_area = document.querySelector('.cantFind-area');

// 用於串接卡片區的li
let htmlContent = '';

// 網頁初始執行時顯示
function init() {
    displayData();
}

// 初始化隱藏錯誤訊息區塊
function init_alert() {
    alert_message.forEach(function (item) {
        item.setAttribute("style", "display:none");
    });
}

// 初始化表單
function init_filed() {
    ticketName.value = "";
    ticketImgUrl.value = "";
    ticketRegion.value = "";
    ticketPrice.value = "";
    ticketNum.value = "";
    ticketRate.value = "";
    ticketDescription.value = "";
}

// 檢查各欄位是否皆有輸入
function chkField(newticketObj, count) {
    // 將表單欄位改為陣列
    const formFiledValue = [
        {
            "name": 'name',
            "value": newticketObj.name,
            "index": 0
        },
        {
            "name": 'imgUrl',
            "value": newticketObj.imgUrl,
            "index": 1
        },
        {
            "name": 'area',
            "value": newticketObj.area,
            "index": 2
        },
        {
            "name": 'price',
            "value": newticketObj.price,
            "index": 3
        },
        {
            "name": 'group',
            "value": newticketObj.group,
            "index": 4
        },
        {
            "name": 'rate',
            "value": newticketObj.rate,
            "index": 5
        },
        {
            "name": 'description',
            "value": newticketObj.description,
            "index": 6
        }
    ];

    // 依照表單順序檢查
    formFiledValue.forEach(function (item) {
        // 判斷是否為空值
        if (item.value == "") {
            count++;
            alert_message[item.index].removeAttribute("style");
        }
        // 判斷星級
        if (item.name == 'rate' && item.value != "") {
            if (item.value < 1 || item.value > 10) {
                count++;
                Swal.fire({
                    // position: "top-end",
                    icon: "warning",
                    title: "星級請輸入1到10之間",
                    showConfirmButton: true
                    // timer: 1500
                });
            }
        }
    });
    return count;
}

// 顯示全部資料
function displayData() {
    let htmlContent = '';
    data.forEach(function (item) {
        let liContent = `<li class="ticketCard">
                        <div class="ticketCard-img">
                            <a href="#">
                                <img src="${item.imgUrl}"
                                    alt="">
                            </a>
                            <div class="ticketCard-region">${item.area}</div>
                            <div class="ticketCard-rank">${item.rate}</div>
                        </div>
                        <div class="ticketCard-content">
                            <div>
                                <h3>
                                    <a href="#" class="ticketCard-name">${item.name}</a>
                                </h3>
                                <p class="ticketCard-description">
                                    ${item.description}
                                </p>
                            </div>
                            <div class="ticketCard-info">
                                <div class="ticketCard-num">
                                    <p>
                                        <span><i class="fas fa-exclamation-circle"></i></span>
                                        剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
                                    </p>
                                </div>
                                <p class="ticketCard-price">
                                    TWD <span id="ticketCard-price">$${item.price}</span>
                                </p>
                            </div>
                        </div>
                    </li>
                    `;
        htmlContent += liContent;
    });
    listArea.innerHTML = htmlContent;
    searchArea.value = '地區搜尋';
    searchResult.textContent = `本次搜尋共 ${data.length} 筆資料`;
    cantFind_area.setAttribute("style", "display:none");
}

// 顯示符合條件的資料
function displayConditionData(item) {
    let liContent = `<li class="ticketCard">
    <div class="ticketCard-img">
        <a href="#">
            <img src="${item.imgUrl}"
                alt="">
        </a>
        <div class="ticketCard-region">${item.area}</div>
        <div class="ticketCard-rank">${item.rate}</div>
    </div>
    <div class="ticketCard-content">
        <div>
            <h3>
                <a href="#" class="ticketCard-name">${item.name}</a>
            </h3>
            <p class="ticketCard-description">
                ${item.description}
            </p>
        </div>
        <div class="ticketCard-info">
            <div class="ticketCard-num">
                <p>
                    <span><i class="fas fa-exclamation-circle"></i></span>
                    剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
                </p>
            </div>
            <p class="ticketCard-price">
                TWD <span id="ticketCard-price">$${item.price}</span>
            </p>
        </div>
    </div>
</li>
`;
    htmlContent += liContent;
}

// 新增套票區塊
addTicket_btn.addEventListener("click", function () {
    // 初始化變數跟值
    let count = 0; //計算是否有未輸入的資料
    init_alert();  //將錯誤訊息皆隱藏，重新判斷

    // 設定新的套票object：依照表單順序
    let newticketObj = {
        "id": data.length,
        "name": ticketName.value,
        "imgUrl": ticketImgUrl.value,
        "area": ticketRegion.value,
        "price": ticketPrice.value,
        "group": ticketNum.value,
        "rate": ticketRate.value,
        "description": ticketDescription.value
    };

    // 呼叫函示確認每個欄位是有填寫及填寫正確
    count = chkField(newticketObj, count);

    // 若皆有填寫
    if (count == 0) {
        data.push(newticketObj);  // 新增資料
        displayData();            // 重新顯示
        init_filed();             // 重新初始化表單        
    }
});

// 變更搜尋結果的區塊
function bindSearchEvent() {
    searchArea.addEventListener("change", function (e) {
        let count1 = 0; // 計算共幾個結果
        data.forEach(function (item) {
            if (e.target.value == '全部地區') {
                displayData();
                count1 = data.length;
            }
            else if (e.target.value == item.area) { // 一次加一組進去
                displayConditionData(item);
                count1++;
            }
        });

        if (count1 == 0) {
            listArea.innerHTML = '';
            searchResult.textContent = `找不到符合條件的資料`;
            cantFind_area.setAttribute("style", "display:block");
        }
        else if (count1 == data.length) {
            cantFind_area.setAttribute("style", "display:none");
            //顯示全部透過函數已完成
        }
        else {
            listArea.innerHTML = htmlContent;
            cantFind_area.setAttribute("style", "display:none");
            searchResult.textContent = `本次搜尋共 ${count1} 筆資料`;
        }
        htmlContent = ''; // 結束後清空li，不然下次會一直累加
    })
}