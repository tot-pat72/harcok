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

const tbody = document.createElement('tbody'); //Törzs létrehozása.
table.appendChild(tbody); //Törzs hozzáadása a táblázathoz.

generateHeader(); //A generateHeader függvény meghívása.

generateForm(); //A generateForm függvény meghívása.

render(array); //A render függvény meghívása.

const form = document.getElementById('form'); //Az űrlapban lévő formnak az id-jének az elkérése.
form.addEventListener('submit', function(e) { //A függvény meghívódik, a submit használatakor.
    e.preventDefault(); //A böngésző alapértelmezett lefutásának a megakadályozása.
    const harcHtmlElement = document.getElementById('harc_nev'); //A HtmlElement elkérése, amelynek a harc_nev az id-je.
    const felek_1HtmlElement = document.getElementById('harcolo1'); //A HtmlElement elkérése, amelynek a harcolo1 az id-je.
    const hadero_1HtmlElement = document.getElementById('hadero1'); //A HtmlElement elkérése, amelynek a hadero1 az id-je.
    const felek_2HtmlElement = document.getElementById('harcolo2'); //A HtmlElement elkérése, amelynek a harcolo2 az id-je.
    const hadero_2HtmlElement = document.getElementById('hadero2'); //A HtmlElement elkérése, amelynek a hadero2 az id-je.

    const thisForm = e.currentTarget; //Az e.currentTarget tulajdonsága, amely a formot tartalmazza, ennek eltárolása egy változóba.
    const errorHtmlElements = thisForm.querySelectorAll('.error'); //A formon belüli összes error classal ellátott html element elkérése.
    for(const errorElement of errorHtmlElements){ //Végighaladás a visszakapott errorHtmlElementen.
        errorElement.innerHTML = ''; //Az aktuális elem tartalmának kitörlése.
    }
    let valid = true; //A valid valtozó kezdő értéke igaz.

    if(!validateFormHTMLField(harcHtmlElement, 'A harc nevének megadása kötelező')){ //Ha validateFormHTMLField függvény hamissal tér vissza, a bemeneti harcHtmlElement esetén.
        valid = false; //A valid változó értéke false lesz.
    }

    if(!validateFormHTMLField(felek_1HtmlElement, 'A harcoló fél megadása kötelező')){ //Ha validateFormHTMLField függvény hamissal tér vissza, a bemeneti felek_1HtmlElement esetén.
        valid = false; //A valid változó értéke false lesz.
    }

    if(!validateFormHTMLField(hadero_1HtmlElement, 'A haderő megadása kötelező')){ //Ha validateFormHTMLField függvény hamissal tér vissza, a bemeneti hadero_1HtmlElement esetén.
        valid = false; //A valid változó értéke false lesz.
    }

    if(!getNonEmptyFormHTMLField(felek_2HtmlElement, hadero_2HtmlElement, "A harcoló fél és a haderő megadása kötelező")){ //Ha getNonEmptyFormHTMLField függvény hamissal tér vissza, mind a bemeneti felek_2HtmlElement és az hadero_2HtmlElement esetén is.
        valid = false; //A valid változó értéke false lesz.
    }

    if(valid){ //Ha a valid változó értéke igaz(nem volt kihagyott mező).
        const harcValue = harcHtmlElement.value; //A harcHtmlElement értékének belerakása egy változóba.
        const felek_1Value = felek_1HtmlElement.value; //A felek_1HtmlElement értékének belerakása egy változóba.
        const hadero_1Value = hadero_1HtmlElement.value; //A hadero_1HtmlElement értékének belerakása egy változóba.
        const felek_2Value = felek_2HtmlElement.value === "" ? undefined : felek_2HtmlElement.value; //A felek_2HtmlElement értékének belerakása egy változóba. Amennyiben a felek_2HtmlElement-nek nincs értéke, akkor undefined lesz.
        const hadero_2Value = hadero_2HtmlElement.value === "" ? undefined : hadero_2HtmlElement.value; //A hadero_2HtmlElement értékének belerakása egy változóba. Amennyiben a hadero_2HtmlElement-nek nincs értéke, akkor undefined lesz.

        const newElement = { //A newElement létrehozása.
            harc: harcValue, //Az harc értéke az harcValue lesz.
            felek_1: felek_1Value, //Az felek_1 értéke az felek_1Value lesz.
            hadero_1: hadero_1Value, //Az hadero_1 értéke az hadero_1Value lesz.
            felek_2: felek_2Value, //Az felek_2 értéke az felek_2Value lesz.
            hadero_2: hadero_2Value //Az hadero_2 értéke az hadero_2Value lesz.
        }
        array.push(newElement); //A newElement hozzáadása az arrayhez.
        tbody.innerHTML = ''; //A táblázat tartalmának kitörlése.
        render(array); //A render függvény újra renderelése.
        thisForm.reset(); //A form visszaállítása alaphelyzetbe.
    }
})