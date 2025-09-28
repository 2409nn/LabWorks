const first = () => {
    try {
        const button = document.querySelector('#btn2');
        button.addEventListener('click', () => {
            console.log('Кнопка 3 нажата');
        })

    }catch(err) {
        console.log('Кнопка не найдена')
    }

}

first();

const second = () => {
    console.log(location.href);
    console.log(navigator.userAgent);
    console.log(history.length);
}

second();

const thirdAndFourth = () => {
    const elem = document.querySelector('#container');
    console.log(elem)
    console.log(elem.childNodes); // комментарии, содержимое тегов и сами теги
    console.log(elem.children); // только теги
}

thirdAndFourth()

const sixth = () => {
    console.dir(document);

    document.title = "Ноый заголовок";
}

sixth();

const seventh = () => {
    console.dir(window);
    console.log(document);


    // window содержит глобальный объект браузера (методы, свойства, таймеры, location, history и др.).
    // document содержит DOM текущей страницы.
    // document доступен через window.document, так как window - глобальный контейнер.
    // document.alert("test") вызовет ошибку, так как alert - метод window, не document.

}

seventh();