import mongoose from 'mongoose';
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/todo-api');

mongoose.Promise = Promise;

import Todo from 'todo';
export default Todo;
