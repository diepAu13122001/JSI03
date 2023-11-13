let arr1 = [0,2,4,6,8];
let arr2 = [1,3,5,7];

// --------------------- spread operator ---------------------
// Duyệt 2 array trên và hiển thị ra màn hình những số lớn hơn 3.
// Ghép 2 array kể trên lại thành 1 arry như sau: [0,2,4,6,8,1,3,5,7]
let arr3 = [...arr1, ...arr2]; // concat
document.write(arr3);
document.write(`<br>`);
document.write(arr3.filter(num => num > 3));

// Ghép 2 array kể trên lại thành 1 arry như sau: [0,1,2,3,4,5,6,7,8]
document.write(`<br>`);
document.write(arr3.sort());


