let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

const company = document.getElementById("company");
const status = document.getElementById("status");
const date = document.getElementById("date");
const notes = document.getElementById("notes");
const jobsEl = document.getElementById("jobs");
const filter = document.getElementById("filter");

function addJob() {
  if (!company.value || !date.value) return;

  jobs.push({
    company: company.value,
    status: status.value,
    date: date.value,
    notes: notes.value
  });

  localStorage.setItem("jobs", JSON.stringify(jobs));
  render();

  company.value = '';
  status.value = 'Applied';
  date.value = '';
  notes.value = '';
}

function render() {
  jobsEl.innerHTML = "";
  const selected = filter.value;

  jobs
    .filter(j => selected === "All" || j.status === selected)
    .sort((a,b) => new Date(b.date) - new Date(a.date))
    .forEach(j => {
      const li = document.createElement("li");
      li.textContent = `${j.company} | ${j.status} | ${j.date}${j.notes ? " | " + j.notes : ""}`;
      jobsEl.appendChild(li);
    });
}

render();
