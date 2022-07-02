/**
 * Función que permite la creación de una card
 * @param {Object} obj 
 * @returns HTMLElement
 */
export function cards(obj){

    let {src, name, title, content, href, a_content } = obj;

    let divCard  = document.createElement('div'),
        divIcon  = document.createElement('div'),
        divInfo  = document.createElement('div'),
        btn_leer = document.createElement('button'),
        img = document.createElement('img'),
        titulo = document.createElement('h4'),
        contenido = document.createElement('p'),
        link = document.createElement('a');
        // Contenedor de la card
        divCard.classList.add('card');
        //Contenedor de la imagen de la card 
        divIcon.classList.add('card_icon')
        //Contenedor de la información texto y demas de la card 
        divInfo.classList.add('card_info')
    
        btn_leer.classList.add('btn_leer_mas');
        btn_leer.type = 'button';
        btn_leer.innerText = 'Leer mas';

        // Agrego la imagen al contenedor de imagenes de la card
        img.src = src;
        img.alt = name;

        divIcon.appendChild(img);
        
        // Agrego la info al contenedor de info 
        titulo.innerText = title;
        // p
        contenido.innerText = content;
        // a
        link.href = href;
        link.innerText = a_content;
        
        divInfo.appendChild(titulo);
        divInfo.appendChild(contenido);
        divInfo.appendChild(btn_leer);
        // divInfo.appendChild(link);
        
        // Agregar contenedores de la card a la card root
        divCard.appendChild(divIcon);
        divCard.appendChild(divInfo);
    return divCard;
}