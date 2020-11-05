(function (){
    const pump = document.getElementById("pump");
    let chargeMeter = document.getElementById("chargeMeter");
    let currentChargeAmount = document.getElementById("amount");
    const bleedOff = 1;
    const pumpValue = 3;
    let chargeAmount = 0;
    pump.addEventListener("click", function (){
        console.log(chargeAmount);
        if(chargeAmount > 0) {
            // bleed();
            chargeAmount--;
            console.log("bleed off");
            currentChargeAmount.innerText = chargeAmount;
        }
        if(chargeAmount < 100) {
            chargeAmount += pumpValue;
            currentChargeAmount.innerText = chargeAmount;
        }
    });

    function decreaseCharge(){
        currentChargeAmount-=bleedOff;
        console.log(currentChargeAmount);
    }
    function bleed(){
        setInterval(decreaseCharge, 1000);
    }




})()