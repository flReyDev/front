// Helper de ayuda para el control de las animaciones del navBar 
export const toogleMenu = ()=>{
    let btn_close     = document.getElementById('close_menu'), 
        btn_show_menu = document.getElementById('toogle_menu'),
        menu          = document.getElementById('nav_menu');
    
        btn_show_menu.addEventListener('click', ()=>{
            menu.classList.toggle('show')
        })

        btn_close.addEventListener('click', ()=>{
            menu.classList.remove('show')
        })
}