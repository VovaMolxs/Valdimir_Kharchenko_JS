/*1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального 
поиска и замены.*/

let str1 = 'aaa@bbb@ccc';
console.log(str1.replaceAll('@', '!'));

/*
2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту 
дату в формат 31/12/2025.*/

let date = '2025-12-31';
console.log(date.replaceAll('-', '/'));

/*
3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово 
«javascript» тремя разными способами (через substr, substring, slice).*/

let str3 = "Я учу javascript!";

console.log(str3.substr(2, 3));
console.log(str3.substr(6, 11));

console.log(str3.substring(2, 6));
console.log(str3.substring(6));

console.log(str3.slice(2, 6));
console.log(str3.slice(6));

/*
4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень 
из суммы кубов его элементов. Для решения воспользуйтесь циклом for.*/

let array = [4, 2, 5, 19, 13, 0, 10],
    sum = 0;
console.log(typeof array[1]);
for(let i = 0; i < array.length; i++) {
    sum += Math.pow(array[i], 3);
}

console.log(Math.sqrt(sum));

/*
5. Даны переменные a и b. Отнимите от a переменную b и результат 
присвойте переменной c. Сделайте так, чтобы в любом случае в переменную 
c записалось положительное значение. Проверьте работу скрипта при a и b, 
равных соответственно 3 и 5, 6 и 1.*/


let a = 6,
    b = 1,
    c = 0;

c = Math.abs(a - b);

console.log(c);



/*
6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014. 
Для решения этой задачи напишите функцию, которая будет добавлять 0 
перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 
сделает 01.09.2014).*/

let dateNow = new Date();
dateNow.setDate('1', '9', '2014');
let opt = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'

}

console.log(dateNow.toLocaleString('ru', opt));


/*
7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая 
найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое 
количество раз, буква 'a'.
*/

let str7 = 'aa aba abba abbba abca abea';
console.log(str7.match(/ab+a/g));



/*
8. Напишите ф-цию строгой проверки ввода номер телефона в 
международном формате (<код страны> <код города или сети> <номер 
телефона>). Функция должна возвращать true или false. Используйте 
регулярные выражения.*/

let str8 = '+375-29-1112222';

function checkNumber(number) {
    let reg = /[+]\d{3}[-]\d\d[-]\d{7}/g;
    return reg.test(number);
}
console.log(checkNumber(str8));


/*
9. Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих 
условия:
- весь адрес не должен содержать русские буквы и спецсимволы, кроме 
одной «собачки», знака подчеркивания, дефиса и точки;
- имя эл. почты (до знака @) должно быть длиной более 2 символов, причем 
имя может содержать только буквы, цифры, но не быть первыми и 
единственными в имени;
- после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.)
не может быть длиной менее 2 и более 11 символов. 
Функция должна возвращать true или false. Используйте регулярные 
выражения.*/

let email = 'molxs12@mai_fdf.ru';

function checkEmail(email) {
    let reg =/^([a-z0-9]+)@{1}([a-z0-9]+([_-]{0,1})).[a-z]{2,11}/;
    return reg.test(email);
}

console.log(checkEmail(email));

/*
10. Напишите ф-цию, которая из полного адреса с параметрами и без, 
например: https://tech.onliner.by/2018/04/26/smart-do-200/? 
utm_source=main_tile&utm_medium=smartdo200#zag3 , получит адрес 
доменного имени (https://tech.onliner.by), остальную часть адреса без 
параметров (/2018/04/26/smart-do-200/), параметры 
(utm_source=main_tile&utm_medium=smartdo200) и хеш (#zag3). В адресе 
может и не быть каких-либо составляющих. Ф-ция должна возвращать 
массив.
*/

//не смог пока придумать регулярку для нахождения части адресса без параметров

let url = "https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3";

function disassemblyURL(URL) {
    let array = [],
        domen = url.match(/https:\/\/[a-z.]+/),
        params = url.match(/\?[a-z_=&0-9]+/),
        hesh = url.match(/#[a-z0-9]+/);

        

    return array.concat(domen,params,hesh);
        
    
}

console.log(disassemblyURL(url));