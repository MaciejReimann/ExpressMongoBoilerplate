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
  .then( newTodo => res.json(newTodo) )
  .catch( err => res.send(err) )
});

export default router;
