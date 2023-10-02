var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');
var form = document.getElementById('xPercentOfY');

form.addEventListener('submit', function(event) {
    if(!numField1.value || !numField2.value){
        alert("Please enter values in both boxed before calculating");
    }else{
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);
        var percent = (x /y)*100;

        resultField.innerText = "Answer: " + percent + "%";
        event.preventDefault();
    }
});






//numField1.value = "Hey!";
// numField2.value = "test";
// resultField.innerText = "test2";