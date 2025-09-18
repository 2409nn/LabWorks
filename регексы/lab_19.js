const first = () => {
    const reg = /anna/i;
    let s1 = "Anna Petrova";
    let s2 = "Ivan Ivanov";

    console.log(reg.test(s1));
    console.log(reg.test(s2));
}

// first();

const second = () => {
    const text = `Колледж может стать отличным стартом для будущей карьеры.
    Именно поэтому Иван так усердно готовился к поступлению в этот
    престижный колледж.
        Он знал, что учеба поможет ему реализовать все свои мечты, ведь
    этот колледж славится сильной программой и талантливыми
    преподавателями.`

    console.log(text.match(/колледж/gi).length);
}

// second();

const third = () => {
    const email = 'student@mail\.com';
    console.log(/@mail.com/.test(email));
}

// third();

const fourth = () => {
    const emails = ['student1@mail\.com', 'student2@gmail\.com', 'student3@mail\.ru'];
    const reg = /(@mail\.com|@gmail\.com|@yahoo\.com|@mail\.ru)/gi
    const result = [];

    emails.forEach(email => {
        result.push(email.replace(reg, 'mail.com'));

    })
    return result;
}

// console.log(fourth());

const fifth = () => {
    let phone = "8-777-123-45-67".replace(/-/g, ' ');;
    console.log(phone);
}

// fifth()

const sixth = () => {
    let str = "Event: 2025, Next: 2026";
    console.log(str.match(/\b\d{4}\b/g));
}

// sixth();

const seventh = () => {
    let str = "anna@mail.com; ivan@mail.com, petr@mail.com";
    console.log(str.split(/[,;]\*s/g))
}

// seventh();