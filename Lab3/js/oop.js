// 4 Tinh chat: ke thua, dong goi, da hinh, truu tuong

// Tinh dong goi trong OOP JS
class Student {
  constructor(st_id, st_name, st_age) {
    this.st_id = st_id;
    this.st_name = st_name;
    this.st_age = st_age;
  }

  // arrow func
  getName = () => {
    console.log(this.st_name);
  };
}

// khai bao cac object student
var THIEN_KIM = new Student(1, "Thien Kim", 15);
THIEN_KIM.getName();

// tinh ke thua cua OOP JS
class St_Kid extends Student {
  constructor(course, st_id, st_age, st_name) {
    super(st_id, st_name, st_age);
    this.course = course;
  }
  walk = () => {
    console.log("Walking..");
  };
}
// khai bao object
let XUAN_HUY = new St_Kid("JSI", 2, 16, "Xuan Huy");
XUAN_HUY.getName();
