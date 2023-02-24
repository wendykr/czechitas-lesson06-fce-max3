// tady je místo pro náš program

// Maximum ze tří čísel

const max3 = (cislo1, cislo2, cislo3) => {

    if ((cislo1 > cislo2) && (cislo1 > cislo3)) {
        return cislo1;
    } else if ((cislo1 < cislo2) && (cislo2 > cislo3)) {
        return cislo2;
    } else {
        return cislo3;
    }
}

console.log(max3(10,20,30))