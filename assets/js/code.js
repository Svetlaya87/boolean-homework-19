
let massBody = +prompt('Введите массу тела');
let heightBody = +prompt('Введите свой рост в метрах, например 1.7.');
let bodyMassIndex = ( Math.round( (massBody/heightBody**2)*100 ) )/100;
console.log(`Индекс массы тела ${bodyMassIndex}`);



if ( bodyMassIndex < 16.5 ) {
    console.log(`Индекс массы тела ${bodyMassIndex} < 16.5. Выраженный дефицит массы тела `);
}


if ( bodyMassIndex >= 16.5 && bodyMassIndex <= 18.49) {
    console.log(`Индекс массы тела 16.5 <= ${bodyMassIndex} <= 18.49. Масса тела недостаточная. `);
}


if ( bodyMassIndex >= 18.5 && bodyMassIndex <= 24.99) {
    console.log(`Индекс массы тела 18,5 <= ${bodyMassIndex} <= 24.99. Масса тела нормальная. `);
}



if ( bodyMassIndex >= 25 && bodyMassIndex <= 29.99) {
    console.log(`Индекс массы тела 25 <= ${bodyMassIndex} <= 29.99 Масса тела избыточная. Стадия предожирения `);
}


if ( bodyMassIndex >= 30 && bodyMassIndex <= 34.99) {
    console.log(`Индекс массы тела 30 <= ${bodyMassIndex} <= 34.99. Ожирение I степени. `);
}

if ( bodyMassIndex >= 35 && bodyMassIndex <= 39.99) {
    console.log(`Индекс массы тела 35 <= ${bodyMassIndex} <= 39.99. Ожирение II степени. `);
}


if ( bodyMassIndex >= 40 ) {
    console.log(`Индекс массы тела ${bodyMassIndex} >= 40. Ожирение III степени. Морбидное`);
}


/*определить высокосный год или нет по его номеру*/

let year = +prompt('Введите год');


/*если year кратное 400, то оно делится и на 100 и на 4, поэтому оставляем только 1 условие */
if (year % 400 == 0) {

        console.log(`Год ${year} является высокосным.`);
         
    }
else if ((year % 4 == 0) && (year % 100 !== 0)) {
    console.log(`Год ${year} является высокосным.`);
}

else {console.log(`Год ${year} не является высокосным.`);}



