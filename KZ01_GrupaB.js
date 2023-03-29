//1 (3 BODA)
//Napisi funkciju koja ispisuje neparne brojeve od 0 do 100
function neparni() {
    for (let index = 1; index < 100; index += 2) {
        console.log(index)
    }
}
//neparni()

//2 (3 BODA)
//Napisi funkciju koja koristi switch selekciju za pretvaranje numerickog unosa u godisnje u doba. Za neispravan unos ispisi prikladnu poruku.
//INPUT: 1; OUTPUT: "Jesen";
//INPUT: 3; OUTPUT: "Ljeto";
function godisnjeDoba(broj) {
    switch (broj) {
        case 1:
            console.log("Jesen")
            break;
        case 2:
            console.log("Proljeće")
            break;
        case 3:
            console.log("Ljeto")
            break;
        case 4:
            console.log("Zima")
            break;
        default:
            console.log("Neispravan unos!")
            break;
    }
}

//godisnjeDoba(1)

//3 (4 BODA)
//Napisi funkciju koja okrece uneseni string i broji charactere uzimajuci u obzir prazna mjesta (eng. whitespaces)
//INPUT: "Pisanje zadataka nije jednostavan posao"
//OUTPUT: ("oasop navatsondej ejin akatadaz ejnasiP", 39)
function okreni(str) {
    let noviStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        noviStr += str[i]
    }
    console.log(noviStr, ",", noviStr.length)
}

// okreni("Pisanje zadataka nije jednostavan posao")
//4 (4 BODA)
//Napisi funkciju koja odreduje najdulju vrijednostu u danom objektu
const peopleYouShouldKnow = {
    Donald: "Knuth",
    Bjarne: "Stroustrup",
    Ada: "Lovelace",
    Kent: "Beck",
    Martin: "Fowler",
    Erich: "Gamma"
}
function najdulji(somePeople) {
    for (const key in somePeople) {
        console.log(value)
    }
}

najdulji(peopleYouShouldKnow)
//INPUT: somePeople
//OUTPUT: "Stroustrup"

//5 (4 BODA)
//Napisi funkciju u obliku function expressiona koja vraca neproste brojeve
//INPUT: [3, 4, 5, 8, 11]
//OUTPUT: [4, 5, 8]

//ZAMJENA ZA 5 (4 BODA)
//Napisi funkciju u obliku arrow functiona koja pretvara mala slova danih inputa u velika slova
//INPUT: ["aa", "b1", "", null, "AAA"]
//OUTPUT: ["AA","B1", "", null, "AAA"]

//6 (4 BODA)
//Napisi funkciju koja vraca sve drzave koji su imali manju temperaturu od one iz ulaznog parametra
const someEvents = [
    {
        stateName: "SAD",
        measuredTemperature: 56.7,
    },
    {
        stateName: "Tunis",
        measuredTemperature: 55,
    },
    {
        stateName: "Irak",
        measuredTemperature: 53.9,
    },
    {
        stateName: "Argentina",
        measuredTemperature: 48.9,
    },
    {
        stateName: "Grcka",
        measuredTemperature: 48.0,
    },
];
function temperatura(arr, broj) {
    arr.forEach(element => {
        if (element.measuredTemperature < broj)
            console.log(element)
    });
}
temperatura(someEvents, 48.5)
//INPUT: (someStates, 48.5)
//OUTPUT: [{stateName: "Grcka", measuredTemperature: 48.0}]
