import setting from '../config/default_settings';
import actions from '../config/actions'

let _instance = null;

export default class ViewController {

    constructor() {
        if (_instance) {
            return _instance
        }
        this.clickEvents();
        document.querySelector('#gravity-value').innerHTML = setting.gravity;
        _instance = this;
    }

    clickEvents() {
        document.querySelector('#gravity-decrease').addEventListener('click',  () => actions.call('decreaseGravity'));
        document.querySelector('#gravity-increase').addEventListener('click',  () => actions.call('increaseGravity'));
        document.querySelector('#increase-elements').addEventListener('click', () => actions.call('increaseShape'));
        document.querySelector('#decrease-elements').addEventListener('click', () => actions.call('decreaseShape'));
    }

    decreaseGravity(gravity) {
        document.querySelector('#gravity-value').innerHTML = gravity;
    }

    increaseGravity(gravity) {
        document.querySelector('#gravity-value').innerHTML = gravity;
    }

    elementCountChange(qnt) {
        document.querySelector('#shapes-number-per-sec').innerHTML = qnt.length;
    }

    gameLoop(options) {
        document.querySelector('#shapes-number').innerHTML = options.shapesOnScreenQnt;
        document.querySelector('#surface-area').innerHTML = options.area;
    }
}