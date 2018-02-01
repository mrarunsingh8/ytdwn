import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpErrorResponse } from '@angular/common/http';

import { SearchProvider, YTResponce, YTItems} from '../../providers/search/search';
/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  public YTData: YTResponce;
  public YTItemList: Array<YTItems>;

  searchTerm: string ='';

  constructor(public navCtrl: NavController, public navParams: NavParams, public searchProvider: SearchProvider) {
  	this.searchTerm = this.navParams.data.searchBar;
  }

  ionViewDidEnter(){
  	this.initSearchpage();
  }

  initSearchpage(){
  	this.searchProvider.searchVideoByTerm(this.navParams.data.searchBar).subscribe((res) => {
  		this.YTData = res;
  		this.YTItemList = this.YTData.items;
  	}, (err: HttpErrorResponse) => {
      console.log(err);
    });
  }

}
