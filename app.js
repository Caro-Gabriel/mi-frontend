// Cuando hagas deploy, reemplazá esta URL por la de Render
const API = 'http://localhost:3001';

async function cargarTareas() {
  const res = await fetch(`${API}/tasks`);
  const tasks = await res.json();
  const lista = document.getElementById('lista');
  lista.innerHTML = tasks.map(t => `<li>${t.text}</li>`).join('');
}

document.getElementById('btn').addEventListener('click', async () => {
  const input = document.getElementById('input');
  if (!input.value.trim()) return;
  await fetch(`${API}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: input.value })
  });
  input.value = '';
  cargarTareas();
});

cargarTareas();
