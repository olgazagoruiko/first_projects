
// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/

function t1() {
    document.querySelector('.out-1').innerHTML=document.querySelector('.i-1').value;
}

document.querySelector('.i-1').onkeyup=t1;

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

function t2(event) {
    document.querySelector('.out-2').innerHTML=event.charCode;
    console.log(event);
}

document.querySelector('.i-2').onkeypress=t2;


// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */

let w3 = 75;

function t3(event) {
  
  if (event.charCode>=47 && event.charCode<=57){
    document.querySelector('.out-3').innerHTML='false';
  }else{
    document.querySelector('.out-3').innerHTML='true';  
  }
}
document.querySelector('.i-3').onkeypress=t3;


// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */

function t4(event) {
    let t=document.querySelector('.i-4').value;
    document.querySelector('.out-4').innerHTML=t.toLowerCase(); 
}

document.querySelector('.i-4').onkeyup=t4;

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5(event) {
    let t=document.querySelector('.i-5').value;
    document.querySelector('.out-5').innerHTML=t.toUpperCase(); 

}
document.querySelector('.i-5').onkeyup=t5;

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */
let input='';
function t6(event) {
    
    if (event.keyCode>=97){
        input+=event.key;
    }
    document.querySelector('.i-6').value=input;
    return false;
}
document.querySelector('.i-6').onkeypress=t6;


// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */

function t7() {
    const a7 = ['a','c','m','k'];
    let out='';
    let rand=Math.floor(Math.random()*a7.length);
    out+=a7[rand];
    document.querySelector('.out-7').innerHTML+=out;
}

document.querySelector('.i-7').onkeypress=t7;

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */
let out='';
function t8(event) {     
    let z=event.key;
     if (z==='i'){
        z='1';
    };
    if (z==='o'){
        z='0';
    };
    if (z==='l'){
        z='7';
    };
    out+=z;
    document.querySelector('.i-8').value=out;
    return false;
}
document.querySelector('.i-8').onkeypress=t8;


// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */
let count=0;
function t9(event) {
    if (event.keyCode===40){
        count++;
    }
    document.querySelector('.out-9').innerHTML=count; 
}
document.querySelector('.i-9').onkeyup=t9;



// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */
let w=75;
let h=75;
function t10(event) {
    if (event.keyCode===37 || event.keyCode===39){
     document.querySelector('.div-10 img').style.width=w+'px';
     w++;
    }
    if (event.keyCode===40 || event.keyCode===38){
        document.querySelector('.div-10 img').style.height=h+'px';
        h++;
    }
}

document.querySelector('.i-10').onkeyup=t10;


// Task 11 ============================================
/*  Проект. 
1. Выполните в html верстку клавиш клавиатуры. Сверстайте – блок цифровых клавиш от 1 до 0. И ряд клавиш q – p. Добавьте клавишу левый shift, левый  alt, левый ctrl,  пробел, enter.
2. Добавьте на input .i-11 событие onkeypress или onkeyup или onkeydown ( по вашему выбору). Когда событие происходит ( ввод символа в input) необходимо подсветить ( добавить класс active) клавише с таким символом. Со всех остальных клавиш – удалить класс active.
3. Если вводится следующий символ – повторить удаление active и подсветить клавишу с введенным символом.
4. Ограничения проекта – тестируются только указанные клавиши в латинской раскладке. Комбинации клавиш не тестируются. Т.е. нажиматься shift+A, ctrl+shift – не будут. Все символы вводятся в нижнем регистре.
*/

function t11(event) {
let keys=document.querySelectorAll('.key');
for (let key of keys){
    key.classList.remove('active');
    // if ((event.key)===key.getAttribute('data-key')){
    //     key.classList.add('active');   
    // }
    let elem=document.querySelector(`.key[data-key='${event.key}']`);
    elem.classList.add('active');
}
}
document.querySelector('.i-11').onkeyup=t11;

