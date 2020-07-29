var data = [
    { name: 'Dell', id: 1 },
    { name: 'Asus', id: 2 },
    { name: 'HP', id: 3 },
    { name: 'Huawei', id: 4 }
]

//find----------------------

var result = data.find(function (a) {
    return a.name === 'HP';
})
console.log(result);

//filter ----------------------

var results = data.filter(function (b) {
    return b.id > 3;
})
console.log(results);

//sort  -------------------------

var arr = [1, 8, 5, 4, 9, 12, 56, 2]
var result = arr.sort(function (a, b) {
    return a - b
})
console.log(result);

//reduce --------------------
var arr = [1, 8, 5, 4, 9, 12, 56, 2]

var result = arr.reduce(function (a, b) { return a + b ,0})
console.log(result);


