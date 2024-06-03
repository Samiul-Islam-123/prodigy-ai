const express = require('express');
const app = express();
const cors = require('cors')

const PORT = process.env.PORT || 5500;
app.use(cors())

app.get('/', (req,res) =>{
    res.status(200).send("Hellow world")
})

app.listen(PORT, () => {
    console.log("Server is running on PORT : "+PORT)
})