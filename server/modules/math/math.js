//requires
const express = require('express');
const router = express.Router();

let math = [];

router.get ('/',(req, res )=>{
console.log ('/math GET');
res.send(math);
})

router.post('/', (req, res)=>{
    console.log ('/math POST', req.body)
    
    let num1 = Number(req.body.firstNumber); 
    let num2 = Number(req.body.secondNumber);
    let operator = req.body.mathOperator
    let finalTotal = 0
    
    if (operator == '+'){
    finalTotal = num1 + num2;
    console.log('final total',finalTotal);
}
     else if (operator == '-'){
    finalTotal = num1 - num2; 
    console.log ('final total', finalTotal);
}

    else if (operator == '*'){
    finalTotal = num1 * num2;
    console.log ('final total', finalTotal);   
}

    else if (operator == '/'){
    finalTotal = num1 / num2;
    console.log ('final total', finalTotal);
}

math.push({
    num1: num1,
    num2: num2,
    operator: operator,
    finalTotal: finalTotal
});
    res.sendStatus(200);    
});

module.exports = router;