let data = [];

// 透過axios抓取資料
axios.get('https://raw.githubusercontent.com/hexschool/js-training/main/travelAPI-lv1.json')
    .then(function (response) {
        data = response.data;
        areaTotal();
    })
    .catch(function (error) {
        console.error("抓取資料失敗：", error);
    });

// 篩選地區，並累加數字上去 - Obj
// totalObj 會變成 {高雄: 2, 台北: 1, 台中: 2}
function areaTotal() {
    let totalObj = {};
    data.forEach(function (item, index) {
        if (totalObj[item.area] == undefined) {
            totalObj[item.area] = 1;
        } else {
            totalObj[item.area] += 1;
        }
    })
    areaNewTotal(totalObj);
}


// newData = [["高雄", 2], ["台北",1], ["台中", 1]]
function areaNewTotal(totalObj) {
    let newAryData = [];
    let area = Object.keys(totalObj);
    // area output ["高雄","台北","台中"]
    area.forEach(function (item, index) {
        let ary = [];
        ary.push(item);
        ary.push(totalObj[item]);
        newAryData.push(ary);
    })
    generateData(newAryData);
    console.log(newAryData);
};


function generateData(newAryData) {
    // 將 newData 丟入 c3 產生器
    const chart = c3.generate({
        bindto: "#chart",
        data: {
            columns: newAryData,
            type: 'donut',
        },
        color: {
            pattern: ['#E68619', '#26BFC7', '#5151D3']
        },
        donut: {
            title: "地區",
            label: {
                show: false
            },
            width: 15
        }
    });
};