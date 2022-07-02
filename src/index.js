import './css/index.css'
import './style.css'
import './css/container.css'
import { toogleMenu } from "./helpers/help_navbar";
import { header } from './components/Header';
import { container } from './components/Container';

let app = document.querySelector('#app');
    app.innerHTML = header()
    app.appendChild(container())
    toogleMenu();





