
// Suma liczb parzystych:
// Utwórz funkcję, która przyjmuje tablicę liczb i zwraca sumę wszystkich liczb parzystych z tej tablicy.

let sum = 0;
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbers.length; i++) {
    if ((numbers[i] % 2) == 0) {
        sum += numbers[i]
    }

}

console.log(sum);



// Usuwanie duplikatów z tablicy:
// Napisz funkcję, która przyjmuje tablicę liczb i zwraca nową tablicę bez duplikatów.
const tablica = [1, 2, 3, 1, 1, 2, 2, 3, 3, 3, 7, 8, 9, 99,];
const rezulta = tablica.filter((element, index, tablica) => tablica.indexOf(element) === index);


console.log(JSON.stringify(rezulta));


const bezDuplicatow = [...new Set(tablica)];
console.log(bezDuplicatow);

//set porownuje dwa obikety  i daje nam false jesli nawet sa takie same

function removeDuplicatiom(colection, getId) {
    const unikalnaTablica = {};
    return tablica.filter(tablica => {
        const identifier = JSON.stringify(getId(tablica));
        if (unikalnaTablica[identifier]) {
            return false;
        }
        unikalnaTablica[identifier] = true;
        return true;
    })

}
console.log(removeDuplicatiom(tablica, value => value));
// Napisz funkcję, która sprawdza, czy podana data jest datą przyszłą.


const przyszlaData = new Date('2024-01-01');

const obecnaData = new Date();

if (przyszlaData.getTime() > obecnaData.getTime()) {
    console.log('data jest przyszla');
} else {
    console.log('datra jest nieprzyszla');
}




// Zaawansowane obiekty:
// Stwórz konstruktor obiektów reprezentujących książki. Dodaj metody do dodawania i usuwania ocen książki oraz wyliczania średniej oceny.


class Ksiazka {
    constructor(tytul, autor) {
        this.tytul = tytul;
        this.autor = autor
        this.ocena = []

    }

    dodajOcene(ocena) {
        if (ocena >= 1 && ocena <= 10) {
            this.ocena.push(ocena);
            console.log(`Dodano ocenę ${ocena} do książki '${this.tytul}' autorstwa ${this.autor}.`);
        } else {
            console.log("Ocena powinna być w zakresie od 1 do 10.");

        }
    }
    SredniaOcena() {
        if (this.ocena.length > 0) {
            const sumaOcen = this.ocena.reduce((prevValue, currentValue) => {
                return (
                    prevValue + currentValue
                )
            }, 0);
            const srednia = sumaOcen / this.ocena.length;
            return srednia;
        } else {
            return 0;
        }

    }
    UsunOcene(ocena) {
        const index = this.ocena.indexOf(ocena);
        if (index !== -1) {
            this.ocena.splice(index, 1);
            console.log(`usunieto ocena${ocena}z ksiazki ${this.tytul} autorstawa${this.autor}`);
        } else {
            console.log(`Ksiazka '${this.tytul}'nie ma oceny${ocena}`);
        }
    }
}
const mojaKsiazka = new Ksiazka("Jan pan", "Jan Kowalski");
const KsiazkaPanakleksa = new Ksiazka('Aleks', "Adama Adamowicza")
KsiazkaPanakleksa.dodajOcene(8);
KsiazkaPanakleksa.dodajOcene(8);
KsiazkaPanakleksa.dodajOcene(3);
console.log(`Średnia ocena: ${KsiazkaPanakleksa.SredniaOcena()}`);

console.log(`Ocena usunięta: ${KsiazkaPanakleksa.UsunOcene()}`);
mojaKsiazka.dodajOcene(8);
mojaKsiazka.dodajOcene(9);
mojaKsiazka.dodajOcene(7);
console.log(`Średnia ocena: ${mojaKsiazka.SredniaOcena()}`);




// const numberArr=[2,4,6]

// //0+2=2
// //2+4=6
// //6+6=12

// const sum2 = numberArr.reduce((prevValue, currentValue)=>{
//     return prevValue+currentValue

// },0)




//Sortowanie tablicy obiektów:
//Posortuj tablicę obiektów reprezentujących osoby na podstawie ich wieku od najstarszej do najmłodszej.

