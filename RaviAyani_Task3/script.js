function convert() {
    var temp = document.getElementById('temp').value;
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    
    if (temp === '') {
        document.getElementById('output').innerHTML = 'Result: Enter number';
        return;
    }
    
    temp = parseFloat(temp);
    var celsius;
    
    if (from === 'c') {
        celsius = temp;
    }
    if (from === 'f') {
        celsius = (temp - 32) * 5/9;
    }
    if (from === 'k') {
        celsius = temp - 273.15;
    }
    
    var result;
    if (to === 'c') {
        result = celsius.toFixed(2) + ' °C';
    }
    if (to === 'f') {
        result = (celsius * 9/5 + 32).toFixed(2) + ' °F';
    }
    if (to === 'k') {
        result = (celsius + 273.15).toFixed(2) + ' K';
    }
    
    document.getElementById('output').innerHTML = 'Result: ' + result;
}