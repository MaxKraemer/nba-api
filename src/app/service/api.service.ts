import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'https://api-nba-v1.p.rapidapi.com/teams/';

  private options = {
    headers: {
      'x-rapidapi-key': '5adadd5e68msh5bb4e443db00be4p11c04fjsn44e02c89ac17',
      'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
    }
  };

  constructor(private httpClient: HttpClient) { }

  getSeasonsData() {
    return this.httpClient.get(this.url, this.options);
  }

  

}
