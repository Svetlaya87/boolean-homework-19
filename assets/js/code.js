
let massBody = +prompt('Введите массу тела');
let heightBody = +prompt('Введите свой рост в метрах, например 1.7.');
let bodyMassIndex = (massBody/heightBody**2)*100;
console.log(`Индекс массы тела ${(Math.round(bodyMassIndex))/100}`);



if ( ((Math.round(bodyMassIndex))/100) < 16.5 ) {
    console.log(`Индекс массы тела ${(Math.round(bodyMassIndex))/100} < 16.5. Выраженный дефицит массы тела `);
}


if ( ((Math.round(bodyMassIndex))/100) >= 16.5 && ((Math.round(bodyMassIndex))/100) <= 18.49) {
    console.log(`Индекс массы тела 16.5 <= ${(Math.round(bodyMassIndex))/100} <= 18.49. Масса тела недостаточная. `);
}


if ( ((Math.round(bodyMassIndex))/100) >= 18.5 && ((Math.round(bodyMassIndex))/100) <= 24.99) {
    console.log(`Индекс массы тела 18,5 <= ${(Math.round(bodyMassIndex))/100} <= 24.99. Масса тела нормальная. `);
}



if ( ((Math.round(bodyMassIndex))/100) >= 25 && ((Math.round(bodyMassIndex))/100) <= 29.99) {
    console.log(`Индекс массы тела 25 <= ${(Math.round(bodyMassIndex))/100} <= 29.99 Масса тела избыточная. Стадия предожирения `);
}


if ( ((Math.round(bodyMassIndex))/100) >= 30 && ((Math.round(bodyMassIndex))/100) <= 34.99) {
    console.log(`Индекс массы тела 30 <= ${(Math.round(bodyMassIndex))/100} <= 34.99. Ожирение I степени. `);
}

if ( ((Math.round(bodyMassIndex))/100) >= 35 && ((Math.round(bodyMassIndex))/100) <= 39.99) {
    console.log(`Индекс массы тела 35 <= ${(Math.round(bodyMassIndex))/100} <= 39.99. Ожирение II степени. `);
}


if ( ((Math.round(bodyMassIndex))/100) >= 40 ) {
    console.log(`Индекс массы тела ${(Math.round(bodyMassIndex))/100} >= 40. Ожирение III степени. Морбидное`);
}


/*определить высокосный год или нет по его номеру*/

let year = +prompt('Введите год');

if ( (year % 4 == 0) && (year % 100 == 0) && (year % 400 == 0)) {

        console.log(`Год ${year} является высокосным.`);
         
    }
else if ((year % 4 == 0) && (year % 100 !== 0)) {
    console.log(`Год ${year} является высокосным.`);
}

else {console.log(`Год ${year} не является высокосным.`);}



