import { Component, OnInit, HostListener } from '@angular/core';
import { HttpService } from '../../service/HttpService/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  juryData:any;
  constructor(private jsonService:HttpService) { }
  public innerWidth: any;
public status:boolean = false;
  ngOnInit() {
    this.getJuryData();
    this.innerWidth = window.innerWidth;

  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
    
    if(this.innerWidth <=1500){
this.status= true;
    }
    else {
      this.status = false;
    }
  }
  getJuryData(){
    this.jsonService.getJsonData().subscribe(data=>{
      console.log("jury members..!",data.jury_members);
      this.juryData = data.jury_members;
    })
  }

}
