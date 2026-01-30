const password = document.getElementById("password");
const strength = document.getElementById("strength");
const len = document.getElementById("len");
const upper = document.getElementById("upper");
const num = document.getElementById("num");
const special = document.getElementById("special");
const copyBtn = document.getElementById("copyBtn");

password.addEventListener("input", () => {
  const v = password.value;
  let score = 0;

  len.textContent = v.length >= 6 ? "✅ At least 6 characters" : "❌ At least 6 characters";
  upper.textContent = /[A-Z]/.test(v) ? "✅ One uppercase letter" : "❌ One uppercase letter";
  num.textContent = /[0-9]/.test(v) ? "✅ One number" : "❌ One number";
  special.textContent = /[^A-Za-z0-9]/.test(v) ? "✅ One special character" : "❌ One special character";

  if(v.length >= 6) score++;
  if(/[A-Z]/.test(v)) score++;
  if(/[0-9]/.test(v)) score++;
  if(/[^A-Za-z0-9]/.test(v)) score++;

  strength.style.width = `${score * 25}%`;
  strength.style.background = score === 4 ? "#16a34a" : score === 3 ? "#f59e0b" : "#dc2626";
});

copyBtn.addEventListener("click", () => {
  if(password.value.length === 0) return alert("Password field is empty!");
  password.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
});
