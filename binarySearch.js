var dataArray = [23, 56, 11, 89, 42, 75, 3, 98, 17, 61];

function binarySearch(dataArray){
dataArray.sort((a,b)=>a-b);
console.log(dataArray);
}
module.exports={binarySearch};