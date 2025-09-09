function firstTask() {

    const promise = new Promise((resolve) => {
        resolve(5);
    })

    promise.then(data => {
        console.log(data * 2);
        return data * 2;

    }).then(data => {
        console.log(data + 3);
        return data + 3;

    }).then(data => {
        console.log(data);
    })

}

// firstTask();

async function delay(ms, value) {

    // console.log("Шаг 1")
        return new Promise(resolve => {
            // console.log("Шаг 2")
            setTimeout(() => {
                // console.log("Шаг 3")
                resolve(value);
            }, ms)
        })
}

// await delay(2500, "hi").then(val => {
//     console.log(val)
// });

async function thirdTask() {

    Promise.all([delay(1000, "первый"), delay(2000, "второй"), delay(3000, "третий")])
        .then(data => {
            console.log(data)
        })
}

// await thirdTask();

delay(1000, "Время вышло")
    .then(data => {
        console.log(data);
    }).then(data => {
        throw new Error("Ошибка");
    }).catch(error => {
        console.log(error);
})

async function fifth() {
    Promise.race([delay(1000, "быстрый"), delay(3000, "медленный")])
    .then(data => {
        console.log(data)});
}

// await fifth();
