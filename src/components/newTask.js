import { TodoList } from "../clases/todo-list-class";
import { Todo } from "../clases/Todo.class";

const inputTask = document.querySelector('.new-todo'),
      list_task = document.querySelector('.todo-list');

export const template_new_task = ( task = Todo ) =>{

    const template = `
    <li class="${ (task.estado) ? 'completed':'' }" data-id="${ task.id }">
        <div class="view">
            <input class="toggle" type="checkbox" ${ (task.estado) ? 'checked':'' }>
            <label>${ task.tarea }</label>
            <button type="button" class="destroy"></button>
        </div>
        <input class="edit" value="${ task.id }">
    </li> 
    `
    
    const div = document.createElement('div');
    div.innerHTML = template;

    list_task.append( div.firstElementChild )
    return div.firstChild;
}



inputTask.addEventListener('keyup', function(e){
    
        if( e.keyCode === 13){
        
            if(this.value !== '' ){
            const tarea = new Todo( this.value );
            const list = new TodoList();
            list.addNewTask( tarea );


            template_new_task( tarea );
            this.value = '';
        }else{
            alert("Si deseas crear una tarea nueva ingresa un valor!!");
        }

    }

})