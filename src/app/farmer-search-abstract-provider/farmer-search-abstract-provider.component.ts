import { FarmerSearchAbstractProvider } from '../abstract/farmer-search-abstract.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Farmer } from '../model/farmer/farmer.component';

@Injectable({
  providedIn: 'root'
})
export class FarmerSearchProvider implements FarmerSearchAbstractProvider {
  
  searchFarmers(params: string) { 
    return this.httpSearch(params);
  }

  constructor(private http: HttpClient) {}

  private httpSearch(value:string) {
    return this.http.get<Farmer[]>(`${environment.api_url}user?param=${value}`);
  }
}
