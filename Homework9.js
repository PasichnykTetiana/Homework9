// let arr =['a', 'b', 'c'];
// arr.push(1,2,3);
// alert(arr);
// let arr=[1,2,3];
// arr.unshift(4,5,6);
// alert(arr);
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
var sum=0;

for (let i = 0; i < arr.length; i+=1) {
    sum=sum+arr[i]*arr[i];

}
alert( sum );