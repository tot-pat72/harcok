const header = { //A fejléc objektum létrhozása.
    harc: "Harc megnevezése", //Értékadás a fejléc harc megnevezésének.
    felek: "Szembenálló felek", //Értékadás a fejléc szembenálló feleknek.
    hadero: "Haderő" //Értékadás a fejléc haderőnek.
}

const row_1 = { //Az 1.sor objektum létrhozása.
    harc: "Rákóczi szabadságharc", //Értékadás a 1.sor megnevezésének.
    felek: "Kuruc", //Értékadás a 1.sor szembenálló feleknek.
    hadero: "70.000" //Értékadás a 1.sor haderőnek.
}

const row_2 = { //Az 2.sor objektum létrhozása.
    felek: "Labanc", //Értékadás a 2.sor szembenálló feleknek.
    hadero: "60.000" //Értékadás a 2.sor haderőnek.
}

const row_3 = { //Az 3.sor objektum létrhozása.
    harc: "48-as szabadságharc", //Értékadás a 3.sor harc megnevezésének.
    felek: "Osztrák császárság (+ Orosz birodalom)", //Értékadás a 3.sor szembenálló feleknek.
    hadero: "170.000 (+ 200.000)" //Értékadás a 3.sor haderőnek.
}

const row_4 = { //Az 4.sor objektum létrhozása.
    felek: "Magyar királyság", //Értékadás a 4.sor szembenálló feleknek.
    hadero: "170.000" //Értékadás a 4.sor haderőnek.
}

const row_5 = { //Az 5.sor objektum létrhozása.
    harc: "I. világháború", //Értékadás a 5.sor harc megnevezésének.
    felek: "Antant", //Értékadás a 5.sor szembenálló feleknek.
    hadero: "43 millió" //Értékadás a 5.sor haderőnek.
}

const row_6 = { //Az 6.sor objektum létrhozása.
    felek: "Központi hatalmak", //Értékadás a 6.sor szembenálló feleknek.
    hadero: "25 millió" //Értékadás a 6.sor haderőnek.
}

