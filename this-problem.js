function Person(name, age) {
    this.username = name;
    this.age = age;
    this.print = () => {
        console.log(`Name:${this.username},Age:${this.age}`)
    }
}

let bala = new Person('Bala', 33);
bala.print();

var outOfPersonPrint = bala.print;
outOfPersonPrint();
