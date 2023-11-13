// ------------------ Bai 1 ----------------------
// Hãy tạo một prompt với câu hỏi: “Độ tuổi cần tìm?”.
// Khi nhập vào một số, hiển thị ra màn hình tên của những người có
// độ tuổi tương ứng nhập vào. Nếu không có thì hiển thị: “Không tìm thấy!”
let students = [
  {
    name: "NVA",
    age: 16,
    course: ["mindX 01", "mindX 02", "mindX 03"],
  },
  {
    name: "NVB",
    age: 18,
    course: ["mindX 01", "mindX 02", "mindX 04"],
  },
  {
    name: "NVC",
    age: 17,
    course: ["mindX 01", "mindX 03", "mindX 04"],
  },
  {
    name: "NVD",
    age: 15,
    course: ["mindX 01", "mindX 02", "mindX 03"],
  },
];

// user input
// const input = prompt("Do tuoi cua ban: ");

// check information
// -------- Array.map -----------
// let rs = students.map((item) => {
//   if (item.age == input) {
//     // truong hop dung
//     return item.name;
//   }
// });

// let count = 0;
// rs.forEach((i) => {
//   if (i == undefined) {
//     count++;
//   }
// });

// if (count < 4) {
//   console.log(rs);
// } else if (count == 4) {
//   console.log("Khong tim thay");
// }

// -------- Array.filter -----------
// let rs1 = students.filter((item) => item.age == input).map((item) => item.name);
// // check data
// if (rs1.length == 0) {
//   console.log("KHong tim thay");
// } else {
//   console.log(rs1);
// }

// Hãy tạo một prompt với câu hỏi: “Khóa học cần tìm?”.
// Khi nhập vào mã khóa học (VD: mindX 02) sẽ hiển thị ra màn hình
//tên tất cả những người học khóa đó. Nếu khóa học không có,
// hiển thị: “Chưa có lớp học này!”.

const input1 = prompt("KHoa hoc can tim: ");
let rsCourse = students
  .filter((item) => item.course.filter((c) => c == input1).length != 0)
  .map((item) => item.name);

if (rsCourse.length == 0) console.log("Khong tim thay khoa hoc");
else console.log(rsCourse);

