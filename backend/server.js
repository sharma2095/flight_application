const express = require('express');
const app = express();
const db = require("./models");
const port = process.env.PORT || 3200;
const cors =require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
const apiRoute = require('./routes/api');
app.use("/api",apiRoute);

db.sequelize.sync().then(()=>{
    app.listen(port,()=>{
        console.log(`Listening on http://localhost:${port}`);
    })
})
.catch(err=>console.log("error in connecting to databace ",err))