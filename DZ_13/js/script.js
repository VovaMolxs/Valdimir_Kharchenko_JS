/*1. Сделайте функцию, которая отнимает от первого числа второе и делит на 
третье. Числа передаются параметром.*/

function zadanie_1(a, b, c) {
    return (a - b)/c;
}

console.log(zadanie_1(5, 2, 3));

/*
2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число 
передается параметром.*/

function zadanie_2(a) {
    return [a*3, a*2];
}

console.log(zadanie_2(3));

/*
3. Напишите функции min и max, которые возвращают меньшее и большее из
чисел a и b.*/

function min(a, b) {
    if (a > b) {
        return b;
    }
    return a;
}

function max(a, b) {
    if (a > b) {
        return a;
    }
    return b;
}

console.log(min(15, 10));
console.log(max(15, 10));
/*
4. Напишите две функции: первая ф-ция должна возвращать массив с 
числовыми значениями, диапазон которых должен вводиться пользователем 
с клавиатуры; вторая – выводить полученный массив.*/

function createArray(start, finish) {
    let arr = [];
    for (start; start <= finish; start++) {
        arr.push(start);
    }
    return arr;
}

function outArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}


outArray(createArray(1, 10));

/*
5. Сделайте функцию isEven() (even - это четный), которая параметром 
принимает целое число и проверяет: четное оно или нет. Если четное - пусть 
функция возвращает true, если нечетное — false.
*/

function isEven(a) {
    if (a % 2 == 0){
        return true;
    }
    return false;
}

console.log(isEven(6));


/*
6. Напишите ф-цию, в которую передается массив с целыми числами. 
Верните новый массив, где останутся лежать только четные из этих чисел. 
Для этого используйте вспомогательную функцию isEven из предыдущей 
задачи.*/

function zadanie_6(arr) {
    let array = [];

    for (let i = 0; i < arr.length; i++) {
        if (isEven(arr[i])) {
            array.push(arr[i]);
        }
    }

    return array;
}


console.log(zadanie_6(createArray(1,10)));
/*
7. Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные 
циклы):
1 
22 
333 
4444 
55555 
666666 
7777777 
88888888
999999999
Кол-во рядов должно вводиться параметром. Если пользователь ввел доп. 
параметр, непредусмотренный ф-цией по умолчанию - один любой символ, 
кроме пробела, то пирамида должна быть нарисована этим символом, 
например: 
Курс «JS».
* 
** 
*** 
**** 
***** 
****** 
******* 
******** 
********* */

function zadanie_7(height, symbol) {
    let arr = [];
    
    if (symbol == "" || symbol == " ") {
        for (let i = 0; i < height; i++) {
            arr[i] = [];
            for (let j = 1; j <= i+1; j++) {
                arr[i].push(j);
            }
        }
        return arr;
    } else {
        
        for (let i = 0; i < height; i++) {
            arr[i] = [];
            for (let j = 0; j <= i; j++) {
                arr[i].push(symbol);   
            }
        }
        return arr;
    }

}

console.log(zadanie_7(10, "$"));

/*
8. Напишите ф-цию, которая рисует равнобедренный треугольник из 
звездочек:
Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же фцию, но которая выведет перевернутый треугольник. */

function zadanie_8(height) {
    width = height*2-1,   //вычисляем ширину основания
    arr = []; 

    //цикл ниже заполняет массив ^
    for (let i = 0; i < height; i++) {
        arr[i] = [];
        for (let j = 0; j < width; j++) {
            arr[i].push("*");   
        }
    }

    //цикл ниже заполняет массив " " влево/вправо от центра массива
    for (let i = 0; i < arr.length; i++) {
        let j = i;
        while (j < height - 1) {
            arr[i][width - height + 1 + j] = " ";
            arr[i][width - height - 1 - j] = " ";
            j++;
        }
        
    }

    return(arr)
}

    console.log(zadanie_8(8));

    function zadanie_8_2(height) {
        width = height*2-1,   //вычисляем ширину основания
        arr = []; 
    
        //цикл ниже заполняет массив ^
        for (let i = 0; i < height; i++) {
            arr[i] = [];
            for (let j = 0; j < width; j++) {
                arr[i].push("*");   
            }
        }
    
        //цикл ниже заполняет массив " " влево/вправо от центра массива
        for (let i = 0; i < arr.length; i++) {
            let j = i;
            while (j < height - 1) {
                arr[i][width - height + 1 + j] = " ";
                arr[i][width - height - 1 - j] = " ";
                j++;
            }
            
        }
    
        return(arr.reverse())
    }
    
        console.log(zadanie_8_2(8));

/*
9. Напишите ф-цию, которая возвращает массив заполненный числами 
Фибоначи от 0 до 1000.*/

function zadanie_9() {
    let arr = [0, 1],
        i = 1;
    while (arr[i] < 1000) {
        num = arr[i - 1] + arr[i];
        if (num < 1000) {
            arr.push(num)
            i++;
            continue;
        } else {
            break;
        }    
        
    }
    return arr;
}

console.log(zadanie_9());



/*
10. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, 
опять сложите его цифры. И так, пока сумма не станет однозначным числом 
(9 и менее). Исп. Рекурсию.*/

