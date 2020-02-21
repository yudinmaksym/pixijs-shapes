import BaseShape from './shapeBase'

export default class Triangle extends BaseShape {
    constructor(...arg) {
        super(...arg)
        this.name = 'triangle'
        this.shapeWidth = 64
        this.shapeHeight = 32
        this.area =  Math.floor((this.shapeWidth * this.shapeHeight) / 2);
    }

    draw() {
        this.beginFill(this.getRandomColor())
        this.drawPolygon([
            -this.shapeHeight, this.shapeWidth,
            this.shapeHeight, this.shapeWidth,
            0, 0
        ])
        this.endFill()
        return this
    }

    getArea() {
        return this.area
    }
}