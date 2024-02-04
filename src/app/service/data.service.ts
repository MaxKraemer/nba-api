import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData(): Observable<string[]> {
    const mockData: string[] = ['Miami', 'Atlanta', 'New York'];
    return of(mockData);
  }

}
