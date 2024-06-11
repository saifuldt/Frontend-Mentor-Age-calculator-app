const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

const submitBtn = document.getElementById('submitBtn');

const resultYears = document.getElementById('resultYears');
const resultMonths = document.getElementById('resultMonths');
const resultDays = document.getElementById('resultDays');

const errorMsg = document.getElementById('errorMsg');


submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    let birthYear = parseInt(year.value);
    let birthMonth = parseInt(month.value);
    let birthDay = parseInt(day.value);

    let ageYears = currentYear - birthYear;
    let ageMonths = currentMonth - birthMonth;
    let ageDays = currentDay - birthDay;


    // Validate inputs
    if (!year.value || !month.value || !day.value) {
        errorMsg.classList.remove('hide');
        errorMsg.innerText = 'All fields are required.';
        resultYears.innerText = '--';
        resultMonths.innerText = '--';
        resultDays.innerText = '--';
        return;
    } else if (month.value > 12 || day.value > 31) {
        errorMsg.classList.remove('hide');
        errorMsg.innerText = 'Invalid date entered.';
        resultYears.innerText = '--';
        resultMonths.innerText = '--';
        resultDays.innerText = '--';
        return;
    } else if (month.value < 0 || day.value < 0 || year.value < 0) {
        errorMsg.classList.remove('hide');
        errorMsg.innerText = 'Invalid date entered.';
        resultYears.innerText = '--';
        resultMonths.innerText = '--';
        resultDays.innerText = '--';
        return;
    } else if (new Date(birthYear, birthMonth - 1, birthDay) > currentDate) {
        errorMsg.classList.remove('hide');
        errorMsg.innerText = 'Date of birth cannot be in the future.';
        resultYears.innerText = '--';
        resultMonths.innerText = '--';
        resultDays.innerText = '--';
        return;
    } else {
        errorMsg.classList.add('hide');
    }


    // Adjust if the current month is before the birth month
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    // Adjust if the current day is before the birth day
    if (ageDays < 0) {
        ageMonths--;
        let previousMonth = currentMonth - 1;
        if (previousMonth < 1) {
            previousMonth = 12;
        }
        const daysInPreviousMonth = new Date(currentYear, previousMonth, 0).getDate();
        ageDays += daysInPreviousMonth;
    }



    resultYears.innerText = ageYears;
    resultMonths.innerText = ageMonths;
    resultDays.innerText = ageDays;
});


