import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Imc } from '../../model/imc';
import { EditarImcPage } from '../editar-imc/editar-imc';
import { ImcService } from '../../service/imc.service';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private imc: Imc = new Imc()
  items: Observable<Imc[]>

  constructor(public navCtrl: NavController, private imcService : ImcService) {
    this.items = this.imcService.getImcs().valueChanges();
  }

  converterNumber(numero): number {
    return parseFloat(numero);
  }

  cadastrarImc() {
    this.imcService.addImc(this.imc);
  }

  editarRemover(imcEditarRemover: Imc) {
    this.navCtrl.push(EditarImcPage, { imc: imcEditarRemover });
  }


}
