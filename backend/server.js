const express = require('express');
const dotenv = require('dotenv')
const app = express();

dotenv.config();

app.get('/', (req, res) => {
    res.send("API is runnning!");
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`server started on port ${PORT}`));