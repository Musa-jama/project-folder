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

  const clonedStudent = { ...student, graduationYear: 2025 };
  console.log("Student with Graduation Year:", clonedStudent);
 
  const newCourses = ["Math", "English"];
  const allCourses = [...student.courses, ...newCourses];
  console.log("Merged Courses Array:", allCourses);

  student.addCourse = function (course) {
    this.courses.push(course);
  };
 
  student.totalCourses = function () {
    return this.courses.length;
  };
 
  student.addCourse("Geography");
  console.log("Courses after adding Geography:", student.courses);
  console.log("Total Courses:", student.totalCourses());
 


  const averageScore = scores.reduce((acc, val) => acc + val, 0) / scores.length;
  console.log("Average Score:", averageScore.toFixed(2));
