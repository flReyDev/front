import { Todo } from "./Todo.class";

export class TodoList{

    constructor(){
        this.tareas = new Array;
    }

    addNewTask( task = Todo ){
        this.tareas.push( task );
    }

    delete( id = Number ){

    }

    taskCompleted( id = Number ){

    }

    deleteAllCompleted(){

    }

    getAll(){
        return this.tareas;
    }

}