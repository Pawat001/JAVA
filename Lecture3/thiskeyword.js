var name = "Fatema";

function fun(){
    //some code here
    console.log(this.name);
}

const user = {
    name: "Marium",
    yearOfBirth: 1999,
    calcAge: function(){
        const currentYaer = (new Date()).getFullYear();
        return currentYaer - this.yearOfBirth;
    }
}
fun();
user.calcAge();
fun.call(user);