/**
 * Táblázat fejlécének a létrehozása.
 * A head végighalad a header tömbön.
 * Az adatokat a header tömbből szedi ki. 
 */
function generateHeader(){ //A generateHeader függvény meghatározása.
    const header = ["Harc megnevezése", "Szembenálló felek", "Haderő"]; //A header változóba, a tömb tartalmának az eltárolása.
    const tr = document.createElement('tr'); //Fejlécben lévő sor létrehozása.
    thead.appendChild(tr); //Fejlécben lévő sor hozzáadása a fejléchez.
    for(const head of header){ //Végighaladás a headeren, a head az aktuális elem.
        const th = document.createElement('th') //Új cella létrehozása.
        th.innerHTML = head; //A cella tartalmának megadása a headnek az értékével.
        if(head === "Szembenálló felek"){ //Ha a head egyenlő a szembenálló felekkel.
            th.className = "cell"; //className megadása a fejléc szembenálló felek cellájának.
        }
        tr.appendChild(th); //Cellák hozzáadása a fejlécben lévő sorhoz.
    }
}

/**
 * A form létrehozása:
 * -Harc megnevezése
 * -Első harcoló fél
 * -Első haderő
 * -Második harcoló fél
 * -Második haderő
 * Button a kitöltött form hozzáadásához.
 * Minden inputnak van egy error classa.
 */
