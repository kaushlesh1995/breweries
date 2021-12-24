import { Injectable } from '@angular/core';
import { Environment } from '../@core/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrewerieService {

  constructor(
    private _http: HttpClient,
		private _env: Environment
  ) { }

  breweriesList() {
		return this._http.get<any>(this._env.baseURL + "/breweries", {
		})
	}

  searchBreweriesList(data:any) {
		return this._http.get<any>(this._env.baseURL + "/breweries/search?query=" + data,{
		})
	}
}
