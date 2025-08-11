function calculate(D, eff) {
    if (eff === true) {
        eff = 12;
    } else {
        eff = 0;
    }
    let clcAB = (D / 2) + eff;
    return clcAB;
}

function runCalculation() {
    let demand = parseFloat(document.getElementById("DMD").value) || 0;
    let extraEff = document.querySelector('input[name="extraEff"]:checked');
    let effFlag = extraEff && extraEff.value === "yes";
    let result = calculate(demand, effFlag);
    document.getElementById("calculation-span").innerHTML = result + " MW";
}