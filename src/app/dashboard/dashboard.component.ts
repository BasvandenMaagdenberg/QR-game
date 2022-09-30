import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  scanResult: any='';
  title = 'QR-game';
  score = localStorage.getItem('score')

  ngOnInit():void{
    this.score = localStorage.getItem('score')
  }

  onCodeResult(result:string)
  {
    this.scanResult=result;
  }

}



