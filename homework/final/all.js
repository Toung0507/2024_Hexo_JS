// 將產出的console都清除，保持console乾淨
console.clear();

// ----------變數區塊 - API相關----------
const baseUrl = 'https://livejs-api.hexschool.io/';
const apiPath = 'toung/';
const customerPath = 'api/livejs/v1/customer/';
const fullPath = `${baseUrl}${customerPath}${apiPath}`;

// ----------變數區塊 - 存資料----------
// 存放欲顯示的產品列表
let productsData = [];
// 存放欲顯示的產品列表
let cartsProductsData = [];

// ----------變數區塊 - DOM----------
// ul產品列表
const productWrap = document.querySelector('.productWrap');
// 篩選產品的按鈕 
const productSelect = document.querySelector('.productSelect');
// tbody購物車列表
const shoppingCart = document.querySelector('.shoppingCart-table tbody');
// 購物車的表尾
const shoppingFooterCart = document.querySelector('.shoppingCart-table tfoot');
// 購物車總金額
const shoppingPrice = document.querySelector('.totalPrice');
// 刪除所有品項按鈕
const discardAllBtn = document.querySelector('.discardAllBtn');
// 表單區塊
const orderInfo_form = document.querySelector('.orderInfo-form');
// 表單欄位 - 姓名
const customerName = document.querySelector("#customerName");
// 表單欄位 - 電話
const customerPhone = document.querySelector("#customerPhone");
// 表單欄位 - Email
const customerEmail = document.querySelector("#customerEmail");
// 表單欄位 - 地址
const customerAddress = document.querySelector("#customerAddress");
// 表單欄位 - 付款方式
const tradeWay = document.querySelector("#tradeWay");
// 送出預訂資料的按鈕
const orderInfo_btn = document.querySelector('.orderInfo-btn');
// 信箱的提示訊息
const emailErrorMessage = document.querySelector(`[data-message="Email"]`);

// ----------axios區塊----------
// axios取得產品列表
function getProducts() {
    axios.get(`${fullPath}products`)
        .then(function (response) {
            productsData = response.data.products;
            renderProductsData(productsData);
        })
        .catch(function (error) {
            console.error("抓取產品列表失敗：", error);
        });
};

// axios取得購物車
function getCarts() {
    axios.get(`${fullPath}carts`)
        .then(function (response) {
            cartsProductsData = response.data;
            renderCartsProductsData(cartsProductsData);
        })
        .catch(function (error) {
            console.error("抓取購物車失敗：", error);
        });
};

// axios新增產品至購物車
function addProducts(productId) {
    const addProductsData = {  // API所需的data
        "data": {
            "productId": productId,
            "quantity": 1
        }
    };
    axios.post(`${fullPath}carts`, addProductsData)
        .then(function (response) {
            cartsProductsData = response.data;
            renderCartsProductsData(cartsProductsData);
            Swal.fire({
                icon: "success",
                title: "新增至購物車成功",
                showConfirmButton: true
            });
        })
        .catch(function (error) {
            Swal.fire({
                icon: "error",
                title: "新增至購物車失敗",
                showConfirmButton: true
            });
            console.error("新增至購物車失敗", error);
        });
};

// axios 刪除購物車所有品項
function discardAllProducts() {
    axios.delete(`${fullPath}carts`)
        .then(function (response) {
            cartsProductsData = response.data;
            renderCartsProductsData(cartsProductsData);
            Swal.fire({
                icon: "success",
                title: "購物車已全數刪除，歡迎再次選購",
                showConfirmButton: true
            });
        })
        .catch(function (error) {
            Swal.fire({
                icon: "error",
                title: "購物車刪除失敗",
                showConfirmButton: true
            });
            console.error("刪除購物車全品項失敗：", error);
        });
};

