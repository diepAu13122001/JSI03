// // ------------------ let/ const --------------
// // for (let index = 0; index < 6; index++) {
// //   console.log(index);
// // }
// // console.log(index); // error

// // ---------------- arrow functions -------------
// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(1, 2));

// let sum = () => 1 + 2;
// console.log(first);

// // array
// const jobs = [
//   { id: 1, isActive: true },
//   { id: 2, isActive: true },
//   { id: 3, isActive: false },
// ];

// let active = jobs.filter(function (job) {
//   return job.isActive;
// });
// let activeJob = jobs.filter((job) => job.isActive);

// const colors = ["red", "green", "white"];
// const items = colors.map(color => `<li>${color}</li>` );

// // ---------------------- spread operator -----------------------
// // array
// const first = [1,2,3];
// const second = [4,5,6];
// const combined = first.concat(second);
// const combined_1 = [...first, ...second];

// const clone = [...first];

// // combined 2 objects -> 1 object
// const f = {name: 'Diep'};
// const s = {job: 'teacher'};

// const combined_obj = {...f, ...s, location: 'Q10'};
// const clone_obj = {...s};

// // function (spread operator)
// function sum1 (a, b, c) {
//     return a+b+c;
// }

// const numbers = [1,2,3];
// console.log(sum.apply(null,numbers));
// console.log(sum(...numbers));

// -------------------- objects -----------------------------
// const person = {
//   name: "Diep",
//   age: 26,
//   walk: function () {},
//   talk() {
//     console.log("talk");
//   },
// };
// person.talk();
// person["name"] = "Ngan";
// const target = "age";
// person[target] = 14;
// console.log(person.name);
// console.log(person.age);

// ------------------------ this keyword ----------------
const human = {
  name: "Diep",
  walk() {
    console.log(this);
  },
};
// human.walk(); // return this object

//------------------------ binding this ----------------------------
//  const obj = {
//     name: "Diep",
//     walk() {
//       console.log(this);
//     }
//  }

//  const walk = obj.walk.bind(obj);
//  walk();

// ------------------------ arrow functions & this --------------
const obj = {
  name: "Diep",
  talk() {
    setTimeout(function () {
      console.log("this", this);
    }, 1000);
  },
};

//  personalbar.talk(); // error -> bc outside object (pass 2 funcs)
const obj_solved = {
  name: "Diep",
  talk() {
    var self = this; // declare a new var to save the value of 'this'
    setTimeout(() => console.log("this", self), 1000);
  },
};
console.log(obj_solved.talk());

// ----------------- Classes ----------------------------------
class Person {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log("walk");
  }
}

const p1 = new Person("Diep");
// p1.walk();
// console.log(p1.name);

// ---------------------------- Inheritance ----------------------
class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }

  teach() {
    console.log("teach");
  }
}

// const teacher1 = new Teacher("Diep", "MSc");
// console.log(teacher1.walk());

// ------- Bài tập ------------------
const list = [1, 2, 3, 40, 59];
// lọc số chia hết cho 2 và in ra console
const rs1 = list.filter(item => item%2==0);
console.log(rs1);

// lọc số trên 10 và in ra console
const rs2 = list.filter(item => item>10);
console.log(rs2);