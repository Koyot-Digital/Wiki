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
    let result1 = Math.min(calculate(demand, false), 750);
    let result2 = Math.min(calculate(demand, true), 750);
    document.getElementById("calculation-span").textContent = result1 + " MW";
    document.getElementById("calculation-span2").textContent = result2 + " MW";
}

document.querySelectorAll('input[name="extraEff"]').forEach((elem) => {
    elem.addEventListener("change", function (event) {
        var item = event.target.value;
        console.log(item);
    });
});