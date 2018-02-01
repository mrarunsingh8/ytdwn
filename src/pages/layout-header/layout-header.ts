import { Component, Input, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SearchPage } from '../search/search';
import { HomePage } from '../home/home';
import 'rxjs/Rx';
/**
 * Generated class for the LayoutHeaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-layout-header',
  templateUrl: 'layout-header.html',
})
export class LayoutHeaderPage  implements OnInit{
  @Input() searchTitle: string;
  @Input() searchTerm: string;
  isSearchActive: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ngOnInit(){
  	//console.log('searchTerm', this.searchTerm);
  }

  ionViewDidLoad() {
  	
  }

  onSearchInput(evt){

  }

  onSearchInputEnter(evt){

  	if(evt.keyCode === 13){
  		let inputValue = evt.target.value;
  		this.navCtrl.setRoot(SearchPage, {searchBar: inputValue});
  	}

  }

  gotToHome(){
  	this.navCtrl.setRoot(HomePage); 
  }
}
