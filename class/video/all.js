function add(num1, num2) {
    console.log(`第一個參數為${num1}`);
    console.log(`第二個參數為${num2}`);
    let addResult = num1 + num2;
    console.log(`純顯示但未回傳結果值：${addResult}`);
    return addResult;
}

add(5, 7);
//第一個參數為5
//第二個參數為7
//純顯示但未回傳結果值:12

let ans = add(6, 8);
console.log(ans);
//第一個參數為6
//第二個參數為8
//純顯示但未回傳結果值:14
//14