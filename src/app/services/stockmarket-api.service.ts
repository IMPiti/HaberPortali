import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

constructor(private http:HttpClient) { }
  
  StocksUrl = 'https://newsapi.org/v2/everything?q=apple&from=2022-11-30&to=2022-11-30&sortBy=popularity&apiKey=0aaac198f79a46d2971bdc40b90b40ab'

  Stocks():Observable<any>

  {
    return this.http.get(this.StocksUrl);
  }
}
