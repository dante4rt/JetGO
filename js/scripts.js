var selectedRow = null;

function onFormSubmit() {
  const alertUpdateEl = document.getElementById("employeeList");
  alertUpdateEl.hidden = false;
  const alertUpdateEl2 = document.getElementById("my-text-hidden");
  alertUpdateEl2.hidden = false;
  var formData = readFormData();
  if (selectedRow == null) insertNewRecord(formData);
  else updateRecord(formData);
  resetForm();
}

function readFormData() {
  var formData = {};
  formData["formLayanan"] = document.getElementById("formLayanan").value;
  formData["formHari"] = document.getElementById("formHari").value;
  formData["formSesi"] = document.getElementById("formSesi").value;
  formData["formNama"] = document.getElementById("formNama").value;
  formData["formNomor"] = document.getElementById("formNomor").value;
  return formData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("employeeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.formLayanan;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.formHari;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.formSesi;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.formNama;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.formNomor;
  cell5 = newRow.insertCell(5);
  cell5.innerHTML = `<td>
  <button type="button" class="btn btn-outline-danger" onClick="onDelete(this)">
    Delete
  </button>
  <button
    type="button"
    class="btn btn-outline-success"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal" onClick="onEdit(this)"
  >
    Update
  </button>
</td>`;
}

function resetForm() {
  document.getElementById("formLayanan").value = "";
  document.getElementById("formHari").value = "";
  document.getElementById("formSesi").value = "";
  document.getElementById("formNama").value = "";
  document.getElementById("formNomor").value = "";
  selectedRow = null;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("formLayanan").value = selectedRow.cells[0].innerHTML;
  document.getElementById("formHari").value = selectedRow.cells[1].innerHTML;
  document.getElementById("formSesi").value = selectedRow.cells[2].innerHTML;
  document.getElementById("formNama").value = selectedRow.cells[3].innerHTML;
  document.getElementById("formNomor").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.formLayanan;
  selectedRow.cells[1].innerHTML = formData.formHari;
  selectedRow.cells[2].innerHTML = formData.formSesi;
  selectedRow.cells[3].innerHTML = formData.formNama;
  selectedRow.cells[4].innerHTML = formData.formNomor;
}

function onDelete(td) {
  if (confirm("Are you sure to delete this record ?")) {
    const alertUpdateEl = document.getElementById("employeeList");
    alertUpdateEl.hidden = true;
    row = td.parentElement.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    resetForm();
  }
}
