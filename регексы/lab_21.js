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

    console.log(str.match(/\b(blue|red|green)\b/gi))
}

// fourth();

const fifth = () => {
    const str = "Ivan Petrov";
    console.log(str.replace(/\b(\w+)\s(\w+)\b/, '$2 $1'))
}

fifth();