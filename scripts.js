document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let valid = true;

    // Name validation
    const name = document.getElementById('name').value;
    const nameError = document.getElementById('nameError');
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        nameError.textContent = 'Please enter a valid name.';
        nameError.style.display = 'block';
        valid = false;
    } else {
        nameError.style.display = 'none';
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        emailError.textContent = 'Please enter a valid email.';
        emailError.style.display = 'block';
        valid = false;
    } else {
        emailError.style.display = 'none';
    }

    // Phone validation
    const phone = document.getElementById('phone').value;
    const phoneError = document.getElementById('phoneError');
    if (!/^\(\d{3}\) \d{3}-\d{4}$/.test(phone)) {
        phoneError.textContent = 'Please enter a valid phone number in the format (123) 456-7890.';
        phoneError.style.display = 'block';
        valid = false;
    } else {
        phoneError.style.display = 'none';
    }

    // Date validation
    const eventDate = document.getElementById('eventDate').value;
    const dateError = document.getElementById('dateError');
    const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;

    if (!datePattern.test(eventDate)) {
        dateError.textContent = 'Please enter a valid date in the format MM/DD/YYYY.';
        dateError.style.display = 'block';
        valid = false;
    } else {
        const [month, day, year] = eventDate.split('/').map(Number);

        if (month < 1 || month > 12) {
            dateError.textContent = 'Month must be between 1 and 12.';
            dateError.style.display = 'block';
            valid = false;
        } else if (day < 1 || day > 31) {
            dateError.textContent = 'Day must be between 1 and 31.';
            dateError.style.display = 'block';
            valid = false;
        } else {
            dateError.style.display = 'none';
        }
    }

    // Tickets validation
    const tickets = document.getElementById('tickets').value;
    const ticketsError = document.getElementById('ticketsError');
    if (tickets < 1 || tickets > 10) {
        ticketsError.textContent = 'Please enter a number of tickets between 1 and 10.';
        ticketsError.style.display = 'block';
        valid = false;
    } else {
        ticketsError.style.display = 'none';
    }

    if (valid) {
        document.getElementById('registrationForm').reset();
        showModal();
    }
});

function showModal() {
    const modal = document.getElementById('successModal');
    const closeBtn = document.getElementsByClassName('close')[0];

    modal.style.display = 'flex';

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
}