import './css/style.css'
import app from './js/app.js';


if (document.querySelector('#app').getElementsByTagName('canvas').item(0)) {
    document.querySelector('#app').removeChild(document.querySelector('#app').getElementsByTagName('canvas').item(0));
}
document.querySelector('#app').appendChild(app.view);


if (module.hot) {
    module.hot.accept((err) => {
        if (err) {
            console.error('Cannot apply HMR update.', err);
        }
    });
}
