import { Component, state } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { WeahterProvider } from '../../providers/weahter/weahter';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather: any;
  location: {
    city: string,
    state: string;
  }

  constructor(public navCtrl: NavController,
    private weatherProvider:WeahterProvider,
    private storage: Storage) {

  }

  ionViewWillEnter(){
    this.storage.get('location').then((val) => {
      if(val != null){
        this.location = JSON.parse(val);
      }else{
        this.location ={
          city: 'Miami',
          state: 'FL'
        }
      }
      this.weatherProvider.getWeather(this.location.city, this.location.state)
    .subscribe(weather => {
      //console.log(weather);
      this.weather = weather.current_observation;

    });
    });



  }
}
