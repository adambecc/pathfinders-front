const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let todos = []; // Mock database for now

// CREATE: Add a new todo
app.post('/todos', (req, res) => {
    const { title, description, date } = req.body;
    const newTodo = { id: Date.now(), title, description, date, completed: false };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// READ: Get all todos
app.get('/todos', (req, res) => {
    res.json(todos);
});

// UPDATE: Update a todo's completion status or details
app.put('/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    const todo = todos.find(t => t.id === todoId);

    if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
    }

    const { title, description, date, completed } = req.body;
    todo.title = title || todo.title;
    todo.description = description || todo.description;
    todo.date = date || todo.date;
    todo.completed = completed !== undefined ? completed : todo.completed;

    res.json(todo);
});

// DELETE: Delete a todo
app.delete('/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    todos = todos.filter(t => t.id !== todoId);
    res.status(204).end();
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