// axios 刪除購物車的單一品項
function discardOneProduct(cartId) {
    axios.delete(`${fullPath}carts/${cartId}`)
        .then(function (response) {
            cartsProductsData = response.data;
            renderCartsProductsData(cartsProductsData);
            Swal.fire({
                icon: "success",
                title: "此產品已刪除成功",
                showConfirmButton: true
            });
        })
        .catch(function (error) {
            Swal.fire({
                icon: "error",
                title: "此產品刪除失敗",
                showConfirmButton: true
            });
            console.error("刪除購物車單一品項失敗：", error);
        });
};

// axios送出購買訂單
function sendOrder() {
    // API DATA
    const orderData = {
        data: {
            user: {
                name: customerName.value.trim(),
                tel: customerPhone.value.trim(),
                email: customerEmail.value.trim(),
                address: customerAddress.value.trim(),
                payment: tradeWay.value,
            },
        },
    };
    axios.post(`${fullPath}orders`, orderData)
        .then(function (response) {
            Swal.fire({
                icon: "success",
                title: "送出訂單成功",
                showConfirmButton: true
            });
            emailErrorMessage.textContent = '必填';
            orderInfo_form.reset();
            cartsProductsData = { status: true, carts: Array(0), total: 0, finalTotal: 0 };
            renderCartsProductsData(cartsProductsData);
        })
        .catch(function (error) {
            console.error("送出訂單失敗：", error);
        });
}

// ----------渲染區塊----------
// 渲染產品列表 - 透過參數來顯示需要渲染的資料
function renderProductsData(productsData) {
    let productsStr = ''; // 用來存放產品的字串
    productsData.forEach(function (item) {
        productsStr += `<li class="productCard">
                        <h4 class="productType">新品</h4>
                        <img src="${item.images}"alt="">
                        <a href="#" class="addCardBtn" data-id=${item.id}>加入購物車</a>
                        <h3>${item.title}</h3>
                        <del class="originPrice">NT$${item.origin_price}</del>
                        <p class="nowPrice">NT$${item.price}</p>
                       </li>`;
    });
    productWrap.innerHTML = productsStr;
};

// 渲染購物車列表 - 透過參數來顯示需要渲染的資料
function renderCartsProductsData(cartsProductsData) {
    // 若未有商品購物車就顯示提示訊息
    if (cartsProductsData.carts.length === 0) {
        shoppingCart.innerHTML = '購物車尚未有商品，歡迎選購';
        shoppingPrice.textContent = `NT$0`;
        return;
        // 將刪除所有品項按鈕設為不能點選  -> 再測試 也可用取消表尾的方式 - >要把表尾找出來
        // shoppingFooterCart.innerHTML = '';
    };
    let CartsProductsStr = ''; // 用來存放購物車產品的字串
    let finalTotalPrice = cartsProductsData.finalTotal; // 抓取購物車總金額
    cartsProductsData.carts.forEach(function (item) {
        let totalPrice = item.product.price * item.quantity;
        CartsProductsStr += `<tr>
                            <td>
                                <div class="cardItem-title">
                                    <img src="${item.product.images}" alt="">
                                    <p>${item.product.title}</p>
                                </div>
                            </td>
                            <td>NT$${item.product.price}</td>
                            <td>${item.quantity}</td>
                            <td>NT$${totalPrice}</td>
                            <td class="discardBtn">
                                <a href="#" class="material-icons" data-id=${item.id}> clear </a>
                            </td>
                        </tr>`;

    });
    shoppingCart.innerHTML = CartsProductsStr;
    shoppingPrice.textContent = `NT$${finalTotalPrice}`;
};

// ----------監聽區塊----------
//  對篩選按鈕做監聽，並取得使用者選擇的值
function getFilterProductSelect() {
    productSelect.addEventListener('change', function (e) {
        filterProducts(e.target.value); // 呼叫篩選產品的函式
    });
};

