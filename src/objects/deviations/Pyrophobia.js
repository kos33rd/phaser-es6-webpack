import Deviation from './Deviation'

export default class Pyrophobia extends Deviation {

  consrtuctor () {
    this.super(arguments)
    this.name = 'Pyrophobia'
  }


  affect () {
    console.log('You are being affected by pyrophobia')
  }
}
