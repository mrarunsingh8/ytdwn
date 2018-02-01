import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomeProvider, YTResponce, YTItems } from '../../providers/home/home';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public YTData: YTResponce;
  public YTItemList: Array<YTItems>;

  constructor(public navCtrl: NavController, public homeProvider: HomeProvider){
  	
  }

  ionViewDidEnter(){
  	this.initHomepage();
  }

  initHomepage(){
  	this.homeProvider.searchVideoForHome().subscribe((res) => {
  		this.YTData = res;
  		this.YTItemList = this.YTData.items;
  	}, (err: HttpErrorResponse) => {
      console.log(err);
    });
  }

  openVideoDetail(videoId: string){
    console.log(videoId);
    this.navCtrl.push(DetailPage, {videoId: videoId});
  }

  downloadVideo(videoId: string){
    console.log(videoId);
  }

}
