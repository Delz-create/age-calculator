// collecting outputs 
const yearOutput = document.querySelector('.years-output');
const monthOutput = document.querySelector('.months-output');
const dayOutput = document.querySelector('.days-output');

// collecting inputs
const day = document.querySelector('#day');
const month = document.querySelector('#month');
const year = document.querySelector('#year');

// submit button
const submit = document.querySelector('.submit');

// error messages
const dayError = document.querySelector('.day-input_error');
const monthError = document.querySelector('.month-input_error');
const yearError = document.querySelector('.year-input_error');

let isValid = false;

// day
day.addEventListener('input', (e) => {
    if(+day.value > 31){
        dayError.textContent = 'Must be a valid date!';
        
        isValid = false;
        return;
    } else {
        isValid = true;
        dayError.textContent = '';

    }

    if(+day.value === 0){
        dayError.textContent = 'This field is required!';
        isValid = false;
        return;
    } else {
        isValid = true;
        dayError.textContent = '';
    }
});

// month
month.addEventListener('input', (e) => {
    if(+month.value > 12){
        monthError.textContent = 'Must be a valid date!';
        isValid = false;
        return;
    } else {
        isValid = true
        monthError.textContent = '';
    }

    if(+month.value === 0){
        monthError.textContent = 'This field is required!';
        isValid = false;
        return;
    } else {
        isValid = true;
        monthError.textContent = '';
    }
});

// year
year.addEventListener('input', (e) => {
    if(+year.value < 1900 || +year.value > 2023){
        yearError.textContent = 'Must be a valid date!';
        isValid = false;
        return;
    } else {
        isValid = true
        yearError.textContent = '';
    }

    if(+year.value === 0){
        yearError.textContent = 'This field is required!';
        isValid = false;
        return;
    } else {
        isValid = true;
        yearError.textContent = '';
    }
});

// submit button
submit.addEventListener('click', (e) => {
    if (isValid){
        let birthDay = `${day.value}/${month.value}/${year.value}`;
        let birthDayObj = new Date(birthDay);
        let ageDiffMill = Date.now() - birthDayObj;
        let ageDate = new Date(ageDiffMill);
        let ageYears = ageDate.getUTCFullYear() - 1970;
        let ageMonths = ageDate.getUTCMonth();
        let ageDays = ageDate.getUTCDay() -1;

        dayOutput.textContent = ageDays;
        monthOutput.textContent = ageMonths;
        yearOutput.textContent = ageYears;
        return;
    } else {
        alert('error');
    }
});