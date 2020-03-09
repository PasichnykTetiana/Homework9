// let arr =['a', 'b', 'c'];
// arr.push(1,2,3);
// alert(arr);
// let arr=[1,2,3];
// arr.unshift(4,5,6);
// alert(arr);
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
// // var sum=0;
// //
// // for (let i = 0; i < arr.length; i+=1) {
// //     sum=sum+arr[i]*arr[i];
// //
// // }
// // alert( sum );
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let arr=[];
arr.length=10;
for (let i=0; i<arr.length; i+=1){
    arr[i]=getRandomInRange(1,10);
}
alert(arr);
