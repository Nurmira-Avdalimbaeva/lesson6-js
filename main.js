            // 1) Дан массив с элементами [1, 2, 3, 4, 5]. 
            // С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.

// const arr = [1, 2, 3, 4, 5];
// let result = 0;  

// for (let i = 0; i < arr.length; i++) {
//     result += arr[i];
// }

// console.log(result); 


            // 2) Дан массив с числами. Числа могут быть положительными и отрицательными. 
            // Найдите сумму положительных элементов массива. 

// const numbers = [1, -2, 3, -4, 5, -6];
// let Summa = 0;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 0) {
//         Summa += numbers[i];
//     }
// }

// console.log(Summa); 


            // 3) Дан массив с элементами [1, 2, 5, 9, 4, 13, 4, 10].
            //  С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. 
            // Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.

// const arr = [1, 2, 5, 9, 4, 13, 4, 10];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 4) {
//         console.log('Есть!');
//     }
// }

            // 4) Дан массив с элементами ['Привет, ', 'мир', '!']. 
            // Необходимо записать в переменную text фразу 'Привет, мир!', а затем вывести на экран содержимое этой переменной.

// let arr=['Привет, ','мир','!']; 
// let str=arr[0]+arr[1]+arr[2];

// console.log(str);

            // 5) Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.

// const arr1 = ['a', 'b', 'c'];
// const arr2 = [1, 2, 3];
// const Arr1Arr2 = [...arr1, ...arr2];

// console.log(Arr1Arr2); 

            // 6) Дан массив ['a', 'b', 'c']. Добавьте ему в начало элементы 1, 2, 3. И отдельно добавьте в конец массива 1,2,3

// const myArray = ['a', 'b', 'c'];
// myArray.unshift(3);
// myArray.unshift(2);
// myArray.unshift(1);

// myArray.push(1);
// myArray.push(2);
// myArray.push(3);

// console.log(myArray);

            // 7) Создайте массив ['a', 'b', 'c', 'd'] и с его помощью выведите на экран строку 'a+b, c+d'.

// const myArray = ['a', 'b', 'c', 'd'];
// const resultString = myArray[0] + '+' + myArray[1] + ', ' + myArray[2] + '+' + myArray[3];

// console.log(resultString);


            // 8) Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].

// const arr = [1, 2, 3, 4, 5];
// const newArray = arr.slice(0, 3);

// console.log(newArray); 


            //  9) Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

// const arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2); 

// console.log(arr); 


            // 10) Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// const arr = [1, 2, 3, 4, 5];

// arr.splice(1, 0, 'a', 'b');
// arr.splice(6, 0, 'c');
// arr.splice(8, 0, 'e');

// console.log(arr);


            // 11) Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и отдельно последний элемент. Используйте shift, pop

// const arr = ['js', 'css', 'jq'];

// const firstElement = arr.shift(); 
// const lastElement = arr.pop(); 

// console.log('Первый элемент:', firstElement);
// console.log('Последний элемент:', lastElement);