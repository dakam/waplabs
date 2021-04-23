  /* Damiano Kato Home assignment Lab5 */


    // Question 1

    const arr = [1,50,40,3,10]; // this is the test array

    let res = arr.filter((num) => num>20)
    .reduce(((sum, curr) => sum +=curr), 0);
    console.log("Qn1 - The sum of numbers greater than 20 is "+res);


    //Question 2

    const strArr = ["uganda","united","canada","mexico","10","JAMA","states"]; // this is the String test array

    let newStr = strArr.filter(str => str.length >=5 && str.includes('a'))
    console.log("Qn2- String with strings length > or =5 and has a : "+newStr);

//Question 3

    function Employee(firstname, lastname,birthdate) {
        this.firstname = firstname;
        this.lastname= lastname;
        this.birthdate = new Date(birthdate);
        this.getFullName=  () => this.firstname +" "+ this.lastname; //using arrow functions
        this.getAge = () => Math.abs(new Date(Date.now() - new Date(birthdate).getTime()).getUTCFullYear() - 1970);
    }

    const employees = [new Employee("James","Micheal","October 13, 1980"), new Employee("Sarah","Yins","August 04, 1988"), new Employee("Ken","Wonders","September 10, 2015")];
    
    //Printout of Employees details with Age greater than 20
    console.log("Employees with age > 20 :")
    employees.filter((emp) =>emp.getAge() > 20).forEach((emp) => console.log(" Fullname="+emp.getFullName()+" and Age = "+emp.getAge()));

    //List of Employees born after 2000

    const youngEmps = employees.filter((emp) => emp.birthdate.getFullYear() > 2000)
                               .map((emp) => emp.getFullName());

    
    console.log("QN3 (ii) String list of Employees Fullname born after 2000 : \n "+ youngEmps);


    






