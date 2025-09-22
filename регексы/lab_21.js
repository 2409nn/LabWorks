// Проверить, что строка состоит только из цифр (например: "2025" → true,
// "2025abc" → false).

const string1 = '2025abc';
const string2 = '2025';
const first = (string) => {
    return /^\d+$/.test(string);
}

// console.log(first(string2));
// console.log(first(string1));

const second = () => {
    const string = 'cat catalog scatter cat';
    console.log(string.match(/\bcat\b/g))
}

// second();

const third = () => {
    const string = 'Ivanov college Petrov Sidorov student';
    console.log(string.match(/\b\p{Lu}\p{L}+/gu));
}

// third()

const fourth = () => {
    const str = `Найти в строке "I like red, green and blue. Green is my favorite color" все
    упоминания цветов red, green, blue.`;

    console.log(str.match(/\b(blue|red|green)\b/gi));
}

// fourth();

const fifth = () => {
    const str = "Ivan Petrov";
    console.log(str.replace(/\b(\w+)\s(\w+)\b/, '$2 $1'));
}

// fifth();

const sixth = () => {
    const str = "2025-09-17";
    console.log(str.replace(/(\d{4})-(\d{2})-(\d{2})/, "$3-$2-$1"));
}

// sixth();

const seventh = () => {
    let str = '87011234567';
    str = str.replace(/^\d/, '+7 ');
    str = str.replace(/\b(\d{3})(\d{3})(\d{2})(\d{2})/, "($1) $2-$3-$4");
    console.log(str);
}

// seventh()

const eighth = (password) => {
    console.log(/^[A-Za-z][A-Za-z0-9]{5,}$/.test(password));
}

// eighth('F21334');
// eighth('qwerty123');
// eighth('ю9323123');
// eighth('c418');