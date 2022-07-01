
export const saludar = ( nombre ) => {

    let dialog = document.querySelector('#dialogo'),
        cancelar = document.querySelector('#cancel'),
        mostrar = document.querySelector('#mostrar'),
        h1 = document.querySelector('#title');

        h1.innerHTML = `<strong>Hola </strong><span>${ nombre }</span>`
        mostrar.addEventListener('click', ()=>{
            console.log('Hola mundo!!!');
            dialog.showModal();
        })

        cancelar.addEventListener('click', ()=>{
            dialog.close()
        })

}