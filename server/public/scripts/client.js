$(document).ready(onReady);

function onReady() {
    console.log("Jquery working");
    $('#addTotalButton').on('click',addTotal);
    getMath();
  }

function getMath (){
  // get math from the server
// use AJAX
$.ajax ({
    method: 'GET', // read verb GET me all the pets 
    url: '/math' 
}).then (function (response){
 // loop through response from math 
    console.log (response);
     // dispay each on DOM 
    // target and empty el 
    const el = $('#totalOut');
    el.empty ();
    for (let i=0; i<response.length; i++){
    // append each math item to the output el 
    el.append (`<li>${response[i].firstNumber} + ${response[i].secondNumber} = ${response[i].total}</li>`);
    }// end for
}).catch(function (err){
        console.log(err);
        alert ("error getting math");
    })// end AJAX
} // end getMath

 
function addTotal(){
    console.log ('in total button')
// in add to get Total
// get user input & place in an object
    let newTotal = {
     firstNumber: $('#firstNumberIn').val(),
     secondNumber: $('#secondNumberIn').val(), 
     total: ''
    //
    }
    $('#firstNumberIn').val(''),
    $('#secondNumberIn').val('')
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

