//Question 2

function Student(firstName, lastName) {
    this.firstName=firstName;
    this.lastName= lastName;
    this.grades=[]
}

Student.prototype.inputNewGrades = function(newGrade) {
    this.grades.push(newGrade);
}

Student.prototype.computeAverageGrade = function() {
    return this.grades.reduce(((average, current, index, garray) => average+= current/garray.length), 0);
}

let stu1 = new Student("John", "Doe");
stu1.inputNewGrades(4);
stu1.inputNewGrades(4);

let stu2 = new Student("Sarah", "Sas");
stu2.inputNewGrades(1);
stu2.inputNewGrades(9);
stu2.inputNewGrades(5);


let stu3 = new Student("Joseph", "jose");
stu3.inputNewGrades(4);
stu3.inputNewGrades(3);

let newStudents = [stu1,stu2,stu3];

let averageGradeCF=newStudents.map((stu) => stu.computeAverageGrade()).reduce(((av, current, ind, arr)=>av=av+current/arr.length),0);

console.log(`Using Constructor Function, The average of all grades for all students is ${averageGradeCF}`);

//Question 3. 
// The sort() method can be implemented on an array, for this solution it will sort grades for a student

Student.prototype.sort = function() {
    this.grades.sort();
}

//testing sorting method

console.log(`Before sorting grades, Student FirstName ${stu2.firstName} and last name ${stu2.lastName} and grades ${stu2.grades}`)
stu2.sort();
console.log(`After sorting grades, Student FirstName ${stu2.firstName} and last name ${stu2.lastName} and grades ${stu2.grades}`)

//LinkedList using object Literals


