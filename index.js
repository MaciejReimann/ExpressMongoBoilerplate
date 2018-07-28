
import express from 'express';
import todoRoutes from './routes/todos';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send('Hello from root route')
});

app.use('/api/todos', todoRoutes);

app.listen(PORT, ()=> {
  console.log(`App is running on port ${PORT}`)
})
