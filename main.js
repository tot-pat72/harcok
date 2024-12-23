const array = [ //Az array tömb létrehozása.
    { //Az array 1.elemének a létrehozása.
        harc: "Rákóczi szabadságharc", //Értékadás az array 1.elem harc tulajdonságának.
        felek_1: "Kuruc", //Értékadás az array 1.elem felek_1 tulajdonságának.
        hadero_1: "70.000", //Értékadás az array 1.elem hadero_1 tulajdonságának.
        felek_2: "Labanc", //Értékadás az array 1.elem felek_2 tulajdonságának.
        hadero_2: "60.000" //Értékadás az array 1.elem hadero_2 tulajdonságának.
    },

    { //Az array 2.elemének a létrehozása.
        harc: "48-as szabadságharc", //Értékadás az array 2.elem harc tulajdonságának.
        felek_1: "Osztrák császárság (+ Orosz birodalom)", //Értékadás az array 2.elem felek_1 tulajdonságának.
        hadero_1: "170.000 (+ 200.000)", //Értékadás az array 2.elem hadero_1 tulajdonságának.
        felek_2: "Magyar királyság", //Értékadás az array 2.elem felek_2 tulajdonságának.
        hadero_2: "170.000" //Értékadás az array 2.elem hadero_2 tulajdonságának.
    },

    { //Az array 3.elemének a létrehozása.
        harc: "I. világháború", //Értékadás az array 3.elem harc tulajdonságának.
        felek_1: "Antant", //Értékadás az array 3.elem felek_1 tulajdonságának.
        hadero_1: "43 millió", //Értékadás az array 3.elem hadero_1 tulajdonságának.
        felek_2: "Központi hatalmak", //Értékadás az array 3.elem felek_2 tulajdonságának.
        hadero_2: "25 millió" //Értékadás az array 3.elem hadero_2 tulajdonságának.
    },

    { //Az array 4.elemének a létrehozása.
        harc: "Bosworthi csata", //Értékadás az array 4.elem harc tulajdonságának.
        felek_1: "Angolok (York + Lancester)", //Értékadás az array 4.elem felek_1 tulajdonságának.
        hadero_1: "15.000" //Értékadás az array 4.elem hadero_1 tulajdonságának.
    }
]

const head = { //A fejléc objektum létrhozása.
    harc: "Harc megnevezése", //Értékadás az objektum harc megnevezésének.
    felek: "Szembenálló felek", //Értékadás az objektum szembenálló feleknek.
    hadero: "Haderő" //Értékadás az objektum haderőnek.
}

const table = document.createElement('table'); //Táblázat lértehozása.
document.body.appendChild(table); //Táblázat hozzáadása a dokumentumhoz.

const colgroup = document.createElement('colgroup'); //Colgroup létrehozása.
table.appendChild(colgroup); //Colgroup hozzáadása a táblázathoz.

const colSpan_1 = document.createElement('col'); //1.oszlop létrehozása.
colSpan_1.className = "columns"; //className megadása az 1.oszlopnak.
colgroup.appendChild(colSpan_1); //1.oszlop hozzáadása a Colgouphoz.

const colSpan_2 = document.createElement('col'); //2.oszlop létrehozása.
colgroup.appendChild(colSpan_2); //2.oszlop hozzáadása a Colgouphoz.

const colSpan_3 = document.createElement('col'); //3.oszlop létrehozása.
colSpan_3.className = "columns"; //className megadása a 3.oszlopnak.
colgroup.appendChild(colSpan_3); //3.oszlop hozzáadása a Colgouphoz.

const thead = document.createElement('thead'); //Fejléc létrehozása.
table.appendChild(thead); //Fejléc hozzáadása a táblázathoz.

const tr = document.createElement('tr'); //Fejlécben lévő sor létrehozása.
thead.appendChild(tr); //Fejlécben lévő sor hozzáadása a fejléchez.

const th_1 = document.createElement('th'); //A fejléc sorában lévő 1.cella létrehozása.
th_1.innerHTML = head.harc; //A cella tartalmának megadása a fejléc harcának az értékével.
tr.appendChild(th_1); //A fejléc sorában lévő 1.cella hozzáadása a fejlécben lévő sorhoz.

const th_2 = document.createElement('th'); //A fejléc sorában lévő 2.cella létrehozása.
th_2.innerHTML = head.felek; //A cella tartalmának megadása a fejléc feleknek az értékével.
th_2.className = "cell"; //className megadása az 2.oszlop 1.cellájának.
tr.appendChild(th_2); //A fejléc sorában lévő 2.cella hozzáadása a fejlécben lévő sorhoz.

const th_3 = document.createElement('th'); //A fejléc sorában lévő 3.cella létrehozása.
th_3.innerHTML = head.hadero; //A cella tartalmának megadása a fejléc haderejének az értékével.
tr.appendChild(th_3); //A fejléc sorában lévő 3.cella hozzáadása a fejlécben lévő sorhoz.

const tbody = document.createElement('tbody'); //Törzs létrehozása.
table.appendChild(tbody); //Törzs hozzáadása a táblázathoz.

for(let i = 0; i < array.length; i++) { //Ciklus segítségével végighaladás az arrayen.
    const currentElement = array[i]; //Változó definiálása, amibe az array aktuális számú elemét belerakom.

    const tr_1 = document.createElement('tr'); //Egy új sor létrehozása a táblázatba.
    tbody.appendChild(tr_1); //Az adott sor hozzáfűzése a táblázathoz.

    const harc = document.createElement('td'); //Új cella létrehozása az adott sorban.
    harc.innerHTML = currentElement.harc; //A cella tartalmának megadása az aktuális elem harcának az értékével.
    tr_1.appendChild(harc); //A létrehozott cellát hozzáadom a már korábban létrehozott sorhoz.

    const felek_1 = document.createElement('td'); //Új cella létrehozása az adott sorban.
    felek_1.innerHTML = currentElement.felek_1; //A cella tartalmának megadása az aktuális elem feleknek az értékével.
    tr_1.appendChild(felek_1); //A létrehozott cellát hozzáadom a már korábban létrehozott sorhoz.

    const hadero_1 = document.createElement('td'); //Új cella létrehozása az adott sorban.
    hadero_1.innerHTML = currentElement.hadero_1; //A cella tartalmának megadása az aktuális elem haderőnek az értékével.
    tr_1.appendChild(hadero_1); //A létrehozott cellát hozzáadom a már korábban létrehozott sorhoz.

    const tr_2 = document.createElement('tr'); //Még egy új sor létrehozása a táblázatba.
    tbody.appendChild(tr_2); //Az adott sor hozzáfűzése a táblázathoz.

    const felek_2 = document.createElement('td'); //Új cella létrehozása az adott sorban.
    felek_2.innerHTML = currentElement.felek_2; //A cella tartalmának megadása az aktuális elem feleknek az értékével.
    tr_2.appendChild(felek_2); //A létrehozott cellát hozzáadom a már korábban létrehozott sorhoz.

    const hadero_2 = document.createElement('td'); //Új cella létrehozása az adott sorban.
    hadero_2.innerHTML = currentElement.hadero_2; //A cella tartalmának megadása az aktuális elem haderőnek az értékével.
    tr_2.appendChild(hadero_2); //A létrehozott cellát hozzáadom a már korábban létrehozott sorhoz.
}