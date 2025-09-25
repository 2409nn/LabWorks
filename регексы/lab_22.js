const first = () => {
    const string = "<p>Text</p><div>More</div>";
    console.log(string.match(/<.*?>/g));
}

// first();

const second = () => {
    const string = "350000тг, 5000$, 1500тг, 20$";
    console.log(string.match(/\d+(?=\$)/g));
}

// second();

const third = () => {
    const string = "350000тг, 5000$, 1500тг, 20$";
    console.log(string.match(/\b\d+(?!\$)\b/g))
}

// third()

const fourth = (password) => {
    console.log(/^(?=.*\w)(?=.*\d).{6,}$/.test(password));
}
// fourth("qwetrt123");

const fifth = () => {
    const string= "student@mail.com";
    console.log(string.match(/(?<=@).+/g));
}

// fifth();

const sixth = () => {
    const phones = "+7-701-123-45-67, +3-544-435-12-23, +7 905-654-67-98, +5-765-982-37-61";
    console.log(phones.match(/\+7(\s|-)\d{3}-\d{3}-\d{2}-\d{2}/g))
}

// sixth();

const seventh = () => {
    const files = "report.doc, photo.png, music.mp3, data.xls";
    console.log(files.match(/\w+(?=\.(doc|xls))/g))

}

// seventh();

const eighth = () => {
    const string = "«JavaScript» и «RegExp»";
    console.log(string.match(/(?<=«)[a-zA-Z0-9]*(?=»)/g));
}

// eighth();