import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/services/news-api.service';
import { StocksService } from 'src/app/services/stockmarket-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private service:NewsApiService, private service2:StocksService) { }

  ArticlesResult:any=[];
  StocksResult:any=[];
  ngOnInit() {
  this.service.Articles().subscribe(result=>{
    console.log(result);
    this.ArticlesResult = result.articles;
  });  
  this.service2.Stocks().subscribe(result=>{
    console.log(result)
    this.StocksResult = result.articles;
  

  });
}

}
