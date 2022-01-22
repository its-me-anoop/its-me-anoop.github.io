function celToFah() {
    //get value of celcius from the HTML input element
    var celsius = document.getElementById("celsius").value;

    //formula to convert celcius to fahrenheit
    var fahrenheit = (celsius * (9 / 5)) + 32;

    //display he result in a paragraph element
    document.getElementById("fahrenheit").innerHTML = `<strong>${celsius}</strong> degree Celsius is <strong>${fahrenheit}</strong> degree Fahrenheit`;
}