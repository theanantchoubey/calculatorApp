// Code for Numbers
function play(numValue) {    
    document.getElementById('output').value += numValue;
    return numValue
};

// Code to get solution
function solve(){
    let x = document.getElementById('output').value;
    let y = eval(x);
    document.getElementById('output').value = y
    return y;
}

// Code to clear the Output
function clearOutput(){
    document.getElementById('output').value = '';
}


//Code to remove last character
function removeMe(){
    const text = document.getElementById('output').value;
    const editedText = text.slice(0, -1);
    document.getElementById('output').value = editedText;
}

