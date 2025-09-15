async function hello() {
    return "Hello, async!"
}

function delay(ms, val) {
    return new Promise(resolve => setTimeout(() => {
        resolve(val);
    }, ms));
}

async function callDelay() {
    let a = delay(1000, "a");
    let b = delay(1500, "b");
    let c = delay(2000, "c");

    return Promise.allSettled([a, b, c]);
}

// await callDelay()
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

async function tralalelo(){
    return Promise.resolve(100);
}

// tralalelo()
//     .then((data) => {console.log(data)});

async function test() {
    const result = await new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Запрос отклонен");
        }, 1000);
    });

    return result;
}
//
// test()
//     .then(data => console.log(data))
//     .catch(err => console.log("Ошибка:", err));

async function run() {
    let v = await Promise.resolve("start");
    v = v + " → step1";
    v = v + " → step2";
    console.log(v);
}

run();