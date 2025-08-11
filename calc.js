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
    let demand = parseFloat(document.getElementById("demandSlider").value) || 0;
    let extraEff = document.querySelector('input[name="extraEff"]:checked');
    let effFlag = extraEff && extraEff.value === "yes";
    let result = calculate(demand, effFlag);
    if (result > 750) {
        result = 750;

    }
    document.getElementById("calculation-span").textContent = result + " MW";
}
