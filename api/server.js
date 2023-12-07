const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// CONNECTING TO MONGO
mongoose.connect("mongodb+srv://vladzizic:ukvC6AHw4dmyrCml@cluster0.mdqkrcm.mongodb.net/to-do-list", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log("Connected to DB"))
    .catch(console.error);

const Todo = require('./models/Todos');

// ROUTES
app.get('/todos', async(req, res) =>{
    const todos = await Todo.find();
    res.json(todos);
});

// ROUTES FOR CREATING A NEW TASK 
app.post('/todo/new', (req, res) => {
        const todo = new Todo({
            text: req.body.text
        });
        todo.save();
        res.json(todo);
})

// ROUTES FOR COMPLETED TASKS
app.get("/todo/complete/:id", async (req, res) => {
    const todo = await Todo.findById(req.params.id);

    todo.complete = !todo.complete;
    todo.save();
    res.json(todo);
});

// ROUTE FOR DELETED TASKS 
app.delete('/todo/delete/:id', async(req, res) =>{
    const result = await Todo.findByIdAndDelete(req.params.id);
    res.json(result)
});





app.listen(3001, ()=> console.log("Server started on port 3001"));

