import mongoose from 'mongoose';
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/todo-api');

mongoose.Promise = Promise;

export {default} from '../models/todo'; // redirecting in es6
