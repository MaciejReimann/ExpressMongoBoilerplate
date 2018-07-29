import express from 'express';
import Todo from '../models/index'
const router = express.Router();

router.get('/', (req, res) => {
  Todo.find()
  .then( todos => res.json(todos) )
  .catch( err => res.send(err) )
});

router.post('/', (req, res) => {
  Todo.create(req.body)
  .then( newTodo => res.status(201).json(newTodo) )
  .catch( err => res.send(err) )
});

router.get('/:todoId', (req, res) => {
  Todo.findById(req.params.todoId)
  .then( foundTodo => res.json(foundTodo) )
  .catch( err => res.send(err) )
});

router.put('/:todoId', (req, res) => {
  Todo.findOneAndUpdate( { _id: req.params.todoId }, req.body, {new: true} )
  .then(todo => res.json(todo))
  .catch(err => res.send(err))
});

router.delete('/:todoId', (req, res) => {
  Todo.remove( { _id: req.params.todoId } )
  .then(res.json( {message: 'We deleted it!'} ))
  .catch(err => res.send(err) )
})

export default router;
