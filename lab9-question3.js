class Question {

    constructor(qid, answer) {
        this.qid = qid;
        this.answer = answer;
    }

    checkAnswer(answer) {

        if(this.answer === answer) {
            return true;
        }
        else {
            return false;
        }
    }
}

class Student {
    constructor(studentId) {
        this.studentId= studentId;
        this.answers=[];

    }

    getStudentId() {

        return this.studentId;
    }

    addAnswer(question) {
      this.answers.push(question);  
    }
}

class Quiz {
    constructor(questions, students) {
        this.questions = questions;
        this.students  = students;
    }

    scoreStudentBySid(sid) {

        let mscore=0;

        for(let student of this.students) {
        
            if(sid === student.getStudentId()) {

                for(let aQuestion of student.answers) {
                   let aqid = aQuestion.qid;
                   let aqa =  aQuestion.answer;

                   for(let qn of this.questions) {

                    let cqid = qn.qid;
                    let cqa = qn.answer;

                    if(aqid===cqid) {

                        if(aqa === cqa) {
                            mscore= mscore+1;
                        }

                    }

                   }


                }
            }
        }

     return mscore;

    }

    getAverageScore() {

       return this.students.reduce(((av, curr,ind, arr)=> av = av + this.scoreStudentBySid(curr.getStudentId())/arr.length),0);

    }
}


const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));
const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));
const students = [student1, student2];
const questions =[new Question(1, 'b'), new Question(2, 'a'), new Question(3, 'b')];
const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2
let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5
