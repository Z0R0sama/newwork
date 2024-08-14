document.addEventListener('DOMContentLoaded', function() {
    const daysContainer = document.querySelector('.days');
    const daysInMonth = 31; // Example for August

    // Populate days
    for (let i = 1; i <= daysInMonth; i++) {
        const day = document.createElement('span');
        day.textContent = i;
        daysContainer.appendChild(day);
    }
});
