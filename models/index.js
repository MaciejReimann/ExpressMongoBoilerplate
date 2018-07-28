import mongoose from 'mongoose';
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/todo-api', (err) => {
  if (err) {
    console.log('Failed connecting to MongoDB.')
  } else {
    console.log('Successfully connected to Mongo!')
  }
});

mongoose.Promise = Promise;

export {default} from '../models/todo'; // redirecting in es6
