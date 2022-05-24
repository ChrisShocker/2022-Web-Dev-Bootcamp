const express = require('express');
const app = express();
const port = 5000;

app.get("/api", (req, res) =>{
    res.json({"users": ["userOne", "userTwo"]});
})

app.listen(port, () => {console.log("server started on port: " +port)} );