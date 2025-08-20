function handleDragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.id);
}

function handleDragOver(e) {
  e.preventDefault();
}

function handleDrop(e) {
  e.preventDefault();
  const id = e.dataTransfer.getData('text/plain');
  const employee = document.getElementById(id);
  const column = e.target.closest('.column');
  if (column && employee) {
    column.appendChild(employee);
  }
}

document.querySelectorAll('.employee').forEach(emp => {
  emp.addEventListener('dragstart', handleDragStart);
});

document.querySelectorAll('.column').forEach(col => {
  col.addEventListener('dragover', handleDragOver);
  col.addEventListener('drop', handleDrop);
});