function generateForm(){ //A generateForm függvény meghatározása.
    const form = document.createElement('form'); //Form létrehozása.
    form.id = 'form'; //A form id-jének megadása.
    document.body.appendChild(form); //A form hozzáadása a dokumentum törzséhez.

    const div_1 = document.createElement('div'); //A form 1.sorának a létrehozása.
    div_1.classList.add('field'); //A field class hozzáadása a div_1-hez.

    const label_1 = document.createElement('label'); //A label_1 elem létrehozása.
    label_1.htmlFor = 'harc_nev'; //A label_1 for-ának megadása.
    label_1.innerText = 'Harc megnevezése:'; //A label_1 tartalma a Harc megnevezése: lesz.
    div_1.appendChild(label_1); //A label_1 hozzáadása a div_1-hez.

    const input_1 = document.createElement('input'); //Az input_1 mező létrehozása.
    input_1.type = 'text'; //Az input_1 típusának megadása.
    input_1.id = 'harc_nev'; //Az input_1 id-jének megadása.
    input_1.name = 'harc_nev'; //Az input_1 nevének megadása.
    div_1.appendChild(input_1); //Az input_1 hozzáadása a div_1-hez.

    const div_1_error = document.createElement('div'); //A div_1_error div létrehozása.
    div_1_error.classList = 'error'; //A div_1_error-hoz az error class hozzárendelése.
    div_1.appendChild(div_1_error); //A div_1_error hozzáadása a div_1-hez.
    form.appendChild(div_1); //A div_1 hozzáadása a formhoz.

    
    const div_2 = document.createElement('div'); //A form 2.sorának a létrehozása.
    div_2.classList.add('field'); //A field class hozzáadása a div_2-höz.

    const label_2 = document.createElement('label'); //A label_2 elem létrehozása.
    label_2.htmlFor = 'harcolo1'; //A label_2 for-ának megadása.
    label_2.innerText = '1. Harcoló fél:'; //A label_2 tartalma az 1. Harcoló fél: lesz.
    div_2.appendChild(label_2); //A label_2 hozzáadása a div_2-höz.

    const input_2 = document.createElement('input'); //Az input_2 mező létrehozása.
    input_2.type = 'text'; //Az input_2 típusának megadása.
    input_2.id = 'harcolo1'; //Az input_2 id-jének megadása.
    input_2.name = 'harcolo1'; //Az input_2 nevének megadása.
    div_2.appendChild(input_2); //Az input_2 hozzáadása a div_2-höz.

    const div_2_error = document.createElement('div'); //A div_2_error div létrehozása.
    div_2_error.classList = 'error'; //A div_2_error-hoz az error class hozzárendelése.
    div_2.appendChild(div_2_error); //A div_2_error hozzáadása a div_2-höz.
    form.appendChild(div_2); //A div_2 hozzáadása a formhoz.


    const div_3 = document.createElement('div'); //A form 3.sorának a létrehozása.
    div_3.classList.add('field'); //A field class hozzáadása a div_3-hoz.

    const label_3 = document.createElement('label'); //A label_3 elem létrehozása.
    label_3.htmlFor = 'hadero1'; //A label_3 for-ának megadása.
    label_3.innerText = '1. Haderő:'; //A label_3 tartalma az 1. Haderő: lesz.
    div_3.appendChild(label_3); //A label_3 hozzáadása a div_3-hoz.

    const input_3 = document.createElement('input'); //Az input_3 mező létrehozása.
    input_3.type = 'text'; //Az input_3 típusának megadása.
    input_3.id = 'hadero1'; //Az input_3 id-jének megadása.
    input_3.name = 'hadero1'; //Az input_3 nevének megadása.
    div_3.appendChild(input_3); //Az input_3 hozzáadása a div_3-hoz.

    const div_3_error = document.createElement('div'); //A div_3_error div létrehozása.
    div_3_error.classList = 'error'; //A div_3_error-hoz az error class hozzárendelése.
    div_3.appendChild(div_3_error); //A div_3_error hozzáadása a div_3-hoz.
    form.appendChild(div_3); //A div_3 hozzáadása a formhoz.


    const div_4 = document.createElement('div'); //A form 4.sorának a létrehozása.
    div_4.classList.add('field'); //A field class hozzáadása a div_4-hez.

    const label_4 = document.createElement('label'); //A label_4 elem létrehozása.
    label_4.htmlFor = 'harcolo2'; //A label_4 for-ának megadása.
    label_4.innerText = '2. Harcoló fél:'; //A label_4 tartalma a 2. Harcoló fél: lesz.
    div_4.appendChild(label_4); //A label_4 hozzáadása a div_4-hez.

    const input_4 = document.createElement('input'); //Az input_4 mező létrehozása.
    input_4.type = 'text'; //Az input_4 típusának megadása.
    input_4.id = 'harcolo2'; //Az input_4 id-jének megadása.
    input_4.name = 'harcolo2'; //Az input_4 nevének megadása.
    div_4.appendChild(input_4); //Az input_4 hozzáadása a div_4-hez.

    const div_4_error = document.createElement('div'); //A div_4_error div létrehozása.
    div_4_error.classList = 'error'; //A div_4_error-hoz az error class hozzárendelése.
    div_4.appendChild(div_4_error); //A div_4_error hozzáadása a div_4-hez.
    form.appendChild(div_4); //A div_4 hozzáadása a formhoz.


    const div_5 = document.createElement('div'); //A form 5.sorának a létrehozása.
    div_5.classList.add('field'); //A field class hozzáadása a div_5-höz.

    const label_5 = document.createElement('label'); //A label_5 elem létrehozása.
    label_5.htmlFor = 'hadero2'; //A label_5 for-ának megadása.
    label_5.innerText = '2. Haderő:'; //A label_5 tartalma a 2. Haderő: lesz.
    div_5.appendChild(label_5); //A label_5 hozzáadása a div_5-höz.

    const input_5 = document.createElement('input'); //Az input_5 mező létrehozása.
    input_5.type = 'text'; //Az input_5 típusának megadása.
    input_5.id = 'hadero2'; //Az input_5 id-jének megadása.
    input_5.name = 'hadero2'; //Az input_5 nevének megadása.
    div_5.appendChild(input_5); //Az input_5 hozzáadása a div_5-höz.

    const div_5_error = document.createElement('div'); //A div_5_error div létrehozása.
    div_5_error.classList = 'error'; //A div_5_error-hoz az error class hozzárendelése.
    div_5.appendChild(div_5_error); //A div_5_error hozzáadása a div_5-höz.
    form.appendChild(div_5); //A div_5 hozzáadása a formhoz.


    const button = document.createElement('button'); //A gomb elem létrehozása.
    button.type = 'submit'; //A gomb típusa submit lesz.
    button.innerText = 'Hozzáadás'; //A gomb tartalma a Hozzáadás lesz.
    form.appendChild(button); //A gomb hozzáadása a formhoz.
}

/**
 * A render függvény létrehoz egy táblázatot az arrayben lévők alapján.
 * A harc, felek és haderő után új sor létrehozása, kivéve ha egy harchoz több fél, haderő tartozik. Ez esetben ugyanahoz a harchoz egy új sor létrehozása.
 * @param {array} array tartalmazza az adatokat.
 */
