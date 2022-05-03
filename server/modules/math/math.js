//requires
const express = require('express');
const router = express.Router();


let math = [{  
   firstNumber: '', 
   secondNumber: '',
   total: ''
   
 }];
let a = math.firstNumber;
let b = math.secondNumber;





router.get ('/',(req, res )=>{
console.log ('/math GET');
res.send(math);
})


router.post('/', (req, res)=>{
    console.log ('/math POST', req.body)
    math.push(req.body);
    res.sendStatus(200);    
})



module.exports = router;