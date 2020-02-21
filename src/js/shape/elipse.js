import BaseShape from './shapeBase'

export default class Elipse extends BaseShape {
    constructor(...arg) {
        super(...arg)
        this.name = 'elipse'
        this.shapeWidth = 50
        this.shapeHeight = 20
        this.area =  Math.floor(Math.PI * this.shapeWidth * this.shapeHeight / 4)
    }

    draw() {
        this.beginFill(this.getRandomColor())
        this.drawEllipse(0, 0, this.shapeWidth, this.shapeHeight);
        this.endFill()
        return this
    }

    getArea() {
        return this.area
    }
}