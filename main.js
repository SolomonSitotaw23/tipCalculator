document.addEventListener("DOMContentLoaded", () => {
  const totalperperson = document.getElementById("totalpperson"),
    tipamount = document.getElementById("tipamount");

  //   buttons
  let b5 = document.getElementById("b5"),
    b10 = document.getElementById("b10"),
    b15 = document.getElementById("b15"),
    b25 = document.getElementById("b25"),
    b50 = document.getElementById("b50"),
    custom = document.getElementById("custom"),
    reset = document.getElementById("reset");

  // reset.disabled = true;

  let bill = document.getElementById("bill"),
    totalPersons = document.getElementById("totalPersons");

  b5.addEventListener("click", () => {
    let tip = tipCalculator(0.05);
  });
  b10.addEventListener("click", () => {
    let tip = tipCalculator(0.1);
  });
  b15.addEventListener("click", () => {
    let tip = tipCalculator(0.15);
  });
  b25.addEventListener("click", () => {
    let tip = tipCalculator(0.25);
  });
  b50.addEventListener("click", () => {
    let tip = tipCalculator(0.5);
  });
  custom.addEventListener("click", () => {
    let tip = tipCalculator(0.05);
  });

  reset.addEventListener("click", () => {
    (totalperperson.innerText = "$0.00"),
      (tipamount.innerText = "$0.00"),
      (bill.value = ""),
      (totalPersons.value = "");
  });
  tipCalculator = (percent) => {
    let billamm = bill.value,
      persons = totalPersons.value,
      tip = billamm * percent;

    ftip = tip.toFixed(2);

    tipamount.innerText = `$${ftip.toString()}`;

    if (ftip > 0) {
      billamm = parseFloat(billamm);
      let numperson = parseFloat(totalPersons.value);
      if (totalPersons.value === "") {
        numperson = 1;
      }
      let total = (tip + billamm) / numperson;
      total = total.toFixed(2);
      ftotal = totalperperson.innerText = `$${total.toString()}`;
    }

    if ((billamm = !"")) {
      reset.disabled = false;
    } else {
      reset.disabled = true;
      reset.style.backgroundColor = "white";
    }

    //
  };
});
