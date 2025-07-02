document.addEventListener('DOMContentLoaded', () => {
  const planningBtn = document.getElementById('planningBtn');
  const researchBtn = document.getElementById('researchBtn');
  const homeBtn = document.getElementById('homeBtn');

  if (planningBtn) {
    planningBtn.addEventListener('click', () => {
      window.location.href = 'planning.html';
    });
  }

  if (researchBtn) {
    researchBtn.addEventListener('click', () => {
      window.location.href = 'investigacion.html';
    });
  }

  if (homeBtn) {
    homeBtn.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }
});