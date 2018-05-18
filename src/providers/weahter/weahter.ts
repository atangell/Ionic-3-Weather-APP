import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the WeahterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeahterProvider {

//apiKey = 'b78d07ae575225f974225d79a81c66b5';
apiKey = '99dfe35fcb7de1ee';
url;

  constructor(public http: HttpClient) {
    console.log('Hello WeahterProvider Provider');
    this.url = 'http://api.wunderground.com/api/'+this.apiKey+'/conditions/q';
  }

  getWeather(city, state){
  return this.http.get(this.url+'/'+ state +'/'+ city +'.json').map((res: Response) => res);


  }
}
