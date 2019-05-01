let distanceDriven = document.querySelector('input[name="number1"]');    // henter input fra index og definerer alle variabler
let fuelUsed = document.querySelector('input[name="number2"]');
let priceFuel = document.querySelector('input[name="number3"]');
let resultTotal = document.querySelector('output[name="textOutput"]');
let totalDistance = 0;                                              
let averageUse = 0;
let totalFuelUsed = 0;
let priceKilometer = 0;                                                  // trenges strengt tatt ikke settes til 0 men god skikk i følge broder'n

  document.getElementById('fuelcalc').addEventListener('click', e =>
    {
      let distance = parseInt(distanceDriven.value);                       // definerer flere variabler som heltall
      let fuel = parseInt(fuelUsed.value);
      let price = parseInt(priceFuel.value);
      let distanceFuel = (distance / fuel);                     
      let priceKilometer = (price / distanceFuel);
        document.getElementById('textAreaOutput').value += "Bilen har kjørt " + distanceFuel.toFixed(2) + " kilometer på en liter drivstoff med en pris på " + priceKilometer.toFixed(2) + " kr/km." + '\n';                  // skriver til tekstfelt \n starter ny linje i tekstfelt
      
      totalDistance += distance;                                         // definerer variabler for totalsummene
      totalFuelUsed += fuel;
      averageUse = (totalFuelUsed / (totalDistance / 10));
        resultTotal.innerHTML = "Total kjørelengde er " + totalDistance + " kilometer, med et gjennomsnittsforbruk på " + averageUse.toFixed(2) + " 1iter/mil ";                                                             // skriver sum avstand og forbruk til side og runder av på 2 desimaler
    });                                                                    


