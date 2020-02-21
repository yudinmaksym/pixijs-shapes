import { Graphics } from '../config/pixi'
import setting from '../config/default_settings'
import actions from '../config/actions'
let _instance = null;

export default class AppController {
    constructor(app, view, model) {
        if (_instance) {
            return _instance
        }
        this.model = model
        this.view = view
        this.app = app
        this.init()
        this.background = null
        this.actionsInit()
        _instance = this;
    }

    init() {
        // INIT CANVAS BACKGROUND
        this.background = new Graphics();
        this.background.beginFill(0xFFFFFF);
        this.background.lineStyle(1, 0x000000);
        this.background.drawRect(0, 0, setting.app.width, setting.app.height);
        this.background.endFill();
        this.background.interactive = true;

        this.app.stage.addChild(this.background);
        this.background.on('pointerdown', this.onBackgroundClick.bind(this));
    }

    actionsInit() {
        actions.add('dropped', this.shapeDropped.bind(this));
        actions.add('increaseShape', this.increaseShape.bind(this));
        actions.add('decreaseShape', this.decreaseShape.bind(this));
        actions.add('increaseGravity', this.increaseGravity.bind(this));
        actions.add('decreaseGravity', this.decreaseGravity.bind(this));
    }

    startAction() {
        this.addPrimitive();
        this.app.ticker.add(delta => this.gameLoop(delta));
        this.view.elementCountChange(this.model.getActiveShapes())
    }

    addPrimitive(options, constructor) {
        const newShape = this.model.addShape(options, constructor)
        this.app.stage.addChild(newShape);
        newShape.on('pointerdown', this.onShapeClick.bind(this));
    }

    shapeDropped(options) {
        let shape = options.shape;
        this.model.deleteShapeFromMemmory(shape.delete())
        window.requestAnimationFrame(() => this.addPrimitive())
    }

    increaseShape(options) {
        this.addPrimitive(options)
        this.view.elementCountChange(this.model.getActiveShapes())
    }

    decreaseShape() {
        let primitive, activePrimitives;

        activePrimitives = this.model.getActiveShapes()
    
        if (activePrimitives.length) {
            primitive = activePrimitives.pop()
            this.model.deleteShapeFromMemmory(primitive.delete())
        }

        this.view.elementCountChange(this.model.getActiveShapes())
    }

    increaseGravity() {
        setting.gravity += setting.gravityStep;
        this.view.increaseGravity(setting.gravity)
    }

    decreaseGravity() {
        if (setting.gravity > setting.gravityStep) {
            setting.gravity -= setting.gravityStep;
        }
        this.view.decreaseGravity(setting.gravity)
    }

    onBackgroundClick(event) {
        this.addPrimitive({x: event.data.global.x, y: event.data.global.y})
        this.view.elementCountChange(this.model.getActiveShapes())
    }

    onShapeClick(event) {
        this.model.deleteShapeFromMemmory(event.currentTarget.delete())
        const newShapes = this.model.changeShapeColor(event.currentTarget.area)
        newShapes.map(el => this.addPrimitive(el.options, el.constructor))
        this.view.elementCountChange(this.model.getActiveShapes())
    }

    gameLoop() {
        const qntAndArea = this.model.shapesCountAndArea()
        this.view.gameLoop(qntAndArea)
    }
}
