const home = document.getElementById("h-score");
const guest = document.getElementById("g-score");

let homeCount = parseInt(home.textContent);
let guestCount = parseInt(guest.textContent);


const hOne=()=>{
    homeCount +=1
    home.textContent=homeCount
}
const hTwo=()=>{
    homeCount +=2
    home.textContent=homeCount
}
const hThree=()=>{
    homeCount +=3
    home.textContent=homeCount
}

const gOne=()=>{
    guestCount +=1;
    guest.textContent = guestCount
}
const gTwo=()=>{
    guestCount +=2;
    guest.textContent = guestCount
}
const gThree=()=>{
    guestCount +=3;
    guest.textContent = guestCount
}