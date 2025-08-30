// Smooth-scroll “View My Work”
document.getElementById('view-work-btn')?.addEventListener('click', (e) => {
  // If it's an anchor link, browser will also scroll; prevent default to control it.
  e.preventDefault();
  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Dynamic year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Fake "Send" action (no backend). Shows a success message and clears only the message box.
const statusEl = document.getElementById('status');
document.getElementById('send-btn')?.addEventListener('click', () => {
  const name = (document.getElementById('name') || {}).value?.trim();
  const email = (document.getElementById('email') || {}).value?.trim();
  const phone = (document.getElementById('phone') || {}).value?.trim();
  const msg = (document.getElementById('message') || {}).value?.trim();

  // simple validation
  if (!name || !email || !phone) {
    statusEl.textContent = 'Please make sure your name, email, and phone are filled.';
    statusEl.style.color = '#fca5a5';
    return;
  }
  statusEl.textContent = 'Thanks! Your message is noted (demo).';
  statusEl.style.color = '#6ee7b7';
  // Clear only the message box to keep your prefilled details
  const msgBox = document.getElementById('message');
  if (msgBox) msgBox.value = '';
});