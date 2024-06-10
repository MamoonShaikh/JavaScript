const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    const results = document.querySelector('#results');

    if (isNaN(height) || height <= 0) {
        result.innerHTML = `Please give a valid height.`;
        results.innerHTML = '';  // Clear the results message
    } else if (isNaN(weight) || weight <= 0) {
        result.innerHTML = `Please give a valid weight.`;
        results.innerHTML = '';  // Clear the results message
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`;

        if (bmi < 18.6) {
            results.innerHTML = `<span>Underweight</span>`;
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            results.innerHTML = `<span>Normal range</span>`;
        } else {
            results.innerHTML = `<span>Overweight</span>`;
        }
    }
});
