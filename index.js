const express = require('express');
const app = express();
const urlRouter = require('./routes/router')
PORT = 9100

app.use(express.urlencoded({ extended: true })) // parse application/x-www-form-urlencoded
app.use('/url',urlRouter)


app.listen(PORT,() =>{
    console.log(`Server is running at http://localhost:${PORT}`);
});