//  新增產品至購物車 - 對產品區塊作監聽，並取得使用者選擇的值
function getAddProductSelect() {
    productWrap.addEventListener('click', function (e) {
        e.preventDefault();
        let productId = e.target.dataset.id;
        // 有點到加入購物車按鈕再呼叫函式加入資料
        if (!productId) {
            return;
        }
        else {
            addProducts(productId);
        }
    });
}

// 對刪除全品項按鈕做監聽
function DiscardAllProductSelect() {
    discardAllBtn.addEventListener('click', function (e) {
        e.preventDefault();
        discardAllProducts();
    });
}

//  刪除購物車的某產品 - 對每個產品區塊作監聽，並取得使用者選擇的值
function DiscardOneProductSelect() {
    shoppingCart.addEventListener('click', function (e) {
        e.preventDefault();
        let cartId = e.target.dataset.id;
        // 有點到加入購物車按鈕再呼叫函式加入資料
        if (!cartId) {
            return;
        }
        else {
            discardOneProduct(cartId);
        }
    });
}

//  監聽送出預訂資料的按鈕
function SendOrderBtnSelect() {
    orderInfo_btn.addEventListener('click', function (e) {
        e.preventDefault();
        // 購物車為空值
        if (cartsProductsData.carts.length === 0) {
            Swal.fire({
                icon: "warning",
                title: "購物車無商品，無法送出預訂資料",
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }
        // 驗證表單有問題時
        if (chkFormField()) {
            Swal.fire({
                icon: "warning",
                title: "預訂資料有少填寫，或格式錯誤，請參照提示訊息",
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }
        sendOrder();
    });
}

// ----------篩選/新增區塊----------
// 篩選產品 - 透過參數來串接需要顯示的資料
function filterProducts(value) {
    let productsFilterData = []; // 篩選後的產品列表
    productsData.forEach(function (item) {
        if (item.category === value) {
            productsFilterData.push(item);
        }
        else if (value === '全部') {
            productsFilterData = productsData;
        };
    });
    renderProductsData(productsFilterData); // 從新渲染產品列表
};

// 表單驗證區塊
function chkFormField() {
    // 定義表單驗證的規則
    // presence 必填
    const constraints = {
        姓名: {
            presence: { message: "^必填" },
        },
        電話: {
            presence: { message: "^必填" },
        },
        Email: {
            presence: { message: "^必填" },
            email: { message: "^請輸入正確的信箱格式" },
        },
        寄送地址: {
            presence: { message: "^必填" },
        },
    };
    const error = validate(orderInfo_form, constraints); // validate(欲檢查的表單, 驗證規則)
    if (error) {
        const errorArr = Object.keys(error);
        errorArr.forEach(function (item) {
            const errorMessage = document.querySelector(`[data-message="${item}"]`);
            errorMessage.textContent = error[item][0];
        });
    };
    return error;
};

// !初始化會需要用到的函式!
function init() {
    getProducts();      // axios取得產品列表
    getCarts();         // axios取得購物車列表
    getFilterProductSelect(); //對篩選按鈕做監聽，並取得使用者選擇的值
    getAddProductSelect(); //對每個產品區塊作監聽，並取得使用者選擇的值
    DiscardAllProductSelect(); // 對刪除按鈕做監聽
    DiscardOneProductSelect();
    SendOrderBtnSelect();
}

// 網頁初始化
init();


// 待做清單
// 1. 將刪除產品沒資料的表尾處理好
// 2. 增加可以在購物車修改數量 - PATCH
/*
let totalPrice = ${item.product.price}*${item.quantity}
${totalPrice}
<tr>
    <td>
        <div class="cardItem-title">
            <img src="${item.product.images}"
                alt="">
            <p>${item.product.title}</p>
        </div>
    </td>
    <td>NT$${item.product.price}</td>
    <td>${item.quantity}</td>
    <td>NT$${totalPrice}</td>
    <td class="discardBtn">
        <a href="#" class="material-icons">
            clear
        </a>
    </td>
</tr>
*/