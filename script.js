const student = {
    name: "Henry Thierry",
    age: 40,
    enrolled: true,
    courses: ["Javascript", "Html", "Styles.css"],
    displayInfo: function () {
      return `Student: ${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled}`;
    }
  };
 
  console.log("Name:", student.name);
  console.log("Age:", student.age);
  console.log("Info:", student.displayInfo());

  const studentJSON = JSON.stringify(student);
  console.log("JSON String:", studentJSON);
 
  const newStudent = JSON.parse(studentJSON);
  console.log("Parsed Object:", newStudent);
  console.log("Are objects equal?", JSON.stringify(student) === JSON.stringify(newStudent));

  const { name, courses } = student;
  console.log("Destructured Name:", name);
  console.log("Destructured Courses:", courses);
 
  const scores = [85, 92, 78, 90];
  const [score1, score2] = scores;
  console.log("First Score:", score1);
  console.log("Second Score:", score2);