const row_7 = { //Az 7.sor objektum létrhozása.
    harc: "Bosworthi csata", //Értékadás a 7.sor harc megnevezésének.
    felek: "Angolok (York + Lancester)", //Értékadás a 7.sor szembenálló feleknek.
    hadero: "15.000" //Értékadás a 7.sor haderőnek.
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
th_1.innerHTML = header.harc; //A cella tartalmának megadása a fejléc harcának az értékével.
tr.appendChild(th_1); //A fejléc sorában lévő 1.cella hozzáadása a fejlécben lévő sorhoz.

const th_2 = document.createElement('th'); //A fejléc sorában lévő 2.cella létrehozása.
th_2.innerHTML = header.felek; //A cella tartalmának megadása a fejléc feleknek az értékével.
th_2.className = "cell"; //className megadása az 2.oszlop 1.cellájának.
tr.appendChild(th_2); //A fejléc sorában lévő 2.cella hozzáadása a fejlécben lévő sorhoz.

const th_3 = document.createElement('th'); //A fejléc sorában lévő 3.cella létrehozása.
th_3.innerHTML = header.hadero; //A cella tartalmának megadása a fejléc haderejének az értékével.
tr.appendChild(th_3); //A fejléc sorában lévő 3.cella hozzáadása a fejlécben lévő sorhoz.

const tbody = document.createElement('tbody'); //Törzs létrehozása.
table.appendChild(tbody); //Törzs hozzáadása a táblázathoz.

const tr_1 = document.createElement('tr'); //Törzsben lévő 1.sor létrehozása.
tbody.appendChild(tr_1); //Törzsben lévő 1.sor hozzáadása a törzshöz.

const td_1_1 = document.createElement('td'); //A törzs 1.sorában lévő 1.cella létrehozása.
td_1_1.innerHTML = row_1.harc; //A cella tartalmának megadása az 1.sor harcának az értékével.
tr_1.appendChild(td_1_1); //A törzs 1.sorában lévő 1.cella hozzáadása a törzsben lévő 1.sorhoz.
td_1_1.rowSpan = 2; //A törzs 1.sorában lévő 1.cellának megadjuk, hogy 2 sort csatoljon össze.

const td_1_2 = document.createElement('td'); //A törzs 1.sorában lévő 2.cella létrehozása.
td_1_2.innerHTML = row_1.felek; //A cella tartalmának megadása az 1.sor feleknek az értékével.
tr_1.appendChild(td_1_2); //A törzs 1.sorában lévő 2.cella hozzáadása a törzsben lévő 1.sorhoz.

const td_1_3 = document.createElement('td'); //A törzs 1.sorában lévő 3.cella létrehozása.
td_1_3.innerHTML = row_1.hadero; //A cella tartalmának megadása az 1.sor haderejének az értékével.
tr_1.appendChild(td_1_3); //A törzs 1.sorában lévő 3.cella hozzáadása a törzsben lévő 1.sorhoz.

const tr_2 = document.createElement('tr'); //Törzsben lévő 2.sor létrehozása.
tbody.appendChild(tr_2); //Törzsben lévő 2.sor hozzáadása a törzshöz.

const td_2_1 = document.createElement('td'); //A törzs 2.sorában lévő 1.cella létrehozása.
td_2_1.innerHTML = row_2.felek; //A cella tartalmának megadása a 2.sor feleknek az értékével.
tr_2.appendChild(td_2_1); //A törzs 2.sorában lévő 1.cella hozzáadása a törzsben lévő 2.sorhoz.

const td_2_2 = document.createElement('td'); //A törzs 2.sorában lévő 2.cella létrehozása.
td_2_2.innerHTML = row_2.hadero; //A cella tartalmának megadása a 2.sor haderejének az értékével.
tr_2.appendChild(td_2_2); //A törzs 2.sorában lévő 2.cella hozzáadása a törzsben lévő 2.sorhoz.

const tr_3 = document.createElement('tr'); //Törzsben lévő 3.sor létrehozása.
tbody.appendChild(tr_3); //Törzsben lévő 3.sor hozzáadása a törzshöz.

const td_3_1 = document.createElement('td'); //A törzs 3.sorában lévő 1.cella létrehozása.
td_3_1.innerHTML = row_3.harc; //A cella tartalmának megadása a 3.sor harcának az értékével.
tr_3.appendChild(td_3_1); //A törzs 3.sorában lévő 1.cella hozzáadása a törzsben lévő 3.sorhoz.
td_3_1.rowSpan = 2; //A törzs 3.sorában lévő 1.cellának megadjuk, hogy 2 sort csatoljon össze.

const td_3_2 = document.createElement('td'); //A törzs 3.sorában lévő 2.cella létrehozása.
td_3_2.innerHTML = row_3.felek; //A cella tartalmának megadása a 3.sor feleknek az értékével.
tr_3.appendChild(td_3_2); //A törzs 3.sorában lévő 2.cella hozzáadása a törzsben lévő 3.sorhoz.

const td_3_3 = document.createElement('td'); //A törzs 3.sorában lévő 3.cella létrehozása.
td_3_3.innerHTML = row_3.hadero; //A cella tartalmának megadása a 3.sor haderejének az értékével.
tr_3.appendChild(td_3_3); //A törzs 3.sorában lévő 3.cella hozzáadása a törzsben lévő 3.sorhoz.

const tr_4 = document.createElement('tr'); //Törzsben lévő 4.sor létrehozása.
tbody.appendChild(tr_4); //Törzsben lévő 4.sor hozzáadása a törzshöz.

const td_4_1 = document.createElement('td'); //A törzs 4.sorában lévő 1.cella létrehozása.
td_4_1.innerHTML = row_4.felek; //A cella tartalmának megadása a 4.sor feleknek az értékével.
tr_4.appendChild(td_4_1); //A törzs 4.sorában lévő 1.cella hozzáadása a törzsben lévő 4.sorhoz.

const td_4_2 = document.createElement('td'); //A törzs 4.sorában lévő 2.cella létrehozása.
td_4_2.innerHTML = row_4.hadero; //A cella tartalmának megadása a 4.sor haderejének az értékével.
tr_4.appendChild(td_4_2); //A törzs 4.sorában lévő 2.cella hozzáadása a törzsben lévő 4.sorhoz.

const tr_5 = document.createElement('tr'); //Törzsben lévő 5.sor létrehozása.
tbody.appendChild(tr_5); //Törzsben lévő 5.sor hozzáadása a törzshöz.

const td_5_1 = document.createElement('td'); //A törzs 5.sorában lévő 1.cella létrehozása.
td_5_1.innerHTML = row_5.harc; //A cella tartalmának megadása az 5.sor harcának az értékével.
tr_5.appendChild(td_5_1); //A törzs 5.sorában lévő 1.cella hozzáadása a törzsben lévő 5.sorhoz.
td_5_1.rowSpan = 2; //A törzs 5.sorában lévő 1.cellának megadjuk, hogy 2 sort csatoljon össze.

const td_5_2 = document.createElement('td'); //A törzs 5.sorában lévő 2.cella létrehozása.
td_5_2.innerHTML = row_5.felek; //A cella tartalmának megadása az 5.sor feleknek az értékével.
tr_5.appendChild(td_5_2); //A törzs 5.sorában lévő 2.cella hozzáadása a törzsben lévő 5.sorhoz.

const td_5_3 = document.createElement('td'); //A törzs 5.sorában lévő 3.cella létrehozása.
td_5_3.innerHTML = row_5.hadero; //A cella tartalmának megadása az 5.sor haderejének az értékével.
tr_5.appendChild(td_5_3); //A törzs 5.sorában lévő 3.cella hozzáadása a törzsben lévő 5.sorhoz.

const tr_6 = document.createElement('tr'); //Törzsben lévő 6.sor létrehozása.
tbody.appendChild(tr_6); //Törzsben lévő 6.sor hozzáadása a törzshöz.

const td_6_1 = document.createElement('td'); //A törzs 6.sorában lévő 1.cella létrehozása.
td_6_1.innerHTML = row_6.felek; //A cella tartalmának megadása a 6.sor feleknek az értékével.
tr_6.appendChild(td_6_1); //A törzs 6.sorában lévő 1.cella hozzáadása a törzsben lévő 6.sorhoz.

const td_6_2 = document.createElement('td'); //A törzs 6.sorában lévő 2.cella létrehozása.
td_6_2.innerHTML = row_6.hadero; //A cella tartalmának megadása a 6.sor haderejének az értékével.
tr_6.appendChild(td_6_2); //A törzs 6.sorában lévő 2.cella hozzáadása a törzsben lévő 6.sorhoz.

const tr_7 = document.createElement('tr'); //Törzsben lévő 7.sor létrehozása.
tbody.appendChild(tr_7); //Törzsben lévő 7.sor hozzáadása a törzshöz.

const td_7_1 = document.createElement('td'); //A törzs 7.sorában lévő 1.cella létrehozása.
td_7_1.innerHTML = row_7.harc; //A cella tartalmának megadása a 7.sor harcának az értékével.
tr_7.appendChild(td_7_1); //A törzs 7.sorában lévő 1.cella hozzáadása a törzsben lévő 7.sorhoz.

const td_7_2 = document.createElement('td'); //A törzs 7.sorában lévő 2.cella létrehozása.
td_7_2.innerHTML = row_7.felek; //A cella tartalmának megadása a 7.sor feleknek az értékével.
tr_7.appendChild(td_7_2); //A törzs 7.sorában lévő 2.cella hozzáadása a törzsben lévő 7.sorhoz.

const td_7_3 = document.createElement('td'); //A törzs 7.sorában lévő 3.cella létrehozása.
td_7_3.innerHTML = row_7.hadero; //A cella tartalmának megadása a 7.sor haderejének az értékével.
tr_7.appendChild(td_7_3); //A törzs 7.sorában lévő 3.cella hozzáadása a törzsben lévő 7.sorhoz.