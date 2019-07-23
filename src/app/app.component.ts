import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../services/app.service'
import { ResponseModel } from '../model/screening.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private screeningData;
  constructor(private appService: AppService){ }

  ngOnInit() {
      this.getTableData();
  }

  public getTableData(){
    this.appService.getData().subscribe(res => {
      let result = new ResponseModel(res);
      this.screeningData = result.results;
      console.log(this.screeningData)
    })
 
  }
}

