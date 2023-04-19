const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

//connecting to MongoDB•••••••••••••••••••••••••••••••
mongoose.connect("mongodb+srv://vladzizic:ukvC6AHw4dmyrCml@cluster0.mdqkrcm.mongodb.net/to-do-list", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log("Connected to DB"))
    .catch(console.error);

const Todo = require('./models/Todos');

//routes•••••••••••••••••••••••••••••••••••••••••••••
app.get('/todos', async(req, res) =>{
    const todos = await Todo.find();
    res.json(todos);
});

app.post('/todo/new', (req, res) => {
        const todo = new Todo({
            text: req.body.text
        });
        todo.save();
        res.json(todo);
})

app.delete('/todo/delete/:id', async(req, res) =>{
    const result = await Todo.findByIdAndDelete(req.params.id);
    res.json(result)
});


app.get("/todo/update/:id", async(req, res) =>{
    const todo = await Todo.findById(req.params.id);

    todo.text = req.body.text;
    todo.save();
    res.json(todo);

});


app.listen(3001, ()=> console.log("Server started on port 3001"));

