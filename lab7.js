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

askPassword(function() {user.loginOk.call(user)}, function() {user.loginFail.call(user)});

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