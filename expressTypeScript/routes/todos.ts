import { Router } from "express";

import { Todo } from "../models/todo";

const todos: Todo[] = [];

const router = Router();

router.get('/todos', (req, res, next)=>{
    return res.status(200).json({todos: todos})
});

router.post('/todo', (req, res, next)=>{
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: req.body.text
    }

    todos.push(newTodo);
    return res.status(201).json({message: 'Added T odo', newTodo: newTodo, todos: todos})
})

router.put('/todos/:todoId', (req, res, next) =>{
    const tId = req.params.todoId;
    const tIndex = todos.findIndex(t => t.id === tId);
    if(tIndex >= 0){
        todos[tIndex] = {id: todos[tIndex].id, text: req.body.text}
        return res.status(200).json({message: 'Updated todo', todos: todos})
    }
    return  res.status(404).json({ message: 'Could not find a todo for this id'})

})

router.delete('/todos/:todoId', (req, res, next)=>{
    const tId = req.params.todoId;
    res.status(200).json({message: 'Todo deleted',
    todos: todos.filter((t)=> t.id === tId)});
})

export default router;