const osoby = [
    { imie: "Anna", wiek: 30 },
    { imie: "Jan", wiek: 45 },
    { imie: "Karolina", wiek: 20 }
];

const nowaOsoba = { imie: "Marek", wiek: 55 };
osoby.push(nowaOsoba)
console.log(osoby);
for (let i = 0; i < osoby.length; i++) {
    console.log(`Imię: ${osoby[i].imie}, Wiek: ${osoby[i].wiek} lat`);
}


function porownajWiek(a, b) {
    return a.wiek - b.wiek;
}

console.log(osoby.sort(porownajWiek));


let sumaWieku = 0;

for (let i = 0; i < osoby.length; i++) {
    sumaWieku += osoby[i].wiek;
}

const sredniawieku = sumaWieku / osoby.length;
console.log(sredniawieku);


// Obsługa błędów:
// Napisz funkcję, która przyjmuje liczbę i zwraca jej pierwiastek kwadratowy. Obsłuż przypadki, gdy liczba jest ujemna.



function pierwiastekKwadratowy(liczba) {
    if (liczba >= 0) {
        return Math.sqrt(liczba)
    } else {
        return "liczba musi byc nieujemna"
    }


}
console.log(pierwiastekKwadratowy(7));


// Rekurencja:
// Napisz rekurencyjną funkcję obliczającą silnię liczby.



const factorial = (liczba1) => {

    if (liczba1 < 0) {
        throw new Error(' nie ma silni z minusowimi liczbami ')

    } else if (liczba1 === 0) {
        return 1;
    }
    return liczba1 * factorial(liczba1 - 1);



}
console.log(factorial(3));




// Wyszukiwanie w tablicy:
// Stwórz funkcję, która przyjmuje tablicę obiektów i nazwisko osoby do wyszukania. Zwróć cały obiekt odpowiadający temu nazwisku.


// function ZnajdzOsobePoNazwisku(tablica, nazwisko) {
//     for (let i = 0; i < tablica.length; i++) {
//         if (tablica[i].nazwisko === nazwisko) {
//             return tablica[i];

//         }
//     }
// }

// // Przykład użycia:
// const tablicaOsob = [
//     { imie: "Jan", nazwisko: "Kowalski" },
//     { imie: "Anna", nazwisko: "Nowak" },
//     { imie: "Marek", nazwisko: "Kowalski" },
// ];

// const szukaneNazwisko = "Kowalski";
// const znalezionaOsoba = znajdzOsobePoNazwisku(tablicaOsob, szukaneNazwisko);

// if (znalezionaOsoba) {
//     console.log("Znaleziono osobę:", znalezionaOsoba);
// } else {
//     console.log("Nie znaleziono osoby o nazwisku", szukaneNazwisko);
// }



// Tworzenie kopii obiektu:
// Utwórz funkcję, która przyjmuje obiekt i zwraca jego głęboką kopię, czyli kopię zawierającą te same dane, ale niezależną od oryginału.


function glebokaKopiaTablicy(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray[i] = array[i];

    }
    return newArray
}

let tablica1 = ['maja', 'jan',]
let tablica2 = glebokaKopiaTablicy(tablica1)

console.log(tablica1);
console.log(tablica2);



// Suma liczb parzystych:
// Utwórz funkcję, która przyjmuje tablicę liczb i zwraca sumę wszystkich liczb parzystych z tej tablicy.


let iloscLiczba = 0
let tablicaLiczbaParzystych = [1, 2, 3, 4, 6, 7, 10, 5, 6]


for (let i = 0; i < tablicaLiczbaParzystych.length; i++) {
    if ((tablicaLiczbaParzystych[i] % 2) == 0) {
        iloscLiczba += tablicaLiczbaParzystych[i]

    }
}
console.log(iloscLiczba);


// Obsługa plików JSON:
// Napisz kod, który wczytuje dane z pliku JSON (może to być plik na dysku lub dane w formie tekstu), a następnie przetwarza te dane w JavaScript.

// Petla
// Napisz kod JS który w div-ie z id=wynik wyświetli liczby od 1 do 100 rozdzielone przecinkami.

const wynik = document.getElementById('al')

let liczby = ''

// petla for 
for (let i = 1; i <= 100; i++) {
    liczby += i + ',';

}
wynik.innerHTML = liczby