function render(array){ //A render függvény meghatározása, amelynek a bemeneti paramétere az array lesz.
    for(const currentElement of array){ //Végighaladás az arrayen, a currentElement az aktuális elem.
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
    
        if(currentElement.felek_2 !== undefined && currentElement.hadero_2 !== undefined){ //Ha a currentElement.felek_2 és a currentElement.hadero_2 nem egyenlő undefineddal, akkor végig megy az elágazáson.
            const tr_2 = document.createElement('tr'); //Még egy új sor létrehozása a táblázatba.
            tbody.appendChild(tr_2); //Az adott sor hozzáfűzése a táblázathoz.
            harc.rowSpan = 2; //Ha idáig lefut, akkor összevonjuk az harc 2 sorát.
    
            const felek_2 = document.createElement('td'); //Új cella létrehozása az adott sorban.
            felek_2.innerHTML = currentElement.felek_2; //A cella tartalmának megadása az aktuális elem feleknek az értékével.
            tr_2.appendChild(felek_2); //A létrehozott cellát hozzáadom a már korábban létrehozott sorhoz.
    
            const hadero_2 = document.createElement('td'); //Új cella létrehozása az adott sorban.
            hadero_2.innerHTML = currentElement.hadero_2; //A cella tartalmának megadása az aktuális elem haderőnek az értékével.
            tr_2.appendChild(hadero_2); //A létrehozott cellát hozzáadom a már korábban létrehozott sorhoz.
        }
    }
}

/**
 * @param {HTMLElement} inputHTMLElement Ennek megvizsgálása, hogy üres e.
 * @param {string} errormessage Hibaüzenet kiírása, hogyha üres a mező.
 * @returns {Boolean} Visszatér, vagy hamissal hogyha nem ment át a validáción, igennel meg ha ki volt töltve mindkettő mező. 
 */
function validateFormHTMLField(inputHTMLElement, errormessage){ //A validateFormHTMLField függvény meghatározása.
    let valid = true; //A valid változó létrehozása, ami a true értéket kapja.
    if(inputHTMLElement.value === ''){ //Ha az inputHTMLElement.value beviteli mezője üres.
        const parentElement = inputHTMLElement.parentElement; //Az inputHTMLElement beviteli mező parentElement property-jének az eltárolása egy változóban.
        const errorplace = parentElement.querySelector('.error'); //Az inputHTMLElement beviteli mező parentElement div-jében az error classal ellátott elem megkeresése és annak eltárolása egy változóban.
        if (errorplace != undefined){ //Ha talál ilyen mezőt(nem undefined).
            errorplace.innerHTML = errormessage; //Akkor a hibaüzenet megadása kell.
        }
        valid = false; //A valid változó értéke false lesz.
    }
    return valid; //Visszatérés a valid változóval. Amely hamis, hogyha nem ment át a validáción. Ha meg ki van töltve, akkor igazzal tér vissza.
}

/**
 * A getNonEmptyFormHTMLField függvény csak akkor fut le, hogyha csak az egyik mező van kitöltve.
 * @param {HTMLElement} felek_2 Ennek megvizsgálása, hogy van e benne valami.
 * @param {HTMLElement} hadero_2 Ennek megvizsgálása, hogy van e benne valami.
 * @param {string} errormessage Hibaüzenet kiírása, hogyha üres a mező.
 * @returns {Boolean}Visszatér, vagy hamissal hogyha csak az egyik volt kitöltve, igennel meg ha ki volt töltve mindkettő mező.
 */
function getNonEmptyFormHTMLField(felek_2, hadero_2, errormessage){ //A getNonEmptyFormHTMLField függvény meghatározása.
    let valid = true; //A valid változó létrehozása, ami a true értéket kapja.
    if (!validateFormHTMLField(felek_2, errormessage) && hadero_2.value !== ''){ //Ha validateFormHTMLField függvény hamissal tér vissza, a bemeneti felek_2 esetén és a hadero_2.value nem egyenlő egy üres stringgel.
        valid = false; //A valid változó értéke false lesz.
    };
    if (!validateFormHTMLField(hadero_2, errormessage) && felek_2.value !== ''){ //Ha validateFormHTMLField függvény hamissal tér vissza, a bemeneti hadero_2 esetén és a felek_2.value nem egyenlő egy üres stringgel.
        valid = false; //A valid változó értéke false lesz.
    };
    return valid; //Visszatérés a valid változóval. Amely hamis, hogyha nem ment át a validáción. Ha meg ki van töltve, akkor igazzal tér vissza.
}