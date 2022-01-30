const express = require('express');
const app = express();
const port = 5000;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://jiji:jiji1234@jijismongo.bzveh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlparser: true, useUnifiedTopology: true
}).then(()=>console.log('MongoDB Connected...')).catch(err=>console.log(err));



app.get('/', (req, res) => res.send('안녕하세요!!'));

app.listen(port, () => console.log(`Example app listening on port ${port}`));