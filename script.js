const h1 = document.createElement('h1');
console.log(h1);
document.body.classList.add('d-flex', 'flex-column', 'justify-content-center', 'align-items-center', 'vh-100');
h1.classList.add('display-1', 'text-center');

setTimeout(() => {
    h1.innerText = 10;
    setTimeout(() => {
        h1.innerText = 9;
        setTimeout(() => {
            h1.innerText = 8;
            setTimeout(() => {
                h1.innerText = 7;
                setTimeout(() => {
                    h1.innerText = 6;
                    setTimeout(() => {
                        h1.innerText = 5;
                        setTimeout(() => {
                            h1.innerText = 4;
                            setTimeout(() => {
                                h1.innerText = 3;
                                setTimeout(() => {
                                    h1.innerText = 2;
                                    setTimeout(() => {
                                        h1.innerText = 1;
                                        setTimeout(() => {
                                            h1.innerText = '';
                                            const message = document.createElement('div');
                                            message.innerText = "Happy Independence Day";
                                            message.classList.add('display-1', 'text-center')
                                            const image = document.createElement('img');  //we can add image
                                            image.setAttribute('src', '/india-flag.webp');
                                            image.setAttribute('alt', 'india-flag');
                                            image.classList.add('rounded', 'mx-auto', 'pt-auto', 'd-block')
                                            document.body.append(message, image);
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)



document.addEventListener('DOMContentLoaded', () => {
    h1.innerHTML = 10;
    document.body.append(h1);
})