import Shapes from '../shape/index'

export default class ModelController {
    constructor() {
        this.allShapes = Shapes
        this.shapes = []
    }

    addShape(options, Constructor) {
        let Primitive, primitiveType;
        if(!Constructor) {
            Primitive = this._getRandomShape();
            primitiveType = new Primitive();
            primitiveType.draw().init(options);
            this.shapes.push(primitiveType);

            return primitiveType
        } else {
            primitiveType = new Constructor[0]()
            primitiveType.draw().init(options);
            this.shapes.push(primitiveType);

            return primitiveType
        }
        
    }

    getActiveShapes() {
        return this.shapes.filter(shape => !shape.isDelete);
    }

    deleteShapeFromMemmory(shapeId) {
        this.shapes = this.shapes.filter((el) => el.id !== shapeId)
    }

    changeShapeColor(area) {
        const newShapes = []
        this.shapes.map(el => {
            if(el.area === area) {
                const ShapeConst = this.allShapes.filter(shape => shape.name === el.constructor.name)
                const options = {
                    x: el.x,
                    y: el.y,
                    tickCount: el.tickCount
                }
                el.delete()
                this.deleteShapeFromMemmory(el.id)
                newShapes.push({constructor: ShapeConst, options: options})
            }
        })

        return newShapes
    }

    _getRandomShape() {
        return this.allShapes[Math.floor(Math.random() * this.allShapes.length)];
    }

    shapesCountAndArea() {
        let count = 0, area = 0;
        for (let shape of this.shapes) {
            if (shape.isDelete || shape.isDropped) {
                continue;
            }
            shape.play();
            count++;
            area += shape.getArea()
        }

        return {shapesOnScreenQnt: count, area: area}
    }
}