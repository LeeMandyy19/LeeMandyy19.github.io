let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

const nameInput = document.getElementById("name");
const amountInput = document.getElementById("amount");
const categorySelect = document.getElementById("category");
const list = document.getElementById("list");
const total = document.getElementById("total");
const totalText = document.getElementById("totalText");
const filter = document.getElementById("filter");

function addExpense() {
  const name = nameInput.value;
  const amount = Number(amountInput.value);
  const category = categorySelect.value;
  if (!name || !amount) return;

  expenses.push({ name, amount, category });
  localStorage.setItem("expenses", JSON.stringify(expenses));
  render();

  nameInput.value = '';
  amountInput.value = '';
}

function deleteExpense(index) {
  expenses.splice(index, 1);
  localStorage.setItem("expenses", JSON.stringify(expenses));
  render();
}

function render() {
  list.innerHTML = "";
  let sum = 0;
  const selected = filter.value;

  expenses
    .filter(e => selected === "All" || e.category === selected)
    .forEach((e, i) => {
      sum += e.amount;
      const li = document.createElement("li");
      li.innerHTML = `${e.name} (${e.category}) - R${e.amount} <button onclick="deleteExpense(${i})">❌</button>`;
      list.appendChild(li);
    });

  total.textContent = sum;
  totalText.style.color = sum > 2000 ? "#dc2626" : "#16a34a"; // red or green
}

render();
