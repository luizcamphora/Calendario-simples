const calendar = document.getElementById('calendar');
const result = document.getElementById('result');
const prevMonthButton = document.getElementById('prevMonth');
const nextMonthButton = document.getElementById('nextMonth');
const currentMonthYear = document.getElementById('currentMonthYear');

let currentDate = new Date();

function updateCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    calendar.innerHTML = '';
    const monthYearString = currentDate.toLocaleString('pt-BR', { year: 'numeric', month: 'long' });
    currentMonthYear.textContent = monthYearString;

    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyDay = document.createElement('div');
        calendar.appendChild(emptyDay);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        const dayElement = document.createElement('div');
        dayElement.textContent = day;
        dayElement.classList.add('day');

        dayElement.addEventListener('click', () => {
            // Quando um dia é clicado, exibe a data na div 'result' em português
            const selectedDate = date.toLocaleString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
            result.textContent = selectedDate;
        });

        calendar.appendChild(dayElement);
    }
}

prevMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar();
});

nextMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar();
});

updateCalendar();