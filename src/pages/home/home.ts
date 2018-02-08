import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  results: object []
  
  constructor(
  	public navCtrl: NavController, 
  	private http: Http

  	) { }

  ngOnInit() {
  }

  findCharacter(name) {
		console.log('finding ' + name);
		this.http.get('https://swapi.co/api/people/?search=' + name)
		.toPromise()
		// .then(response => console.log(response.json().results));
		.then(response => this.results = response.json().results);
	}

}




