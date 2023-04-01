/*Создайте переменные: name, age, city, phone, email, company; и получите через ф-цию 
prompt() соответствующие значения: ваше имя, возраст, город проживания и т.д. 
Выведите на экран фразу: «Меня зовут %Имя%. Мне %Возраст% лет. Я проживаю в 
городе %Город% и работаю в компании %Компания%. Мои контактные данные: 
%Телефон%, %Почта%.». */

let name    = prompt("Как вас зовут?", ''), 
    age     = prompt("Cколько вам лет?", ''), 
    city    = prompt("Откуда вы?", ''),
    company = prompt("Где работаете?", ''), 
    phone   = prompt("Ваш номер телефона?", ''), 
    email   = prompt("Ваш email", '');

    alert("Меня зовут " + name + "Мне " + age + " лет. Я проживаю в городе " + city + " и работаю в компании " + company + " . Мои контактные данные: " + phone + ", " + email);


/*
2. Определите по введенному возрасту (исп. значение из задания 1) год рождения. 
Выведите на экран «%Имя% родился в %Год% году.». 

*/



let date = new Date(); //создаем объект date

let year = date.getFullYear(); //получаем текущий год и присваеваем переменной year

alert(name + " родился в " + (year - age) + " году");

/*
3. Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме 
вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'. 
*/

let number = "426456", sum_left, sum_right;
sum_left = +number.charAt(0) + +number.charAt(1) + +number.charAt(2);
sum_right = +number.charAt(3) + +number.charAt(4) + +number.charAt(5);
(sum_left == sum_right) ? console.log("да") : console.log("нет");



/*
4. Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. 
Проверьте работу скрипта при a, равном 1, 0, -3. 
*/

let a = 1;
(a > 0) ? console.log("верно") : console.log("неверно");


/*

5. Создайте переменные a=10 и b=2. Выведите их сумму, разность, произведение, 
частное, а также, если сумма этих чисел больше 1, то возведите полученную сумму в 
квадрат. */

a = 10;
let b = 2, sum_ab, raz_ab, proiz_ab, chast_ab;

sum_ab = a + b;
raz_ab = a - b;
proiz_ab = a * b;
chast_ab = a / b;

if (sum_ab > 1) sum = sum_ab**2;

console.log(sum);


/*
6. Если переменная a (из задания 5) больше 2 и меньше 11, или переменная b (из задания 
5) больше или равна 6 и меньше 14, то выведите 'Верно', в противном случае выведите 
'Неверно'. 
*/

if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
    console.log("верно");
} else {
    console.log("неверно");
}

/*
7. В переменной n лежит число от 0 до 59. Определите в какую четверть часа попадает 
это число (в первую, вторую, третью или четвертую). */

let n = 45;

if (n <= Math.floor(59/4)) {
    console.log("первая");
} else if ( n <= Math.floor(59/2)) {
            console.log("вторая");
        } else if ( n <= Math.floor(59*3/4)) {
                    console.log("тертья");
                    } else console.log("четвертая");


/*
8. В переменной day лежит число из интервала от 1 до 31. Определите в какую декаду 
месяца попадает это число (в первую, вторую или третью). 
*/

let day = 16;

if (day > 0 && day < 11) {
 console.log("в первую");
} else if ( day > 10 && day < 21) {
    console.log("во вторую");
} else console.log("в тертью");

/*
9. Напишите скрипт, который переводит дни в года (условно 1г = 365дн), в месяцы 
(условно 1м = 31день), в недели, в часы, в минуты и в секунды. Дробные результаты 
вычислений принимаются. Если кол-ва дней не хватает до полного года, месяца, 
недели, вывести сообщение «Меньше года», «Меньше месяца» и «Меньше недели», 
соответственно. 
*/

let days = 6, years, mounts, weeks, clock, minuts, seconds;

console.log((seconds = days * 24 * 60 * 60) + " секундв");
console.log((minuts = days * 24 * 60) + " минут");
console.log((clock = days * 24) + " часов");
if (days < 7) {
    console.log("меньше недели");
} else if ( days % 7 == 0) {
    console.log(days / 7 + " неделя");
} else console.log(Math.floor(days / 7) + " недель(и) " + days % 7 + " день");

if (days < 31) {
    console.log("меньше месяца");
} else if ( days % 31 == 0) {
    console.log(days / 31 + " месяцев");
} else console.log(Math.floor(days / 31) + " месяцев(а) " + days % 31 + " дней");

if (days < 365) {
    console.log("меньше года");
} else if ( days % 365 == 0) {
    console.log(days / 365 + " год");
} else console.log(Math.floor(days / 365) + " год " + days % 365 + " дней");




/*
10. Напишите скрипт, который по введенному дню (исп. значение переменной из 8 
задания) в году (например, 256) определит месяц (от 1 до 12) и пору года (зима, лето и 
т.д.). Скрипт определение поры года написать через switch.*/


let m;

if (day > 0 && day <= 31) m = 0;
if (day > 31  && day <= 59)  m = 1;
if (day > 59  && day <= 90)  m = 2;
if (day > 90  && day <= 120) m = 3;
if (day > 121 && day <= 151) m = 4;
if (day > 151 && day <= 181) m = 5;
if (day > 181 && day <= 212) m = 6;
if (day > 212 && day <= 243) m = 7;
if (day > 243 && day <= 273) m = 8;
if (day > 273 && day <= 304) m = 9;
if (day > 304 && day <= 334) m = 10;
if (day > 334 && day <= 366) m = 11;


switch (m) {
    case(0): console.log("зима");
    break;
    case(2): console.log("зима");
    break;
    case(3): console.log("зима");
    break;
    case(4): console.log("весна");
    break;
    case(5): console.log("весна");
    break;
    case(6): console.log("весна");
    break;
    case(7): console.log("лето");
    break;
    case(8): console.log("лето");
    break;
    case(9): console.log("лето");
    break;
    case(10): console.log("осень");
    break;
    case(11): console.log("осень");
    break;
    case(21): console.log("осень");
    break;
}