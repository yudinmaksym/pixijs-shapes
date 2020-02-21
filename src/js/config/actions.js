let actions;

// ACTIONS CLASS FOR CREATING AND CALLING FUNCTIONS FROM DIFFERENT CONTROLLERS 

class Actions {

    constructor() {
        this.actions = {};
    }

    call(action, data) {
        if (!this.actions[action]) {
            return;
        }
        for (let func of this.actions[action]) {
            func(data);
        }
    }

    add(action, func) {
        if (!this.actions[action]) {
            this.actions[action] = [];
        }
        this.actions[action].push(func);
    }
}

actions = new Actions();

export default actions;