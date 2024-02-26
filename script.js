/* 1 уровень сложности: LEVEL 1

Напишите функцию JavaScript, которая возвращает переданную строку с буквами в алфавитном порядке.
Пример строки: 'uncopyrightable'. Ожидаемый результат: 'abceghilnoprtuy'
function alphabet_order(str) {


// Your code


}


document.writeln(alphabet_order("uncopyrightable")); 


LEVEL 2


Напишите функцию JavaScript, которая принимает строку в качестве параметра и находит самое длинное слово в строке.
function findlongestword(str) {


// Your code


}


document.writeln(findlongestword('Web Development In Telran')); */

let string = 'uncopyrightable';

function alphabet_order (string){
    return string.split('').sort();
}
document.writeln(alphabet_order("uncopyrightable"));


function findlongestword(str) {


    let array = str.match(/\w[a-z]{0,}/gi);
    let result = array[0];

    for (let i = 1 ; i < array.length ; i++){
        if (result.length < array[i].length)
        {

           result = array[i] 
        }
    
    }
    return result;
    
    }
    
    document.writeln(findlongestword('Web Development In Telran'));