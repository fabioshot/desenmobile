import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ImcService } from '../service/imc.service';
import { EditarImcPage } from '../pages/editar-imc/editar-imc'

const config = {
    apiKey: "AIzaSyDtZOTHybFItn7uX-2JGPwIb74XNcGNCtE",
    authDomain: "aula-f8e18.firebaseapp.com",
    databaseURL: "https://aula-f8e18.firebaseio.com",
    projectId: "aula-f8e18",
    storageBucket: "aula-f8e18.appspot.com",
    messagingSenderId: "18690152435"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EditarImcPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule.enablePersistence(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EditarImcPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ImcService
  ]
})
export class AppModule {}
