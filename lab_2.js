// Создать объект с методом, внутри которого есть стрелочная функция.
//     Проверить, какое значение примет this.

const user = {

    'name': 'Iskander',
    'sayName': function sayName () {
        console.log(`I\'m ${this.name}`)
    },
    'sayNameArrow': sayNameArrow = () => {
        console.log(`I\'m ${this.name}`)
    },
};

const sayName = user.sayName.bind(user);
sayName();

// sayName();

// потому что this – это ссылка на объект, в котором расположен метод, а sayName здесь за пределами объекта.
// это можно исправить с помощью: sayName.call(user) или sayName.bind(user);

