
//hàm reduce()
/*
const myArray = [0, 1, -1, 2, -2, 3, -3, 4];

let herArray = myArray.reduce((accumulator, sum) => accumulator + sum ,0)

console.log(herArray)
*/


//Object testing

/*
const myObj = {
    name: "Minh",
    age: 16,
    gender: "Male",
    getName: function() { return `${this.name} năm nay ${this.age} tuổi nhé mọi người !`},
    trait: "fat",
}
console.log(myObj.getName())
*/

// Object Constructor

/*
let User = function(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.info = function() {
        return `Họ và tên: ${this.firstName} Đức ${this.lastName}
        Tuổi: ${age} `;

    }
}

User.prototype.middleName = "Đức";
User.prototype.getMiddleName = function() {
    return this.middleName;
}

var author = new User("Nguyễn", "Minh", 16);
console.log(author)
*/

//for & array testing

/*
let myArray = ["A", "B", "C", "D", "E"];

myArray.push("F");

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

myArray.push("G");

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}


console.log(myArray);
*/

// for (j of Object.values(myObj)) {
//     console.log(j);
// }


/*
for (let i = 100; i >=0; i--) {
    if (i%5==0) {
        console.log(i);
    } else if (i%10==0) {
        continue;
    }
}

*/

let myArray = [1, "1", "mot", true, [0, "khong"], {minh: 123}];

function test(param) {
    return param.map(element => {
        console.log("Hot food" + " " + element);
    });
}

test(myArray);

































































