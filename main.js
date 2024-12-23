const headercell_1 = "Harc megnevezése"; //A harc megnevezése megadása változóként.
const headercell_2 = "Szembenálló felek"; //A szembenálló felek megadása változóként.
const headercell_3 = "Haderő"; //A haderő megadása változóként.

const harc_1 = "Rákóczi szabadságharc"; //Rákóczi szabadságharc megadása változóként.
const felek_1 = "Kuruc"; //A kuruc megadása változóként.
const hadero_1 = "70.000"; //70.000 megadása változóként.

const felek_2 = "Labanc"; //A labanc megadása változóként.
const hadero_2 = "60.000"; //60.000 megadása változóként.

const harc_2 = "48-as szabadságharc"; //48-as szabadságharc megadása változóként.
const felek_3 = "Osztrák császárság (+ Orosz birodalom)"; //Az osztrák császárság (+ Orosz birodalom) megadása változóként.
const hadero_3 = "170.000 (+ 200.000)"; //170.000 (+ 200.000) megadása változóként.

const felek_4 = "Magyar királyság"; //Magyar királyság megadása változóként.
const hadero_4 = "170.000"; //170.000 megadása változóként.

const harc_3 = "I. világháború"; //I. világháború megadása változóként.
const felek_5 = "Antant"; //Az antant megadása változóként.
const hadero_5 = "43 millió"; //43 millió megadása változóként.

const felek_6 = "Központi hatalmak"; //Központi hatalmak megadása változóként.
const hadero_6 = "25 millió"; //25 millió kezdetének megadása változóként.

const harc_4 = "Bosworthi csata"; //Bosworthi csata megadása változóként.
const felek_7 = "Angolok (York + Lancester)"; //Angolok (York + Lancester) megadása változóként.
const hadero_7 = "15.000"; //15.000 megadása változóként.

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
th_1.innerHTML = headercell_1; //A cella tartalmának megadása 1 megadott változóból.
tr.appendChild(th_1); //A fejléc sorában lévő 1.cella hozzáadása a fejlécben lévő sorhoz.

const th_2 = document.createElement('th'); //A fejléc sorában lévő 2.cella létrehozása.
th_2.innerHTML = headercell_2; //A cella tartalmának megadása 1 megadott változóból.
th_2.className = "cell"; //className megadása az 2.oszlop 1.cellájának.
tr.appendChild(th_2); //A fejléc sorában lévő 2.cella hozzáadása a fejlécben lévő sorhoz.

const th_3 = document.createElement('th'); //A fejléc sorában lévő 3.cella létrehozása.
th_3.innerHTML = headercell_3; //A cella tartalmának megadása 1 megadott változóból.
tr.appendChild(th_3); //A fejléc sorában lévő 3.cella hozzáadása a fejlécben lévő sorhoz.

const tbody = document.createElement('tbody'); //Törzs létrehozása.
table.appendChild(tbody); //Törzs hozzáadása a táblázathoz.

const tr_1 = document.createElement('tr'); //Törzsben lévő 1.sor létrehozása.
tbody.appendChild(tr_1); //Törzsben lévő 1.sor hozzáadása a törzshöz.

const td_1_1 = document.createElement('td'); //A törzs 1.sorában lévő 1.cella létrehozása.
td_1_1.innerHTML = harc_1; //A cella tartalmának megadása 1 megadott változóból.
tr_1.appendChild(td_1_1); //A törzs 1.sorában lévő 1.cella hozzáadása a törzsben lévő 1.sorhoz.
td_1_1.rowSpan = 2; //A törzs 1.sorában lévő 1.cellának megadjuk, hogy 2 sort csatoljon össze.

const td_1_2 = document.createElement('td'); //A törzs 1.sorában lévő 2.cella létrehozása.
td_1_2.innerHTML = felek_1; //A cella tartalmának megadása 1 megadott változóból.
tr_1.appendChild(td_1_2); //A törzs 1.sorában lévő 2.cella hozzáadása a törzsben lévő 1.sorhoz.

const td_1_3 = document.createElement('td'); //A törzs 1.sorában lévő 3.cella létrehozása.
td_1_3.innerHTML = hadero_1; //A cella tartalmának megadása 1 megadott változóból.
tr_1.appendChild(td_1_3); //A törzs 1.sorában lévő 3.cella hozzáadása a törzsben lévő 1.sorhoz.

const tr_2 = document.createElement('tr'); //Törzsben lévő 2.sor létrehozása.
tbody.appendChild(tr_2); //Törzsben lévő 2.sor hozzáadása a törzshöz.

const td_2_1 = document.createElement('td'); //A törzs 2.sorában lévő 1.cella létrehozása.
td_2_1.innerHTML = felek_2; //A cella tartalmának megadása 1 megadott változóból.
tr_2.appendChild(td_2_1); //A törzs 2.sorában lévő 1.cella hozzáadása a törzsben lévő 2.sorhoz.

const td_2_2 = document.createElement('td'); //A törzs 2.sorában lévő 2.cella létrehozása.
td_2_2.innerHTML = hadero_2; //A cella tartalmának megadása 1 megadott változóból.
tr_2.appendChild(td_2_2); //A törzs 2.sorában lévő 2.cella hozzáadása a törzsben lévő 2.sorhoz.

const tr_3 = document.createElement('tr'); //Törzsben lévő 3.sor létrehozása.
tbody.appendChild(tr_3); //Törzsben lévő 3.sor hozzáadása a törzshöz.

