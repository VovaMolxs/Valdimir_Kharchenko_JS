/*1.Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти 
элементы на экран.*/

let arr1 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

/*
2. Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут 
быть положительными и отрицательными. Выведите на экран только отрицательные 
числа, которые больше -10, но меньше -3.*/

let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] > -10 && arr2[i] < -3) {
        console.log(arr2[i]);
    }
}

/*
3. Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и 
while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого 
массива. Запишите ее в переменную result и выведите.*/

arr3_for = [];
arr3_while = [];
for (let i = 23; i < 57; i++) {
    arr3_for.push(i);
}
let i = 23;
while (i < 57) {
    arr3_while.push(i++);
}
console.log(arr3_for);
console.log(arr3_while);

let result3 = 0;
for (let i = 0; i < arr3_for.length; i++) {
    result3 += arr3_for[i];
}

console.log(result3);

/*
4. Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’]. 
Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
*/
let arr4 = ['10', '20', '30', '50', '235', '3000'];


for (let i = 0; i < arr4.length; i++) {
    if (arr4[i][0] == 1 || arr4[i][0] == 2 || arr4[i][0] == 5 ) {
        console.log(arr4[i]);
    }
}


/*
5. Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все 
дни недели, а выходные дни выведите жирным.
*/

let arr5 = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] == 'СБ' || arr5[i] == 'ВС') {
        console.error(arr5[i]);

    } else {
        console.log(arr5[i]);
    }
}


/*
6. Создайте массив с произвольными данными. Добавьте в конец массива любой элемент, 
и получите последний элемент массива, используя свойство length.*/

let arr6 = [],
    n = Math.floor(Math.random()*20);
for(let i = 0; i < n; i++) {
    arr6.push(Math.floor(Math.random()*20));
}
console.log(arr6);

arr6.push("Привет");
console.log(arr6[arr6.length - 1]);

/*
7. Запросите у пользователя по очереди числовые значения при помощи prompt и 
сохраните их в массив. Собирайте числа до тез пор пока пользователь не введет пустое 
значение. Выведите получившийся массив на экран. Выполните сортировку чисел 
массива, и выведите его на экран.*/



let arr7 = [],
enterNum,
j = 0;


while(true) {
    enterNum = prompt(`Введите число ${j}`, Math.floor(Math.random()*30));
    
    if (isNaN(+enterNum)) {
        alert('Вы ввели не число!');
        continue;
    } else if (enterNum === '') {
        break;
    } else {
        arr7.push(+enterNum);
        j++;
    }
    
}

console.log(arr7);

for (let i = 0; i < arr7.length; i++) {
    for (let j = 0; j < arr7.length; j++) {
            if (arr7[j] > arr7[j+1]) {
                let num = arr7[j];
                arr7[j] = arr7[j+1];
                arr7[j+1] = num; 
        } 
    }
    
}
console.log(arr7);


/*
8. Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке), 
используя цикл while и метод reverse.*/

let arr8 = [12, false, 'Текст', 4, 2, -5, 0];
let counter = 0;
arr8.reverse();

while (counter < arr8.length) {
    console.log(arr8[counter++]);
}


/*
9. Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном 
целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6].
*/


let arr9 = [5, 9, 21, , , 9, 78, , , , 6];
let counterEmpty = 0;
for (let i = 0; i < arr9.length; i++) {

    if (typeof arr9[i] == 'undefined') {
        counterEmpty++;
    }
}

console.log(counterEmpty);

/*
10. Найдите сумму элементов массива между двумя нулями (первым и последним нулями 
в массиве). Если двух нулей нет в массиве, то выведите ноль. В массиве может быть 
более 2х нулей. Пример массива: [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] или 
[1,8,0,13,76,8,7,0,22,0,2,3,2].*/

let arr10 = [1,8,0,13,76,8,7,0,22,0,2,3,2],
    start = arr10.indexOf(0),
    end = arr10.lastIndexOf(0),
    arr10_num = arr10.slice(start, end),
    sum = 0;

for (let i = 0; i < arr10_num.length; i++) {
    sum +=arr10_num[i];
}

console.log(sum);

/*Задание 11*/

//с костылями но как-то решил)

let height = 10,              //высота треугольника
    maxIndex = height*2-1,   //вычисляем ширину основания
    arr11 = []; 

    //цикл ниже заполняет массив ^
    for (let i = 0; i < height; i++) {
        arr11[i] = [];
        for (let j = 0; j < maxIndex; j++) {
            arr11[i].push("^");   
        }
    }

    //цикл ниже заполняет массив " " влево/вправо от центра массива
    for (let i = 0; i < arr11.length; i++) {
        let j = i;
        while (j < height - 1) {
            arr11[i][maxIndex - height + 1 + j] = "  ";
            arr11[i][maxIndex - height - 1 - j] = "  ";
            j++;
        }
        
    }

    console.log(arr11);
    
    
    //
    /*
    for (let i = 0; i < arr11.length; i++) {
        for (let j = 0; j < arr11[i].length; j++) {
            document.write(arr11[i][j]);
        }
        document.writeln('</br>');
    }*/