/*Дано натуральное число. Найти и вывести на страницу все его делители.
    a) Определить количество его четных делителей
    b) Найти сумму его четных делителей*/ 

let naturalNum = +prompt('Введите любое натуральное число','...');
document.write('Вы ввели число: ' + naturalNum + '.' + '<br /><br />');

for (let i = 2; i * 2 <= naturalNum; i++) {
    if (naturalNum % i == 0) {
        document.write(`Делитель этого числа: ${i}` + '<br /><br />');
    }
}

