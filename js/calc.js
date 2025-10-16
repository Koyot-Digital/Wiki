// Paycheck Calculator
function paycheckCalc(hours, MW, bonus, EFF) {
    // Better variable name for clarity
    let amount = ((((MW * EFF) * 0.2) * bonus) * ((hours * 14.00) / 24))/2;
    return Math.round(amount);
}

function runCalculationPaycheck() {
    let hours = parseFloat(document.getElementById("hoursInput").value) || 0;
    let MW = parseFloat(document.getElementById("mwInput").value) || 0;
    let bonus = parseFloat(document.getElementById("bonusSelect").value)|| 0;
    let EFF = (document.getElementById("effSlider").value / 100) || 0;

    let result = Math.min(paycheckCalc(hours, MW, bonus, EFF), 9999999);
    document.getElementById("calculation-span-pay").textContent = result + " Points";
}
// ok most of this autocompleted but it works so who cares :3





// P  = Reactor Power
// O  = Plant Output
// C  = Plant Usage

function efficiencyCalculate(P, O, U) {
    const P_w = (2 * P) / 3;
    const O_w = (107 * O) / 100;

    // Calculate P_L as a clamped value between 0 and 1
    let P_L = (P_w - 1600) / 500;
    P_L = Math.max(0, Math.min(1, P_L));

    const term1 = 65 * (O_w / (P_w - 1600));
    const term2 = 35 * ((77 * ((O_w / 4570) + 0.65)) / U);

    const eff = P_L * (term1 + term2);

    return eff;
}
function runCalculationEfficiency() {
    let P = parseFloat(document.getElementById("reactorPower").value) || 3000; // tMW
    let O = parseFloat(document.getElementById("plantOutput").value) || 950; // MW
    let U = parseFloat(document.getElementById("plantUsage").value) || 50; // MW
    let eff = efficiencyCalculate(P, O, U);
    document.getElementById("calculation-span-EFF").innerHTML = eff.toFixed(2) + " %";
}

// Turbine Calculator
function turbineCalc(D, eff) {
    if (eff === true) {
        eff = 12;
    } else {
        eff = 0;
    }
    let clcAB = (D / 2) + eff;
    return clcAB;
}

function runCalculationTurbine() {
    let demand = parseFloat(document.getElementById("demandSlider").value) || 0;
    let result1 = Math.min(turbineCalc(demand, false), 750);
    let result2 = Math.min(turbineCalc(demand, true), 750);
    document.getElementById("calculation-span").textContent = result1 + " MW";
    document.getElementById("calculation-span2").textContent = result2 + " MW";
}

document.querySelectorAll('input[name="extraEff"]').forEach((elem) => {
    elem.addEventListener("change", function (event) {
        var item = event.target.value;
        console.log(item);
    });
});