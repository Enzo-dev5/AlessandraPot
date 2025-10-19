const overlay = document.getElementById('overlay');
  const btn = document.getElementById('openModal');

  // Abrir ventana
  btn.addEventListener('click', () => {
    overlay.style.display = 'flex';
    setTimeout(() => overlay.classList.add('show'), 10);
  });

  // Cerrar al hacer clic fuera
  overlay.addEventListener('click', e => {
    if (e.target === overlay) {
      overlay.classList.remove('show');
      setTimeout(() => overlay.style.display = 'none', 400);
    }
  });

  // Cerrar con ESC
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      overlay.classList.remove('show');
      setTimeout(() => overlay.style.display = 'none', 400);
    }
  });