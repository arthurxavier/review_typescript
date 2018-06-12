import {Spacecraft, Containership} from './base-ships'

export class MilenniumFalcon extends Spacecraft implements Containership{

  cargoContainers: number

  //chamando construtor da classe Spacecraft
  constructor(){
    super('hyperdrive')
    this.cargoContainers = 4
  }

  //sobreescrevendo um metodo
  jumpIntoHyperspace(){
    if(Math.random() >= 0.5){
      super.jumpIntoHyperspace()
    } else {
      console.log('Failed to jump into hyperspace')
    }
  }
}
