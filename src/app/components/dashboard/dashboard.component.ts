import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/HttpService/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  juryData:any;
  constructor(private jsonService:HttpService) { }

  ngOnInit() {
    this.getJuryData();
  }

  getJuryData(){
    this.jsonService.getJsonData().subscribe(data=>{
      console.log("jury members..!",data.jury_members);
      this.juryData = data.jury_members;
    })
  }

}
