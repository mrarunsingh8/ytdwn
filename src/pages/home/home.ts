import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SearchProvider, YTResponce, YTItems } from '../../providers/search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public YTData: YTResponce;
  public YTItemList: YTItems;
  public data: any = [0,1,2,3,4,5,6,7,8,9,10,11,12];

  constructor(public navCtrl: NavController, public searchProvider: SearchProvider){
  	
  }

  ionViewDidEnter(){
  	this.initHomepage();
  }

  initHomepage(){
  	this.searchProvider.searchVideoByTerm().subscribe((res) => {
  		this.YTData = res;
  		this.YTItemList = this.YTData.items;
  		console.log(this.YTItemList);
  	}, (err: HttpErrorResponse) => {
      console.log(err);
    });
  }

}