const td_3_1 = document.createElement('td'); //A törzs 3.sorában lévő 1.cella létrehozása.
td_3_1.innerHTML = harc_2; //A cella tartalmának megadása 1 megadott változóból.
tr_3.appendChild(td_3_1); //A törzs 3.sorában lévő 1.cella hozzáadása a törzsben lévő 3.sorhoz.
td_3_1.rowSpan = 2; //A törzs 3.sorában lévő 1.cellának megadjuk, hogy 2 sort csatoljon össze.

const td_3_2 = document.createElement('td'); //A törzs 3.sorában lévő 2.cella létrehozása.
td_3_2.innerHTML = felek_3; //A cella tartalmának megadása 1 megadott változóból.
tr_3.appendChild(td_3_2); //A törzs 3.sorában lévő 2.cella hozzáadása a törzsben lévő 3.sorhoz.

const td_3_3 = document.createElement('td'); //A törzs 3.sorában lévő 3.cella létrehozása.
td_3_3.innerHTML = hadero_3; //A cella tartalmának megadása 1 megadott változóból.
tr_3.appendChild(td_3_3); //A törzs 3.sorában lévő 3.cella hozzáadása a törzsben lévő 3.sorhoz.

const tr_4 = document.createElement('tr'); //Törzsben lévő 4.sor létrehozása.
tbody.appendChild(tr_4); //Törzsben lévő 4.sor hozzáadása a törzshöz.

const td_4_1 = document.createElement('td'); //A törzs 4.sorában lévő 1.cella létrehozása.
td_4_1.innerHTML = felek_4; //A cella tartalmának megadása 1 megadott változóból.
tr_4.appendChild(td_4_1); //A törzs 4.sorában lévő 1.cella hozzáadása a törzsben lévő 4.sorhoz.

const td_4_2 = document.createElement('td'); //A törzs 4.sorában lévő 2.cella létrehozása.
td_4_2.innerHTML = hadero_4; //A cella tartalmának megadása 1 megadott változóból.
tr_4.appendChild(td_4_2); //A törzs 4.sorában lévő 2.cella hozzáadása a törzsben lévő 4.sorhoz.

const tr_5 = document.createElement('tr'); //Törzsben lévő 5.sor létrehozása.
tbody.appendChild(tr_5); //Törzsben lévő 5.sor hozzáadása a törzshöz.

const td_5_1 = document.createElement('td'); //A törzs 5.sorában lévő 1.cella létrehozása.
td_5_1.innerHTML = harc_3; //A cella tartalmának megadása 1 megadott változóból.
tr_5.appendChild(td_5_1); //A törzs 5.sorában lévő 1.cella hozzáadása a törzsben lévő 5.sorhoz.
td_5_1.rowSpan = 2; //A törzs 5.sorában lévő 1.cellának megadjuk, hogy 2 sort csatoljon össze.

const td_5_2 = document.createElement('td'); //A törzs 5.sorában lévő 2.cella létrehozása.
td_5_2.innerHTML = felek_5; //A cella tartalmának megadása 1 megadott változóból.
tr_5.appendChild(td_5_2); //A törzs 5.sorában lévő 2.cella hozzáadása a törzsben lévő 5.sorhoz.

const td_5_3 = document.createElement('td'); //A törzs 5.sorában lévő 3.cella létrehozása.
td_5_3.innerHTML = hadero_5; //A cella tartalmának megadása 1 megadott változóból.
tr_5.appendChild(td_5_3); //A törzs 5.sorában lévő 3.cella hozzáadása a törzsben lévő 5.sorhoz.

const tr_6 = document.createElement('tr'); //Törzsben lévő 6.sor létrehozása.
tbody.appendChild(tr_6); //Törzsben lévő 6.sor hozzáadása a törzshöz.

const td_6_1 = document.createElement('td'); //A törzs 6.sorában lévő 1.cella létrehozása.
td_6_1.innerHTML = felek_6; //A cella tartalmának megadása 1 megadott változóból.
tr_6.appendChild(td_6_1); //A törzs 6.sorában lévő 1.cella hozzáadása a törzsben lévő 6.sorhoz.

const td_6_2 = document.createElement('td'); //A törzs 6.sorában lévő 2.cella létrehozása.
td_6_2.innerHTML = hadero_6; //A cella tartalmának megadása 1 megadott változóból.
tr_6.appendChild(td_6_2); //A törzs 6.sorában lévő 2.cella hozzáadása a törzsben lévő 6.sorhoz.

const tr_7 = document.createElement('tr'); //Törzsben lévő 7.sor létrehozása.
tbody.appendChild(tr_7); //Törzsben lévő 7.sor hozzáadása a törzshöz.

const td_7_1 = document.createElement('td'); //A törzs 7.sorában lévő 1.cella létrehozása.
td_7_1.innerHTML = harc_4; //A cella tartalmának megadása 1 megadott változóból.
tr_7.appendChild(td_7_1); //A törzs 7.sorában lévő 1.cella hozzáadása a törzsben lévő 7.sorhoz.

const td_7_2 = document.createElement('td'); //A törzs 7.sorában lévő 2.cella létrehozása.
td_7_2.innerHTML = felek_7; //A cella tartalmának megadása 1 megadott változóból.
tr_7.appendChild(td_7_2); //A törzs 7.sorában lévő 2.cella hozzáadása a törzsben lévő 7.sorhoz.

const td_7_3 = document.createElement('td'); //A törzs 7.sorában lévő 3.cella létrehozása.
td_7_3.innerHTML = hadero_7; //A cella tartalmának megadása 1 megadott változóból.
tr_7.appendChild(td_7_3); //A törzs 7.sorában lévő 3.cella hozzáadása a törzsben lévő 7.sorhoz.