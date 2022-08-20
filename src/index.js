import './style.css'
import 'material-icons/iconfont/material-icons.css';

import { Todo, TodoList } from './clases/exportClass';
import { template_new_task } from './components/newTask.js';

const todoList =  new TodoList();
const tarea = new Todo('Tarea de prueba!');

todoList.addNewTask(tarea);

template_new_task( tarea );
