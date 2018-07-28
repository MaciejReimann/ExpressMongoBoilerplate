import express from 'express';
import Todo from '../models/index'
const router = express.Router();



router.get('/', (req, res) => {
  res.send('Hello from todos route!')
  console.log(Todo)
});

export default router;
