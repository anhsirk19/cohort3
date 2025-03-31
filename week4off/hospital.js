const express = require("express");
const app = express();

var users = [{
    naam : "John",
    kidneys : [{
        healthy : false
    }]
}];

app.use(express.json())

app.get("/", (req, res) => {
    const johnKidenys = users[0].kidneys;
    const noOfKideneys = johnKidenys.length;
    
    const healthResult = users[0].kidneys.filter(checkHealth);
    
    noOfHealthyKideneys = healthResult.length;
    
    function checkHealth(kidney) {
    return kidney.healthy;
    }
    
    const noOfUnhealthyKideneys = noOfKideneys - noOfHealthyKideneys;
    
    res.json({
    noOfKideneys,
    noOfHealthyKideneys,
    noOfUnhealthyKideneys,
    });
});

app.post("/", function (req, res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    })
    res.json({
        msg: "done!"
    })
})

app.put("/", function (req, res){
    for(let i = 0 ; i < users[0].kidneys.length ; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

app.delete("/", function (req, res){
    const ans = users[0].kidneys.filter(checkHealth);

    users[0].kidneys = ans;

    function checkHealth(kidney) {
        return kidney.healthy;
    }

    res.json({});

})

app.listen(3000);