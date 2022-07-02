import { cards } from "./Cards";

export const container =()=>{
    let container = document.createElement('div');
        container.classList.add('container');
        container.id = 'conten'

        for(let i = 0; i<5; i++){
            
            container.appendChild(
                cards({
                    src:     'https://source.unsplash.com/random/200x120/?river,park',
                    name:    'unsplash',
                    title:   'Esto es una prueba',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aliquid magnam voluptatibus! Fugiat aperiam ducimus delectus debitis dolores ex a eos sed, esse officiis commodi, error in cumque sunt quos dolore libero ad tempore deleniti inventore. Fugit rerum aut maxime eaque reiciendis harum temporibus blanditiis vero, minus exercitationem. Eius, autem.',
                    href:    '#/',
                    a_content: 'Ver mas'
                })
            )
        }
       
    
        return container;
}