// 功課用codepen回報
// 題目連結：https://codepen.io/hexschool/pen/XWNWXoe
// 回報連結：https://codepen.io/Toung/pen/xxvgRVO

// Q1

let obj = {};

obj = {
    myName : 'Tom',
    age : 18,
    pets: ['John','Mike'],
    isWakeUp : false
};
console.log("Q1 The End");

// Q2

let colors = ["red","black","yellow"];
colors.push("black");
console.log(colors.length);

console.log("Q2 The End");

// Q3

let motherStatus = [
    {
        name: "mary",
        age: 31,
        sons : ["Tom","Bob"]
    }
];

motherStatus[0].age ++;
motherStatus[0].sons.push("John");
console.log(motherStatus);

console.log("Q3 The End");

// Q4

const bikeStationDate = {
    data:[
        {
            "StationUID": "KHH501201001",
            "StationID": "501201001",
            "AuthorityID": "KHH",
            "StationName": {
                "Zh_tw": "YouBike2.0_捷運美麗島站(10號出口)",
                "En": "YouBike2.0_KRT Formosa Boulevard Sta. (Exit 10)"
            },
            "StationPosition": {
                "PositionLon": 120.30212,
                "PositionLat": 22.63213,
                "GeoHash": "wsj8c813d"
            },
            "StationAddress": {
                "Zh_tw": "中山一路168號前方",
                "En": "No.168, Zhongshan 1st. Rd."
            },
            "BikesCapacity": 23,
            "ServiceType": 2,
            "SrcUpdateTime": "2024-10-12T14:10:17+08:00",
            "UpdateTime": "2024-10-12T14:23:39+08:00"
        },
        {
            "StationUID": "KHH501201002",
            "StationID": "501201002",
            "AuthorityID": "KHH",
            "StationName": {
                "Zh_tw": "YouBike2.0_捷運美麗島站(2號出口)",
                "En": "YouBike2.0_KRT Formosa Boulevard Sta. (Exit 2)"
            },
            "StationPosition": {
                "PositionLon": 120.30175,
                "PositionLat": 22.63035,
                "GeoHash": "wsj89x9p3"
            },
            "StationAddress": {
                "Zh_tw": "中山一路83號旁停車場前方",
                "En": "No.83, Zhongshan 1st. Rd."
            },
            "BikesCapacity": 40,
            "ServiceType": 2,
            "SrcUpdateTime": "2024-10-12T14:09:19+08:00",
            "UpdateTime": "2024-10-12T14:23:39+08:00"
        },
        {
            "StationUID": "KHH501201003",
            "StationID": "501201003",
            "AuthorityID": "KHH",
            "StationName": {
                "Zh_tw": "YouBike2.0_捷運美麗島站(5號出口)",
                "En": "YouBike2.0_KRT Formosa Boulevard Sta. (Exit 5)"
            },
            "StationPosition": {
                "PositionLon": 120.3031,
                "PositionLat": 22.63118,
                "GeoHash": "wsj89xfh1"
            },
            "StationAddress": {
                "Zh_tw": "中正三路179號前方",
                "En": "No.179, Zhongzheng 3rd. Rd"
            },
            "BikesCapacity": 23,
            "ServiceType": 2,
            "SrcUpdateTime": "2024-10-12T14:11:18+08:00",
            "UpdateTime": "2024-10-12T14:23:39+08:00"
        }
    ]
};

console.log(bikeStationDate.data[0].StationName.Zh_tw);
console.log(bikeStationDate.data[2].BikesCapacity);

console.log("Q4 The End");

// Q5

let familyPhoto = {
    motherName : 'Jane',
    fatherName : 'Bill',
    daughterName : 'Rosa',
    sonName : 'Howard',
    dogNames : ['Bobo','Koko']
};

console.log("Q5 The End");

// Q6

let salesHouseBoard = [
    {
        constructionProjectName : '六角大別墅' ,
        constructionProjectArea : '高雄市' ,
        households : [
            {
                sellPrice : 280000000 ,                
                squareNeters : 900 ,
                isHaveSwimmingpool : false ,
                isHaveBasement : true ,
                floorsNum : 5 ,
                bathroomsNum : 3 ,
                isHaveExclusiveButler : false,
                isSaled : true
            },
            {
                sellPrice : 320000000 ,
                squareNeters : 1200 ,
                isHaveSwimmingpool : true ,
                isHaveBasement : true ,
                floorsNum : 7 ,
                bathroomsNum : 4 ,
                isHaveExclusiveButler : true,
                isSaled : false
            }
        ]
    }
]

