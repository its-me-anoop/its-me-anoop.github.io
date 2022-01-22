function runnerRegistration() {
    let raceNumber = Math.floor(Math.random() * 1000);
    var name = document.getElementById('name').value;
    var batch = document.getElementById('early').value;
    var registeredEarly = (batch === 'true') ? true : false;
    var runnerAge = document.getElementById('age').value;
    if (runnerAge > 18) {
        raceNumber += 1000;
    }
    if (runnerAge > 18) {
        document.getElementById('result').innerHTML = registeredEarly ? `Hi ${name}. Your race number: ${raceNumber}. Race Time: 9:30 am` : `Your race number: ${raceNumber}. Race Time: 11:00 am`;

    } else if (runnerAge < 18) {
        document.getElementById('result').innerHTML = `Hi ${name}. Your race number: ${raceNumber}. Race Time: 12:30 pm`;
    } else {
        document.getElementById('result').innerHTML = `Hi ${name}. Your race number: ${raceNumber}. See the registration desk`;
    }
}