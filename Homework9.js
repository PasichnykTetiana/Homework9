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
//Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива. (числа от 0 до 10)
// function getRandomInRange(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// let arr=[];
// arr.length=10;
// for (let i=0; i<arr.length; i+=1){
//     arr[i]=getRandomInRange(1,10);
// }
// alert(arr);
//Given an array, rotate the array to the right by k steps, where k is non-negative.

// let abc = ['1','2','3','4','5','6', '7'];
// function rotate(nums, k){
//     return abc.slice(k).concat(nums.slice(0,k));
// } //убрали 3 сначала (-) и присоединили к тому что вышло от 0 до к -от первого до к НЕ включительно
// console.log( rotate(abc, 3) );

// let abc = ['1','2','3','4','5','6','7'];
// abc=abc.slice(3).concat(abc.slice(0,3));
// console.log(abc);
