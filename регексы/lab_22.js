const first = () => {
    const str = "<p>Text</p><div>More</div>";
    console.log(str.match(/<.*?>/g))
}

// first()

const second = () => {
    const str = "350000тг, 5000$, 1500тг, 20$";
    console.log(str.match(/\d+(?=\$)/g));
}

// second();

const third = () => {
    const str = "350000тг, 5000$, 1500тг, 20$";
    console.log(str.match(/\b\d+(?!\$)\b/g))
}

// third()

//Проверить, что пароль состоит не менее чем из 6 символов, содержит
// хотя бы одну букву и хотя бы одну цифру.

const fourth = (password) => {
    console.log(/^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(password));
}

// fourth('1abcdeffef');

const fifth = (password) => {
    const email = 'student@mail.com';
    console.log(email.match(/$()/))
}