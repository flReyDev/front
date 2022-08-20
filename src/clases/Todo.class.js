export class Todo{
    
    constructor( tarea = String ){

        this.tarea = tarea;
        this.id = new Date().getTime();
        this.fechaCreacion = new Date();
        this.estado = false; //  false || true

    }
    
}