let checkboxes = document.querySelectorAll("input[type=checkbox]");
let total = document.getElementById("total");

checkboxes.forEach(box => {
  box.addEventListener("change", () => {
    let sum = 0;
    checkboxes.forEach(c => {
      if(c.checked) sum += parseInt(c.value);
    });
    total.innerText = sum;
  });
});