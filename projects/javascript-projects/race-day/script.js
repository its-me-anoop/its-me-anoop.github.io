function runnerRegistration() {
    let raceNumber = Math.floor(Math.random() * 1000);
    var name = document.getElementById('name').value;
    var batch = document.getElementById('early').value;
    var registeredEarly = (batch === 'true') ? true : false;
    var runnerAge = document.getElementById('age').value;
    var result = document.getElementById('result');
    if (name && runnerAge) {
        if (runnerAge > 18) {
            raceNumber += 1000;
        }
        if (runnerAge > 18) {
            result.className = 'alert alert-success my-2';
            result.innerHTML = registeredEarly ? `Hi ${name}. Your race number: ${raceNumber}. Race Time: 9:30 am` : `Your race number: ${raceNumber}. Race Time: 11:00 am`;

        } else if (runnerAge < 18) {
            result.className = 'alert alert-success my-2';
            result.innerHTML = `Hi ${name}. Your race number: ${raceNumber}. Race Time: 12:30 pm`;
        } else {
            result.className = 'alert alert-success my-2';
            result.innerHTML = `Hi ${name}. Your race number: ${raceNumber}. See the registration desk`;
        }
    } else {
        result.className = 'alert alert-danger my-2';
        result.innerHTML = "Please enter your name and age";
    }
}