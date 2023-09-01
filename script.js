const h1 = document.createElement('h1');
console.log(h1);

h1.classList.add('display-1', 'text-center');

setTimeout( () => {
    h1.innerText = 10;
    setTimeout( () => {
        h1.innerText = 9;
        setTimeout( () => {
            h1.innerText = 8;
            setTimeout( () => {
                h1.innerText = 7;
                setTimeout( () => {
                    h1.innerText = 6;
                    setTimeout( () => {
                        h1.innerText = 5;
                        setTimeout( () => {
                            h1.innerText = 4;
                            setTimeout( () => {
                                h1.innerText = 3;
                                setTimeout( () => {
                                    h1.innerText = 2;
                                    setTimeout( () => {
                                        h1.innerText = 1;
                                        setTimeout(() => {
                                            h1.innerText = "";
                                            // Displaying "Happy Independence" after the countdown
                                            const message = document.createElement('div');
                                            message.innerText = "Happy Independence Day!";
                                            message.classList.add('display-1', 'text-center');
                                            document.body.append(message);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

document.addEventListener('DOMContentLoaded', () => {
    h1.innerHTML = 10;
    document.body.append(h1);
})

