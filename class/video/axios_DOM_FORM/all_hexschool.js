// 底下註解所使用的是 JSDoc，可參考：https://israynotarray.com/javascript/20230513/284079926/

/**
 * API 網址
 * @type { string }
 */
const apiUrl = 'https://escape-room.hexschool.io';

/**
 * 取得元素方式
 * @param { string } selector CSS 選擇器
 * @returns { HTMLElement } 回傳取得的元素
 */
const getElement = (selector) => document.querySelector(selector);

/**
 * 建立一個簡單的驗證器
 * some 語法，可參考：https://israynotarray.com/javascript/20190421/1216566123/#some
 * 代表只要有一個是空值，就會回傳 true
 * @param { object } data 傳入的資料
 * @param { string } data.email 傳入的 email
 * @param { string } data.password 傳入的 password
 * @returns { boolean } 回傳驗證結果
 */
const validate = (data) => Object.values(data).some((item) => item === '');

// 取得元素
const accountElement = getElement('.account');
const passwordElement = getElement('.password');

// 建立一個函式，當點擊送出按鈕時，會執行此函式
const callSignUp = () => {
    // 將輸入的資料存成物件
    const data = {
        email: accountElement.value,
        password: passwordElement.value,
    };

    const result = validate(data);
    // 如果欄位有空值，就會回傳 true，就會跳出警告視窗
    if (result) {
        alert('請填寫正確資料');
        return;
    }

    axios.post(`${apiUrl}/api/user/signup`, data)
        .then((response) => {
            // 輸出成功訊息
            alert(response.data.message)
        })
        .then(() => {
            // 清空欄位
            accountElement.value = '';
            passwordElement.value = '';
        })
        .catch((error) => {
            // 如果有錯誤，輸出錯誤訊息
            alert(error.response.data.message)
        });
}

// 取得元素
const sendButton = getElement('.send');
// 設定一個監聽事件，當點擊 .send 時，會執行 callSignUp 函式
sendButton.addEventListener('click', callSignUp)