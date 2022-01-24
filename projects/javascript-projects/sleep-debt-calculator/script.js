const negativeError = (value, day) => {
    if (value > 0 && value < 25) {
        document.getElementById(day + "-error").className = "";
        document.getElementById(day + "-error").innerHTML = "";
    } else {
        document.getElementById(day + "-error").className = "alert alert-danger my-2";
        document.getElementById(day + "-error").innerHTML = "Please enter a value between 0 and 24 hours";
    }
}

const getSleepHours = day => {
    day = day.toLowerCase();
    switch (day) {
        case 'monday':
            return parseInt(document.getElementById('monday').value);
            break;
        case 'tuesday':
            return parseInt(document.getElementById('tuesday').value);
            break;
        case 'wednesday':
            return parseInt(document.getElementById('wednesday').value);
            break;
        case 'thursday':
            return parseInt(document.getElementById('thursday').value);
            break;
        case 'friday':
            return parseInt(document.getElementById('friday').value);
            break;
        case 'saturday':
            return parseInt(document.getElementById('saturday').value);
            break;
        case 'sunday':
            return parseInt(document.getElementById('sunday').value);
            break;
    }
}

const getActualSleepHours = () =>
    getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');

const getIdealSleepHours = () => {
    var idealHours = document.getElementById('ideal').value;
    return idealHours * 7;
}

const calculateSleepDebt = () => {
    var actualSleepHours = getActualSleepHours();
    var idealSleepHours = getIdealSleepHours();
    console.log(actualSleepHours);
    console.log(idealSleepHours);
    if (actualSleepHours < 0 || idealSleepHours < 0) {
        result.className = 'alert alert-danger my-2';
        result.innerHTML = "Please enter positive values";
    } else {
        if (actualSleepHours === idealSleepHours) {
            result.className = 'alert alert-success my-2';
            result.innerHTML = "You've got perfect amount of sleep.";

        } else if (actualSleepHours > idealSleepHours) {
            result.className = 'alert alert-success my-2';
            result.innerHTML = "You've got " + (actualSleepHours - idealSleepHours) + " hour(s) more sleep than needed.";
        } else {
            result.className = 'alert alert-danger my-2';
            result.innerHTML = "You've got " + (idealSleepHours - actualSleepHours) + " hour(s) less sleep than you needed this week. Get some rest.";
        }
    }
}