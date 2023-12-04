// Câu 1: Cho array sau arr1 = [1,2,3,5].
// Hãy duplicate array cho bên trên bằng ít nhất 2 cách;
// trong đó có 1 cách dùng Spread Operator. (...)
const arr1 = [1, 2, 3, 5];
// cach 1 - Spread Operator
const arr2 = [...arr1];
console.log(arr2);

// cach 2 - slice
const arr3 = arr1.slice();

// cach sai
const arr = arr1;
arr.push(12);
console.log(arr1);

// Câu 2: Cho 2 array như sau: arrA = [“Hello”, “ Xin chào”];
// arrB = [“Bonjour”, “Olá”].
// Hãy tạo ra một array mới có tên là waysToSayHello,
// trong array này sẽ chứa toàn bộ các phần tử của arrA và arrB.
// Làm bằng 2 cách; trong đó có 1 cách sử dụng Spread Operator.
let arrA = ["Hello", "Xin chào"];
let arrB = ["Bonjour", "Olá"];
// cach 1 - Spread Operator
let ways = [...arrA, ...arrB];

// cach 2 : concat
const ways2 = arrA.concat(arrB);

// Câu 3: Cho arrX = [0,1,2,3,4,5,6,7,8].
// a. Hãy tạo ra arrSquare, chứa các giá trị của phần tử trong arrX
// đã được bình phương.
// b. Hãy tạo ra arrOdds chứa các phần tử là số lẻ nằm trong arrX.
let arrX = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// Cau a:
let arrSquare = arrX.map((item) => item * item);
console.log("arrSquare", arrSquare);

// Cau b:
let arrOdds = arrX.filter((num) => num % 2 != 0);
console.log("arrOdds", arrOdds);

// Câu 4: Viết một hàm filterRange(arr, a, b),
// với arr là 1 mảng có > 4 phần tử; 0<= a,b < arr.length.
// Tìm kiếm giá trị các phần tử nằm giữa arr[a] và arr[b].
// Chú ý, mảng cũ phải không bị thay đổi.
// VD: arr= [1,5,4,6], a= 0, b = 2; => filteredArr = [1,5].
let arrY = [1, 5, 4, 6];
const a = 0;
const b = 2;
// Arrow function
let filterRange = (arr, rangeA, rangeB) => {
  let newArr = [...arr];
  // error
  if (arr.length < 4 || rangeA < 0 || rangeB > arr.length) {
    console.log("Check your args");
    return null;
  } else {
    return newArr.slice(rangeA, rangeB);
    // newArr.splice(b);
  }
};
// test
console.log("filterRange", filterRange(arrY, a, b));

// Câu 5: Tương tự bài 4, tuy nhiên sau khi chạy hàm filterRange(arr, a,b)
// sẽ hiển thị ra giá trị phần tử > a và < b. VD: filteredArr = [1].
// a. Phải tạo ra mảng mới, mảng cũ không thay đổi.
// b. Không tạo ra mảng mới, mảng cũ bị thay đổi.
// a.
console.log(filterRange(arrY, a + 1, b));
// b.
let filterRange5 = (rangeA, rangeB) => {
    // error
    if (arrY.length < 4 || rangeA < 0 || rangeB > arrY.length) {
      console.log("Check your args");
      return null;
    } else {
        arrY = arrY.slice(rangeA + 1, rangeB);
      return arrY;
    }
  };
  // test
  console.log("filterRange5", filterRange5(a, b));
