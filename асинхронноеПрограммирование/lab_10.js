let count = 0;

async function loadData() {
    console.log("Loading data...");

    const result = await new Promise((fulfill, reject) => {
        let randNum = Math.round(Math.random());
        const delay = 3000;

        console.log(`Промис номер ${++count}:`);

        setTimeout(() => {
            if (randNum === 0) {
                reject("Данные были отклонены");
            } else {
                fulfill("Данные загружены");
            }
        }, delay);
    });

    console.log(result);
    return loadData();
}

loadData()
    .catch(err => {
        console.log("Остановка:", err);
    })
    .finally(() => {
        console.log("Операция завершена");
    });
