//Упражнение №2

let  a1, a2, a3, a4, a5, a6, a7, a8, a9, 
a10, a11, a12, a13, a14, a15, a16, a17, a18;

a1 = 5 % 3; 
a2 = 3 % 5; 
a3 = 5 + '3'; 
a4 = '5' - 3; 
a5 = 75 + 'кг'; 
a6 = 785 * 653; 
a7 = 100 / 25; 
a8 = 0 * 0; 
a9 = 0 / 2; 
a10 = 89 / 0; 
a11 = 98 + 2; 
a12 = 5 - 98; 
a13 = (8 + 56 * 4) / 5; 
a14 = (9 - 12) * 7 / (5 + 2); 
a15 = +"123"; 
a16 = 1 || 0; 
a17 = false || true;
a18 = true > 0;

console.log(typeof a1);
console.log(typeof a2);
console.log(typeof a3);
console.log(typeof a4);
console.log(typeof a5);
console.log(typeof a6);
console.log(typeof a7);
console.log(typeof a8);
console.log(typeof a9);
console.log(typeof a10);
console.log(typeof a11);
console.log(typeof a12);
console.log(typeof a13);
console.log(typeof a14);
console.log(typeof a15);
console.log(typeof a16);
console.log(typeof a17);
console.log(typeof a18);

/*
Упражнение №3
Напишите скрипт, который находит площадь прямоугольника высотой 23см и
шириной 10см, значение высоты и ширины должны хранится в width и height,
соответственно, а значение площади должно хранится в числовой переменной SPryam. 
*/

let width = 10, 
    height = 23, 
    SPryam = null;

SPryam = width * height;
console.log("Площадь прямоугольника " + SPryam);

/*
Упражнение №4 
Напиши скрипт, который находит объем цилиндра высотой 10м и диаметром
основания равным значению переменной a7 из задания 2, результат поместите в
переменную VCilindra
*/

let VCilindra, heightCilindra = 10;

VCilindra = a7 * heightCilindra;
console.log("Объем цилиндра " + VCilindra);

/*
Упражнение №5
Найдите площадь круга (SKruga) с радиусом 5см (r).
*/

let SKruga, r = 5;

SKruga = 3.14 * r * r;  // 3.14 * Math.pow(r, 2);
console.log("Площадь круга " + SKruga);


/* Упражнение №6
Найдите площадь трапеции (STrap) с основаниями 5см (a) и 7см (b), и высотой 10см
(h).
*/

let STrap, a = 5, b = 7, h = 10;

STrap = ((a + b) / 2) * h;
console.log("Площадь трапеции " + STrap);

/* Упражнение №7
Даны: размер ипотечного кредита (S - 2 млн. руб), процентная годовая ставка (p - 10%),
кол-во лет (years - 5). Найти переплату по кредиту, значение переплаты должно
содержаться в переменной Pereplata.

и
*/

let Pereplata, 
    p = 10, 
    years = 5,
    s = 2000000;

Pereplata = s * p / years * 12;
console.log("Переплата по кредиту " + Pereplata);

/* Упражнение №8
Решите уравнения (найдите неизвестный x), где aUr = 8, bUr = 3:
a+2(x-b)=16; 
b(x+15)=a+6x; 
x+2x+ax+bx=23780. 

*/

let x,
    aUr = 8,
    bUr = 3;

x = (16 + 2 * bUr - aUr)/2;
console.log(x);

x = (aUr - 15 * bUr) / (bUr - 6);
console.log(x);

x = 23780 / (1 + 2 + aUr + bUr);
console.log(x);


