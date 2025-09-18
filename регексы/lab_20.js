
const first = (name) => {
    const res = !/\d/.test(name);
    console.log(res);
}

// first("Iskander")

const second = () => {
    const str = "Петр — 25 лет, Анна — 19 лет, Иван — 7 лет";
    console.log(str.match(/\b\d+\b/g));
}

// second();

const third = () => {
    const str = "Иванов, Петров, R2D2, Сидоров, Smith";
    console.log(str.match(/\p{Lu}\p{L}+/gu))

}

// third();

const fourth = () => {
    const phone = "+7-701-1234567";
    console.log(phone.split(/\D/g).filter(Boolean));
}

// fourth();

const fifth = () => {
    const str = "Ноутбук — 350000тг, Кофе — 1500тг, Мышь — 5000тг";
    console.log(str.match(/\d+тг/gi))
}

// fifth();

const sixth = () => {
    const str = "12kg 30min 100km";
    const nums = str.match(/\d+/g);
    const measure = str.match(/\D+/g);

    console.log(nums);
    console.log(measure);
}

// sixth();