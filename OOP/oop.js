class Student {
  constructor(studentDetails) {
    this.name = studentDetails.name;
    this.roll = studentDetails.roll;
    this.studentClass = studentDetails.studentClass;
  }

  greet() {
    console.log(this.name);
  }
}

const person1 = new Student({
  name: "miyad",
  roll: 12,
});

person1.greet();
class MyClass {
  constructor() {
    this.value = 10;
    return "এটা রিটার্ন হবে না"; // এটা উপেক্ষা করা হবে
  }
}

const obj = new MyClass();
console.log(obj.value); // আউটপুট: 10
console.log(obj); // আউটপুট: MyClass { value: 10 } - অবজেক্ট রিটার্ন হয়েছে