console.log("Q6 The End");

// Q7

let roomDetail = {
    "success": true,
    "items": [
      {
        "id": "3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu",
        "imageUrl": "https:\/\/images.unsplash.com\/photo-1551776235-dde6d482980b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
        "normalDayPrice": 1380,
        "holidayPrice": 1500,
        "name": "Single Room"
      },
      {
        "id": "g0mYhN6ignMz4VYW7eiWsXZN8DHolHzH8LuVmM6hq5h6BrrqrLMw4aJgHv7LZ3RQ",
        "imageUrl": "https:\/\/images.unsplash.com\/photo-1564182379166-8fcfdda80151?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
        "normalDayPrice": 1899,
        "holidayPrice": 2000,
        "name": "Deluxe Single Room"
      },
      {
        "id": "RA8NhExaXXZB7EODVALSDvFFQzj1JP0a4C1pwZ1acPaieRBwiWoCb0FE0KUbXaxg",
        "imageUrl": "https:\/\/images.unsplash.com\/photo-1526913621366-a4583840d736?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        "normalDayPrice": 2460,
        "holidayPrice": 2500,
        "name": "Double Room"
      },
      {
        "id": "kICyWhZ5XsfI4n1d4gBOsDjIyIxNozwgmxYKyZpzi5pjLcU2Nl4RhiGrn6zaPuTJ",
        "imageUrl": "https:\/\/images.unsplash.com\/photo-1519710889408-a67e1c7e0452?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
        "normalDayPrice": 2888,
        "holidayPrice": 3000,
        "name": "Deluxe Double Room"
      },
      {
        "id": "VCxbQq1vLeUtxW781k9Dlq3mHBRNl5YP19Lhq8k5TbIr2BeH58gRpnNKGoEgkysz",
        "imageUrl": "https:\/\/images.unsplash.com\/photo-1558976825-6b1b03a03719?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        "normalDayPrice": 3350,
        "holidayPrice": 3500,
        "name": "Twin Room"
      },
      {
        "id": "YovqNpFDaal598jbpd1A14gXwDE6gekTqJgxOAGcq78B8YnP7claymQVFy2GTwgb",
        "imageUrl": "https:\/\/images.unsplash.com\/photo-1552902019-ebcd97aa9aa0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
        "normalDayPrice": 3899,
        "holidayPrice": 4000,
        "name": "Deluxe Twin Room"
      }
    ]
}

let i = 0;
let roomBill = 0;
for (i = 0; i < roomDetail.items.length; i++) {
    roomBill += roomDetail.items[i].normalDayPrice;
}

console.log( roomBill);

console.log("Q7 The End");

// Q8

let salaryData = {
    company : 'circle center',
    bossName : 'casper',
    staff : [
        {
            name : 'Bob' ,
            salary : 32000
        },
        {
            name : 'Jack' ,
            salary : 28000
        }
    ]
};

if (salaryData.staff[0].salary < 40000 ){
    salaryData.staff[0].salary = 40000;
}

if (salaryData.staff[1].salary < 40000 ){
    salaryData.staff[1].salary = 40000;
}

console.log("Q8 The End");

// Q9

// 輕軌車站
/*
最外層為物件，裡面有4個屬性
1. isImage(布林值)；值為false
2. data(陣列)；陣列中包含14個物件，每個物件分別包含7個屬性
    以第14個物件的值為例
    1. seq(數值)；值為14
    2. 站序(字串)；值為14
    3. 車站代碼(字串)；值為C14
    4. 車站中文站名(字串)；值為哈瑪星
    5. 車站英文站名(字串)；值為Hamasen
    6. 站位地點(字串)；值為近捷運橘線O1西子灣站
    7. 備註(字串)；值為""
3. id(字串)；值為12053fa0-46d6-476e-b9e1-20dfb4c8f5a9
4. success(布林值)；值為true

*/

console.log("Q9 The End");

// Q10

const bmiData = {
    underWeight : {
        status : '過輕' ,
        color: 'blue'
    },
    normalWeight : {
        status : '正常' ,
        color: 'red'
    },
    overWeight : {
        status : '過重' ,
        color: 'orange'
    },
    slightObesity : {
        status : '輕度肥胖' ,
        color: 'yellow'
    },
    middleObesity : {
        status : '中度肥胖' ,
        color: 'blaclk'
    },
    extremeObesity : {
        status : '重度肥胖' ,
        color: 'green'
    }
}

console.log("Q10 The End");