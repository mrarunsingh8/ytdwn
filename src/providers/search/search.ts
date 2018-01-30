import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
/*
  Generated class for the SearchProvider provider.

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

}

export interface YTResponce{
	kind?: string;
	etag?: string;
	nextPageToken?: string;
	regionCode?: string;
	pageInfo?: {totalResults: string, resultsPerPage: number};
	items?: any;
}

@Injectable()
export class SearchProvider {
  data: any = {
  	url: 'https://www.googleapis.com/youtube/v3/search',
  	apiKey: 'AIzaSyAJk1xUI72YYfBMgEc84gjHUX-k2AN6-B0',
  	maxResults: 10,
  	part: 'snippet',
  	order: 'viewCount'
  };

  constructor(public http: HttpClient) {
    console.log('Hello SearchProvider Provider');
  }

  searchVideoByTerm(term?: string){

  	let url = this.data.url+"?";
  	url += 'key='+this.data.apiKey;
  	url += '&maxResults='+this.data.maxResults;
  	url += '&part='+this.data.part;
  	url += (typeof term !== 'undefined')?'&q='+term:'';
  	
  	if(typeof term !== 'undefined'){
  		url += '&order='+this.data.order;
  	}
  	console.log(url);
  	return this.http.get<YTResponce>(url, {}).map(res => res);
  }

}
