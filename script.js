
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            clearErrors();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            let isValid = true;
            if (name === '') {
                showError('nameError', 'Veuillez entrer votre nom');
                isValid = false;
            } else if (name.length < 2) {
                showError('nameError', 'Le nom doit contenir au moins 2 caractères');
                isValid = false;
            }
            if (email === '') {
                showError('emailError', 'Veuillez entrer votre email');
                isValid = false;
            } else if (!isValidEmail(email)) {
                showError('emailError', 'Veuillez entrer un email valide');
                isValid = false;
            }
            if (subject === '') {
                showError('subjectError', 'Veuillez entrer un sujet');
                isValid = false;
            } else if (subject.length < 5) {
                showError('subjectError', 'Le sujet doit contenir au moins 5 caractères');
                isValid = false;
            }
            if (message === '') {
                showError('messageError', 'Veuillez entrer votre message');
                isValid = false;
            } else if (message.length < 10) {
                showError('messageError', 'Le message doit contenir au moins 10 caractères');
                isValid = false;
            }
            
            if (isValid) {
                alert('Merci