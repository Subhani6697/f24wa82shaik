var express = require('express');
var router = express.Router();

/* GET computation result. */
router.get('/', function(req, res, next) {
    // Generate a random value
    let x = Math.random() * 10;

    if (req.query.x) {
        x = parseFloat(req.query.x);
    }
    // Selecting a function based Id last digit.
    const functions = [
        { name: "Math.round", fn: Math.round },
        { name: "Math.fround", fn: Math.fround },
        { name: "Math.random", fn: () => Math.random() * 10 }
    ];
    // Apply the selected function
    const selectedFunction = functions[0];
    const y = selectedFunction.fn(x); 

    // Format the response
    res.send(`${selectedFunction.name} applied to ${x} is ${y}`);
});

module.exports = router;
