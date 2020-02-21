import BaseShape from './shapeBase'
import {Container, Graphics} from '../config/pixi'

export default class RandomShape extends BaseShape {
    constructor(...arg) {
        super(...arg)
        this.name = 'random shape'
        this.shapeWidth = 120
        this.shapeHeight = 80
        this.area =  Math.floor((Math.PI * this.shapeWidth * this.shapeHeight / 4) * 3)
    }

    draw() {
        let color = this.getRandomColor()

        let container = new Container()

        let shape1 = new Graphics()
        shape1.beginFill(color)
        shape1.drawEllipse(0, 0, this.shapeWidth, this.shapeHeight)
        shape1.rotation = Math.floor((Math.random() * 20) * Math.PI);
        shape1.endFill()

        container.addChild(shape1)

        let shape2 = new Graphics()
        shape2.beginFill(color)
        shape2.drawEllipse(0, 0, this.shapeWidth, this.shapeHeight)
        shape2.rotation = Math.floor((Math.random() * 20) * Math.PI);
        shape2.endFill()

        container.addChild(shape2)

        let shape3 = new Graphics()
        shape3.beginFill(color)
        shape3.drawEllipse(0, 0, this.shapeWidth, this.shapeHeight)
        shape3.rotation = Math.floor((Math.random() * 20) * Math.PI);
        shape3.endFill()

        container.addChild(shape3)

        this.addChild(container)
        return this
    }

    getArea() {
        return this.area
    }
}