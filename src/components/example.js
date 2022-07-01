// carga dinamica de imagenes
// import logo from '../img/creando.png'


export const write = (texto)=>{

    let title =  document.createElement('h1'),
    // img = document.createElement('img'),
    div = document.getElementById('content');

    title.innerText = texto;
    div.append(title)
    console.log("Desde el componente");

    // img.src = logo;
    // img.alt = 'logo';


    document.body.append(div)
    // document.body.append(img)
}