function zadanie_10(num) {
    arrayNumb = Array.from(String(num), Number);
    let sum = arrayNumb[arrayNumb.length - 1];

    if (arrayNumb.length <= 1) {
        return "Однозначное число! нечего слаживать!"
    } else {
        for (let i = arrayNumb.length - 2; i >= 0; i--) {
        sum += arrayNumb[i];
    }

    if (sum > 9) {
        return zadanie_10(sum);
    } else {
        return sum;
    }
    }
    
}

console.log(zadanie_10(12345678));

/*
11. Дан массив с числами (передается параметром). Выведите 
последовательно его элементы, используя рекурсию и не используя цикл.*/
let i = 0;
function zadanie_11(arr) {
    if (i < arr.length) {
        console.log(arr[i]);
        i++;
        zadanie_11(arr);
    }
        
}
let array = [9, 8, 7, 6, 5]
zadanie_11(array);


/*
12. Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер 
группы студента и выводящую введённые данные в следующем виде:
***************************** 
* Домашняя работа: «Функции» * 
* Выполнил: студент гр. W4017 * 
* Иванов Иван Иванович * 
***************************** 
Размер рамки должен определятся автоматически по самой длинной строке. 
Рамку вывести в консоль. 
*/


function zadanie_12(firstName, lastName, fatherName, number) {
    let name ="* " + firstName + " " + lastName + " " + fatherName + " *",
        numberGrup = "* Выполнил: студент гр. " + number + " *"
    let border = "******************************"; //минимальная ширина рамки будет соотвествовать данной строке * Домашняя работа: «Функции» * = 
    if (name.length > border.length) {
        let len = name.length;
        for (let i = border.length; i <= len; i++) {
            border += "*";
        }
    } else if (numberGrup.length > border.length) {
        let len = numberGrup.length;
        for (let i = border.length; i <= len; i++) {
            border += "*";
        }
    }

    console.log(`
${border} 
* Домашняя работа: «Функции» * 
* Выполнил: студент гр. ${number} * 
${name}
${border}
    `);
}

zadanie_12("Vova", "Kharchenko", "Olegovichfsdfsdfhjhgjhgj", "V109");



/*
13. Напишите ф-цию, которая должна проверить правильность ввода адреса 
эл. почты, неиспользуя регулярные выражения. Почта верна при условии:
a. весь адрес не должен содержать русские буквы и спецсимволы, 
кроме одной «собачки», 
знака подчеркивания, 
дефиса и точки, причем они не могут
быть первыми и последними в адресе, и идти подряд, например: «..», «@.», 
«.@» или «@@», «_@», «@-», «--» и т.п. 
b. имя эл. почты (до знака @) должно быть длиной более 2 символов, причем 
имя может содержать только буквы, цифры, но не быть первыми и 
единственными в имени, и точку; 
c. после последней точки и после @, домен верхнего уровня (ru, by, com и 
т.п.) не может быть длиной менее 2 и более 11 символов*/


function checkEmail(email) {

    if (typeof email === 'undefined') return null; //если ничего не передали возвращаем null
    if (typeof email !== 'string' || email.indexOf('@') === -1) return false; //если строка или нету @ то возвращаем false

    
    let emailParts = email.split('@'), // делим email на две части до @ после
        emailName = emailParts[0],
        emailDomain = emailParts[1],
        emailDomainParts = emailDomain.split('.'),
        validChars ='abcdefghijklmnopqrstuvwxyz.0123456789_-', //допустимые символы
        checkResult = true;

        if (emailParts.length > 2) {
            console.log("Нельзя использовать @@ ");
            return false;
        }

        if (emailName.length < 3 || emailDomainParts[0].length < 2 || emailDomainParts[0].length > 11 || emailDomainParts[1].length > 3) {
            console.log("неверная длинна email");
            return false;
        }

        if (checkFirstLastChar(emailName) == false || checkFirstLastChar(emailDomainParts[0]) == false || checkFirstLastChar(emailDomainParts[1]) == false) {
            console.log("email не должен начинаться с символов или заканчиваться или сиволы идти подряд друг за другом");
            return false;
        }

        for (let i = emailName.length - 1; i >= 0; i--) {
            if (validChars.indexOf(emailName[i]) < 0) {
                console.log("Неверные сиволы в имени email");
                return false;
            }
        }

        for (let i = emailDomain.length - 1; i >= 0; i--) {
            if (validChars.indexOf(emailDomain[i]) < 0) {
                console.log("Неверные сиволы в домене email");
                return false;
            }
        }


        //функция на проверку первого символа
    function checkFirstLastChar(emailParts) {
            switch (emailParts.charAt(0)) {
                case("."):
                case("@"):
                case("_"):
                case("-"):
                case("."): 
                checkResult = false;
            }
            switch (emailParts.charAt(emailParts.length - 1)) {
                case("."):
                case("@"):
                case("_"):
                case("-"):
                case("."): 
                checkResult = false;
            }
            return checkResult;
            
        }
        
        
    return "Ваш имейл подходит!"

    }
    
console.log(checkEmail("Molxs@mail.ru"));