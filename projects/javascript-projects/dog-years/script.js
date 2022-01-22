function dogYears() {
    var myAge = document.getElementById('age').value; //my age
    var earlyYears = 2; //early years
    earlyYears *= 10.5;
    var laterYears = myAge - 2;
    laterYears *= 4;
    var myAgeInDogYears = earlyYears + laterYears; //age in dog years
    var myName = document.getElementById('name').value; //name in lower case
    document.getElementById('dog-years').innerHTML = `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`;
}