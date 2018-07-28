import express from 'express';
import db from '../models/index'
const router = express.Router();



router.get('/', (req, res) => {
  res.send('Hello from todos route!')
  console.log(db)
});

export default router;
