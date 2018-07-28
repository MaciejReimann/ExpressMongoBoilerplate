
import express from 'express';
import todoRoutes from './routes/todos';

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello from root route')
});

app.use('/api/todos', todoRoutes);

app.listen(PORT, ()=> {
  console.log(`App is running on port ${PORT}`)
})
