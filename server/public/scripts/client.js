$(document).ready(onReady);

let mathOperator =  ''

function onReady() {
    console.log("Jquery working");
    $('#addTotalButton').on('click',addTotal);
    $('#addPlusButton').on('click', chooseAddition);
    $('#addMinusButton').on('click', chooseSubtraction);
    $ ('#addMultiplyButton').on ('click', chooseMultiply);
    $ ('#addDivideButton').on('click', chooseDivide );
    $ ('#addClearButton').on('click', chooseClear);
    getMath();
  }

function getMath (){
$.ajax ({
    method: 'GET', 
    url: '/math' 
}).then (function (response){
    console.log (response);
     // dispay each on DOM target and empty el 
    const el = $('#totalOut');
    el.empty ();
     // loop through response from math 
    for (let i=0; i<response.length; i++){
    // append each math item to the output el 
    el.append (`<li>${response[i].num1} ${response[i].operator} ${response[i].num2} = ${response[i].finalTotal}</li>`);
    }// end for
}).catch(function (err){
        console.log(err);
        alert ("error getting math");
    })// end AJAX
} // end getMath

 
function addTotal(){
    console.log ('in total button')
    // in add to get Total get user input & place in an object
    let newTotal = {
     firstNumber: $('#firstNumberIn').val(),
     secondNumber: $('#secondNumberIn').val(), 
     mathOperator: mathOperator
    }
    mathOperator = '';
    console.log ('totaling numbers', newTotal);    
    // make a POST request to Create a new total with this info. 
    $.ajax({
        method: 'POST',// POST is for Create 
        url: '/math',
        data: newTotal
    }).then (function (response){
        console.log ('back from POST',response);
        getMath();
    }).catch (function (err){
        console.log (err);
        alert ('error adding total');
    })
    // after POST is made run getMath to update the DOM 
    getMath();
    }

function chooseAddition(){
    mathOperator = '+';
    console.log('hello');
}

function chooseSubtraction(){
  mathOperator = '-';
     console.log('sub hello');
 }

 function chooseMultiply(){
 mathOperator = '*'; 
 console.log ('multi hello');
 }

 function chooseDivide(){
mathOperator = '/';
console.log ('dividing hello');

 }
 function chooseClear(){
    $('#firstNumberIn').val('');
    $('#secondNumberIn').val('');
    console.log ('clearing');
 }