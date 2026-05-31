// DARK MODE CONTROLLER
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light-mode';
    document.body.className = savedTheme;
}

function toggleTheme() {
    if (document.body.classList.contains('light-mode')) {
        document.body.className = 'dark-mode';
        localStorage.setItem('theme', 'dark-mode');
    } else {
        document.body.className = 'light-mode';
        localStorage.setItem('theme', 'light-mode');
    }
}

// SECURE LEAD CAPTURE FORM VALIDATION
function handleFormSubmit(event, formType) {
    event.preventDefault();
    const form = event.target;
    const name = form.querySelector('[name="name"]').value.trim();
    const phone = form.querySelector('[name="phone"]').value.trim();
    const feedbackEl = form.querySelector('.form-feedback');

    if (name.length < 3 || phone.length < 10) {
        feedbackEl.style.color = '#dc3545';
        feedbackEl.textContent = '❌ Please enter a valid name and a 10-digit Indian mobile number.';
        return false;
    }

    feedbackEl.style.color = '#28a745';
    feedbackEl.textContent = '🎉 Thank you! Your request has been secured. Our technical engineer will call you back within 15 minutes.';
    form.reset();
}

document.addEventListener('DOMContentLoaded', initTheme);