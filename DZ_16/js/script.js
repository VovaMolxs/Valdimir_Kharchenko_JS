let html = document.querySelector('html');
html.setAttribute('lang', 'en');

let meta = document.createElement('meta');
meta.setAttribute('charset', 'UTF-8');
document.head.appendChild(meta);

let title = document.createElement('title');
title.innerHTML = 'test';
document.head.appendChild(title);

let style = document.createElement('style');
document.head.appendChild(style);

style.innerHTML = `@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');


* {
    padding: 0;
    margin: 0;
}

h1 {
    font-family: 'Arvo';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 48px;
    text-align: center;
    
}
h2 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    color: #9FA3A7;

}

h3 {
    font-family: 'OpenSans';
    font-size: 14px;
    line-height: 26px;
    text-align: center;
    color: #9FA3A7;

}

h4 {
    font-family: 'OpenSans';
    font-size: 12px;
    line-height: 22px;
    text-align: center;
    color: #9FA3A7;
}

.container {
    width: 80%;
    margin: 362px auto;
    
}

.choise {
    display: flex;
    margin-top: 55px;
    justify-content: center;
    
}

button {
    width: 147px;
    height: 46px;
    border: 3px solid #FFC80A;
    border-radius: 20px;
    background: none;
    color: #9FA3A7;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
}

.choise-l {
    width: 400px;
    border-left: 2px solid #a4a4a5;
    border-top: 2px solid #a4a4a5;
    border-bottom: 2px solid #a4a4a5;
    border-radius: 10px 0px 0px 10px;
    
    
}

.choise h2 {
    margin-bottom: 19px;
}

.choise h1 {
    margin-bottom: 25px;
}

.choise h4 {
    margin-bottom: 64px;
}

.choise button {

}

.choise-r {
    width: 400px;
    background: #8F75BE;
    border-right: 2px solid #a4a4a5;
    border-top: 2px solid #a4a4a5;
    border-bottom: 2px solid #a4a4a5;
    border-radius: 0px 10px 10px 0;
}

.choise-r h2 {
    color: #FFC80A
}

.choise-r h1 {
    color: white;
}

.choise-r h4 {
    color: white;
}

.choise-r button {
    color: white;
}

.text-content {
    text-align: center;
    padding: 80px 90px 80px 90px;
}`;

let divContainer = document.createElement('div');
document.body.append(divContainer);
divContainer.classList.add('container');

let h1 = document.createElement('h1');
h1.innerHTML = 'Choose Your Option';

let h2 = document.createElement('h2');
h2.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing'

divContainer.prepend(h1);
h1.after(h2);


let divChoise = document.createElement('div');
divChoise.classList.add('choise');
divContainer.append(divChoise);

let divChoiseLeft = document.createElement('div');
divChoiseLeft.classList.add('choise-l');
divChoise.prepend(divChoiseLeft);

let divTextContent = document.createElement('div');
divTextContent.classList.add('text-content');
divChoiseLeft.prepend(divTextContent);


let h2Text = document.createElement('h2');
h2Text.innerHTML = `<h2>FREELANCER</h2>
<h1>Initially designed to </h1>
<h4>But I must explain to you how all this mistaken idea of denouncing </h4>
<button>START HERE</button>`;

divTextContent.prepend(h2Text);

let cloneChoiseRight = divChoiseLeft.cloneNode(true);
cloneChoiseRight.classList.remove('choise-l');
cloneChoiseRight.classList.add('choise-r');
divChoise.append(cloneChoiseRight);