function createBook(title, author) {
    return {
        title: title,
        author: author,
    }
}

function User(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function () {
        console.log(`Hello by ${this.name}`)
    }
}

const Iskander = new User('Iskander', 17);
Iskander.sayHello();

const Pasha = new User('Pasha', 20);
Pasha.sayHello();

const now = new Date();
const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
console.log(`${now.getFullYear()} ${months[now.getMonth()]}`);

const sum = new Function('x', 'y', 'console.log(x + y);');
sum(2, 2);