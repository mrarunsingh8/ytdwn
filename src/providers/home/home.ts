import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the HomeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export interface YTItems{
	kind?: string;
	etag?: string;
	id?: {kind: string, videoId: string};
	snippet?: {
		publishedAt?: string,
		channelId?: string,
		title?: string,
		description?: string,
		thumbnails?: {
			default?:{
				url:string, width: string, height: string
			},
			medium?:{
				url:string, width: string, height: string
			},
			high?:{
				url:string, width: string, height: string
			}
		},
		channelTitle: string,
		liveBroadcastContent: string,
	};
	statistics: any;

}

export interface YTResponce{
	kind?: string;
	etag?: string;
	nextPageToken?: string;
	regionCode?: string;
	pageInfo?: {totalResults: string, resultsPerPage: number};
	items?: Array<YTItems>;
}

@Injectable()
export class HomeProvider {
  data: any = {
  	url: 'https://www.googleapis.com/youtube/v3/videos',
  	apiKey: 'AIzaSyAJk1xUI72YYfBMgEc84gjHUX-k2AN6-B0',
  	maxResults: 10,
  	part: 'snippet,statistics', 
  	chart: 'mostPopular'
  };

  constructor(public http: HttpClient) {
    console.log('Hello SearchProvider Provider');
  }

  searchVideoForHome(){
  	let url = this.data.url+"?";
  	url += 'key='+this.data.apiKey;
  	url += '&maxResults='+this.data.maxResults;
  	url += '&part='+this.data.part;
  	url += '&chart='+this.data.chart;
  	return this.http.get<YTResponce>(url, {}).map(res => res);
  }

}
