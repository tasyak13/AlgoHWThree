"use strict";

//1

// Имея два отсортированных массива размера m и n соответственно, 
// вам нужно найти элемент, который будет находиться на k-й позиции в конечном отсортированном массиве.

function findInArrys(arr1, arr2, k) {
    let newArr = [];
    let i = 0;
    let j = 0;
   
    while (newArr.length != (arr1.length + arr2.length) - 1) {
        if (arr1[i] < arr2[j]) {
            newArr.push(arr1[i]);
            i++;
        } else {
            newArr.push(arr2[j]);
            j++;
        }
    }
    console.log(newArr[k - 1])
    return newArr[k - 1];
   }

let arrOne = [100, 112, 256, 349, 770];
let arrTwo = [72, 86, 113, 119, 265, 445, 892];

findInArrys(arrOne, arrTwo, 7)
 

//2
// Расставьте в алфавитном порядке буквы. Разрешается использование техники Разделяй и властвуй. Полученные данные напечатайте.

function setUpperSortString(str) {
    let splitString = str.split('');
    let sortString = splitString.sort();
    let joinString = sortString.join('');
    let upperString = joinString.toUpperCase();
    console.log(upperString);
    return upperString;
}

setUpperSortString("poiuytrewqlkjhgfdsamnbvcxz");