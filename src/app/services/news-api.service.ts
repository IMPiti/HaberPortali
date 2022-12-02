import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

constructor(private http:HttpClient) { }
  
  ArticlesApiUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0aaac198f79a46d2971bdc40b90b40ab'

  Articles():Observable<any>

  {
    return this.http.get(this.ArticlesApiUrl);
  }
}

  
