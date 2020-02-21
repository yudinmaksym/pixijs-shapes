import BaseShape from './shapeBase'

export default class Circle extends BaseShape {
    constructor(...arg) {
        super(...arg)
        this.name = 'circle'
        this.shapeRadius = 32
        this.area =  Math.floor(Math.PI * this.shapeRadius * this.shapeRadius);
    }

    draw() {
        this.beginFill(this.getRandomColor())
        this.drawCircle(0, 0, this.shapeRadius)
        this.endFill()
        return this
    }

    getArea() {
        return this.area
    }
}