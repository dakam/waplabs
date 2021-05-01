//Question1 solution

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if(password == "rockstar") ok();
    else fail();
}

    let user = {
        name: 'john',

        loginOk() {
            alert(`${this.name} logged in`);
        },

        loginFail() {
            alert(`${this.name} failed to login` );
        },

};

//1. using apply method
askPassword(()=>user.loginOk.apply(user), ()=>user.loginFail.apply(user))

//2. using call method
askPassword(()=>user.loginOk.call(user), ()=>user.loginFail.call(user));

//3. using bind method
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

//4.using wrapper function
askPassword(function() {user.loginOk()}, function() {user.loginFail()});

//Question 2 // solution using bind

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList: function() {
        this.students.forEach(function(student) {
            console.log(this.title + ": " + student);
        }.bind(group));
    }
};

group.showList();
