// 註冊 - signup
let signupUrl = 'https://escape-room.hexschool.io/api/user/signup';

// DOM
let signup_account = document.querySelector('.signup_account');
let signup_password = document.querySelector('.signup_password');
let signup_send = document.querySelector('.signup_send');

signup_send.addEventListener('click', signupSend);

function signupSend() {
    let signupData = {};

    if (signup_account.value == '' || signup_password.value == '') {
        alert('請輸入帳號或密碼來註冊');
        return;
    }
    signupData.email = signup_account.value;
    signupData.password = signup_password.value;

    axios.post(signupUrl, signupData)
        .then(function (response) {
            console.log(response);
            alert('註冊成功');
        })
        .catch(function (error) {
            console.log(error);
            alert('註冊失敗');
        });
}

// 登入 - signin
let signinUrl = 'https://escape-room.hexschool.io/api/user/signin';

let signin_account = document.querySelector('.signin_account');
let signin_password = document.querySelector('.signin_password');
let signin_send = document.querySelector('.signin_send');

console.log(signin_send);

signin_send.addEventListener('click', signinSend);

function signinSend() {
    let signinData = {};

    if (signin_account.value == '' || signin_password.value == '') {
        alert('帳號或密碼錯誤');
        return;
    }
    signinData.email = signin_account.value;
    signinData.password = signin_password.value;

    axios.post(signinUrl, signinData)
        .then(function (response) {
            console.log(response.data);
            alert('已登入');
        })
        .catch(function (error) {
            console.log(error);
            alert('無法登入');
        });
}