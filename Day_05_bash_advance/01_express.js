// express is one way to create HTTP servers

// express is a library or framework
const express = require("express")

function calculateSum(n){
    let ans =0;
    for(let i = 1; i<=n; i++ ){
        ans = ans + i;
    }
    return ans;
}

// whenever you are using express, create an instance of an app
//think of it like a room of a doctor
const app = express()

//think of it like one functionality of a doctor ( doc have many functionalities)
app.get("/", function (req, res) {
    const n = req.query.n;
    const ans = calculateSum(n)
    res.send(ans);
})

// address of doctor and always unique for every doc
app.listen(3000);
