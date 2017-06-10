'use strict';

var imiona = ['Monika'], ['Krystian'], ['Stefan'];

console.log(imiona);

imiona[3] = 'Tania';
imiona[2] = 'Ela';

//console.log(imiona);

imiona.push('Geralt');
console.log(imiona);

imiona.pop();
imiona.pop();

console.log(imiona.unshift('Robert'));

console.log(imiona.length);

//imiona.push("Kaja");

for (var i =0, i <imiona.length; i++){
    console.log( imiona[i]);
}

//forEach to znaczy dla kazdego elementu
imiona.forEach(function (element, i) {
    console.log('Element nr' + i + '=' + element);
});

//console.log( imiona.join (" - ") );

imiona.sort();

imiona.reverse();

var imionaMeskie = ['Robert', 'Mariusz', 'Andrzej'];
var zbiorImion = imionaMeskie.concat(imiona);
console.log(zbiorImion);

console.log(zbiorImion.indexOf("Mariusz"));
console.log( Array.isArray(zbiorImion));

//console.log( zbiorImion.slice(2, 5));

