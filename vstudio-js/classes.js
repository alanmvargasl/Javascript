//Declaration
class myClass {
    constructor (name,month,year)
    {
        this.name = name;
        this.month = month;
        this.year = year;
    }

    print()
    {
        console.log(`My name is ${this.name}, my months date is ${this.month} and i was born on the year ${this.year}`);
    }
}

let newClass = new myClass (`Alan`,`September`,2019);


newClass.print();