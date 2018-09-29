import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AddEventoPage } from '../addevento/addevento'
import { MostrarEventoPage } from '../mostrarevento/mostrarevento'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  chamarAdicionarEvento(){
    this.navCtrl.push(AddEventoPage)
  }

  chamarMostrarEvento(){
    this.navCtrl.push(MostrarEventoPage)
  }

}
