class Person {
    constructor(name, age, happiness) {
        this.name = name
        this.age = age
        this.happiness = happiness
    }
    info() {
        console.log(this.name + ' ' + this.age)
    }
}
var alex = new Person('Alex', 45, true)
alex.info()
