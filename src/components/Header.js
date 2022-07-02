/**
 * Return template HTML
 * @returns string
 */
export const header = ()=>{
    return  `
        <header>
            <div class="logo">
                <img src="assets/img/logo.svg" alt="logo">
            </div>
            <nav class="nav" id="nav_menu">
                <ion-icon name="close-outline" class="header_close" id="close_menu"></ion-icon>

                <ul class="nav_list">
                    <li class="nav_item"><a href="" class="nav_link">Home</a></li>
                    <li class="nav_item"><a href="" class="nav_link">Noticias</a></li>
                    <li class="nav_item"><a href="" class="nav_link">Ingresar</a></li>
                    <li class="nav_item"><a href="" class="nav_link">Cotizar</a></li>
                    <li class="nav_item"><a href="" class="nav_link">Acerca de</a></li>
                    <li class="nav_item"><a href="" class="nav_link active">Registrarse</a></li>
                </ul>
            </nav>
            <ion-icon name="menu-outline" class="header_toogle" id="toogle_menu"></ion-icon>
        </header>
    `
}