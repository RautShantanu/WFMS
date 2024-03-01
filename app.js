document.getElementById('btn').addEventListener('click', function() {
    const selectedCourse = document.getElementById('class-options').value;
    const age = document.getElementById('birthdate').value;
    const name = document.getElementById('name').value;
    const mobileNo = document.getElementById('mobileno').value;
    const email = document.getElementById('email').value;

    if (!selectedCourse || !age || !name || !mobileNo || !email) {
        alert('Please fill all the fields');
        return;
    }

    let fees;
    switch (selectedCourse) {
        case 'नगर परिषद भरती':
            fees = 100;
            break;
        case 'राज्यसेवा':
            fees = 200;
            break;
        case 'PSI/STI/ASO':
            fees = 300;
            break;
        case 'M.I.D.C भरती':
            fees = 400;
            break;
        case 'करसहाय्यक':
            fees = 500;
            break;
        case 'लिपिक':
            fees = 600;
            break;
        case 'तलाठी':
            fees = 700;
            break;
        case 'पुलिस भरती ':
            fees = 800;
            break;
        case 'जलसंपदा भरती':
            fees = 900;
            break;
        case 'रेल्वे भरती':
            fees = 1000;
            break;
        case 'ग्रामसेवक':
            fees = 1100;
            break;
        case 'GD कॉन्स्टेबल':
            fees = 1200;
            break;
        case 'वन विभाग भरती':
            fees = 1300;
            break;
        case 'वित्त विभाग भरती':
            fees = 1400;
            break;
        default:
            alert('Please select a valid course');
            return;
    }

    if (age < 18) {
        alert('You are not eligible to appear for this course');
        return;
    }
    
    alert(`Congratulations ${name}! You have successfully registered for the ${selectedCourse} course. The fees for this course is ${fees}`);

    document.getElementById('btn').style.backgroundColor = 'green';

    document.getElementById('btn').style.backgroundColor = 'blue';

    // Show an alert message saying that the form has been submitted successfully
    alert('Form submitted successfully');

    document.getElementById('register').reset();

    // Prevent the page from refreshing
    return false;
});