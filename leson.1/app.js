
let myNumber = 37
let number = +prompt("Ureyimde bir reqem tutmusam 0-dan 50ye qeder.Tutduğum rəqəmi tapın.")
let guessCount = 1
while(number >= 0 && number <= 50){
    if(number === 37 && guessCount === 1){
    console.log("Sizin Kapital bank hesabınıza 1000 Azn köçürüldü.");
    break;
    }else if(number === 37 && (guessCount > 1 && guessCount < 6 )){
    console.log("Sizin Kapital bank hesabınıza 750 Azn köçürüldü.");
    break;
    }else if(number === 37 && (guessCount > 5 && guessCount < 10) ){
    console.log("Sizin Kapital bank hesabınıza 250 Azn köçürüldü.");
    break;
    }else if(number === 37 && guessCount > 9) {
    console.log("Sizin Kapital bank hesabınızdan 250 Azn çıxıldı.");
    break;
    }else {
    alert("Cavabınız yanlışdır.")
    number = +prompt("Yenidən cəhd edin.")
    guessCount += 1
    }
}
alert("Düzgün cavabı tapdınız. Cavab: " + myNumber + ".")