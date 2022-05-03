//creates js object
let person = {
    name:"", 
    age: 0,
    address: "",

    changeAge(age){
        this.age = age;
    }
}

//constructor function to auto fill person attributes
function MakePerson(name, age, address){
    this.name = name;
    this.age = age;
    this.address = address;
    //functions associated with object that can be called
    this.changeAge = function(newAge){
        this.age = newAge;
    }
}

let person1 = new MakePerson("name", 38, "lkjafsd");
console.log(person1.age);
person1.changeAge(46);
console.log(person1.age);