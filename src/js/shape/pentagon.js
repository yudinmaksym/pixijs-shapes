import BaseShape from './shapeBase'

export default class Pentagon extends BaseShape {
    constructor(...arg) {
        super(...arg)
        this.name = 'pentagon'
        this.sideLength = 25
        this.apoheia = 25
        this.sides = 5
        this.area =  Math.floor(((this.sideLength * this.apoheia) / 2) * this.sides);
    }

    draw() {
        this.beginFill(this.getRandomColor())
        this.drawPolygon([25, 0, 75, 0, 100, 50, 50, 100, 0, 50])
        this.endFill()
        return this
    }

    getArea() {
        return this.area
    }
}