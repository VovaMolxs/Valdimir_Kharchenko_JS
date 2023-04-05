
/*
1. Выведите числа от 1 до 50 и от 35 до 8.
*/

for (let i = 1; i <=50; i++) {
    console.log(i);
}

for (let i = 35; i >= 8; i--) {
    console.log(i);
}

/*
2. Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите числа 
тегом <br /> друг от друга, чтобы получить столбец, а не строку.
*/
let i = 89
while (i >= 11) {
    console.log(i--);
}

/*
3. С помощью цикла найдите сумму чисел от 0 до 100.
*/
let sum = 0;

for (let i = 0; i <= 100; i++) {
    sum += i;
    if (i == 100) {
        console.log(sum);
    }
    
}

/*
4. Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6 
(1+2+3).
*/
sum = 0;
for (let i = 0; i < 5; i++) {
    console.log(`В числе ${i} сумма составляет ${sum+= i}`);
}

/*
5. Выведите чётные числа от 8 до 56. Решить задание через while и for.
*/

for (let i = 8; i <=56; i++) {
    if (i%2 == 0) {
        console.log(i);
    }
}

i = 8;

while (i <= 56) {
    if (i%2 == 0) {
        console.log(i);
    }
    i++
}

/*
6. Необходимо вывести на экран полную таблицу умножения (от 2 до 10) в виде:
2*2 = 4
2*3 = 6
2*4 = 8
2*5 = 10
…
3*1=3
3*2=6
3*3=9
3*4=12
…
Для решения задачи используйте вложенные циклы.
*/

for (let i = 2; i <= 10; i++) {
    for (let j = 1; j <= 10; j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
}


/*
7. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет 
меньше 50. Какое число получится? Посчитайте количество итераций, необходимых 
для этого (итерация - это проход цикла), и запишите его в переменную num.
*/

let n = 1000,
    num = 0;

while(true) {

    num++;
    n /= 2;

    if (n < 50) {
      break;
    } 

}

console.log(`Число которое прервало цикл ${n} количество итераций ${num}`);



/*
8. Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до 
тех пор, пока не будет введена пустая строка или 0. После выхода из цикла выведите 
общую сумму и среднее арифметическое введённых чисел. Если пользователь ввел не 
число, то вывести сообщение об ошибке ввода. При подсчете учесть, что пользователь 
может ввести отрицательное значение.
*/

let enterNumber,
    sumResult = 0,
    meanResult = 0,
    counter = 0;

    while(true) {
        enterNumber = +prompt("Введите число!", '');
        if (enterNumber == 0) {
            break;
        } else if (isNaN(enterNumber)) {
            console.log("Вы ввели не число, попробуйте еще раз!")
            continue;
        }
        counter++;
        sumResult += enterNumber;
        meanResult = sumResult / counter;
        
    }

        console.log(`общую сумма введённых чисел ${sumResult} и среднее арифметическое введённых чисел ${meanResult}`);
        
        

    

/*
9. Дана строка с числами разделенными пробелами «4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57». 
Найдите самое большое и самое маленькое число в строке, используя цикл.
*/

let str = "4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 -100 8 57",
    maxNumber,
    minNumber;

arrayNumber = str.split(" ");

maxNumber = arrayNumber[0];
minNumber = arrayNumber[0];
console.log(typeof arrayNumber[0]);

for (let i = 0; i < arrayNumber.length; i ++) {
    if (maxNumber < arrayNumber[i]) {
        maxNumber = arrayNumber[i];
    } else if (minNumber > arrayNumber[i]) {
        minNumber = arrayNumber[i];
    }
}

console.log(`Максимальное число ${maxNumber} и минимальное число ${minNumber}`);


/*
10. Дано произвольное целое число n. Написать программу, которая:
a. разбивает число n на цифры и выводит их на экран;
b. подсчитывает сколько цифр в числе n;
c. находит сумму цифр числа n;
d. меняет порядок цифр числа n на обратный.
Пример: вводится число 123: цифр в числе = 3; сумма = 6; обратный порядок 321.
*/

let number = 1235464564,
    sumNumber = 0,
    numberReverse = '',
    count = 0;

//arrayNumb =  number.toString().split(''); так получаем массив строковых символов
arrayNumb = Array.from(String(number), Number); //так получем массив чисел


for (let i = arrayNumb.length - 1; i >= 0; i--) {
    while (count < arrayNumb.length) {
        console.log(arrayNumb[count])
        count++;
    }
    numberReverse += arrayNumb[i];
    sumNumber += arrayNumb[i];
}

console.log(`цифр в числе ${arrayNumb.length}
сумма цифр числа ${number} составляет ${sumNumber}
обратный порядок ${numberReverse}
`)
