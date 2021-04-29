//Question 1

 let student = {
    firstName:"",
    lastName:"",
    grades:[],

    inputNewGrades : function(newGrade) {
        this.grades.push(newGrade);

    },
    computeAverageGrade: function () {
        return this.grades.reduce(((average, current, index, garray) => average+= current/garray.length), 0);
    }

}

let students = [];

let s1 = Object.create(student);
s1.firstName="James";
s1.lastName="Mark";
s1.inputNewGrades(4);
s1.inputNewGrades(4);
students.push(s1);

let s2 = Object.create(student);
s2.firstName="Sarah";
s2.lastName="nanka";
s2.inputNewGrades(1);
s2.inputNewGrades(9);
students.push(s2);

let s3 = Object.create(student);
s3.firstName="Jane";
s3.lastName="Monics";
s3.inputNewGrades(4);
s3.inputNewGrades(3);
students.push(s3);

let averageGrade=students.map((stu) => stu.computeAverageGrade()).reduce(((av, current, ind, arr)=>av=av+current/arr.length),0);
console.log(`Using Object Literals, The average of all grades for all students is ${averageGrade}`);

 