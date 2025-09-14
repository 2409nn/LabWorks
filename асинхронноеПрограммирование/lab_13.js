
async function first() {
    await fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(json => {
            console.log(`title: ${json.title}`)
            console.log(`body: ${json.body}`)
        })
        .catch(err => console.error(err));

}

// first()

async function second() {
    await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            for (let user of users) {
                console.log(user.name);
            }
        })
        .catch(err => console.error(err));
}

// second();

import open from "open";
// библиотека для открытия ссылки в браузере

async function third() {
    await fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(json => {
            console.log(open(json.message));
        })
}

// third();

async function fourth() {
    await fetch('https://open.er-api.com/v6/latest/USD')
    .then(response => response.json())
    .then(json => {
        console.log(json.rates.JPY);
    })
    .catch(err => console.error(err));
}

// fourth();

async function fifth() {
    const response = await fetch('https://dog.ceo/tralaleloTralala')

    if (!response.ok) {
        console.log(`Ошибка: код ${response.status}`);
    }
}

// fifth()