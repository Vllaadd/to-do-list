const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://vladzizic:ukvC6AHw4dmyrCml@cluster0.mdqkrcm.mongodb.net/to-do-list", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log("Connected to DB"))
    .catch(console.error);

app.listen(3001, ()=> console.log("Server started on port 3001"));

