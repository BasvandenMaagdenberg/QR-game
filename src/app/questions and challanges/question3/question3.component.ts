import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'question3',
  templateUrl: './question3.component.html',
  styleUrls: ['./question3.component.css']
})
export class Question3Component {

  constructor(private router: Router) {
  }

  btnstate: boolean=false;
  score = localStorage.getItem('score')
  btngreen = '';
  backgroundStyle = '';

  async delay(ms: number) {
    await new Promise<void>(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
  }

  redirect(){
    this.btngreen = 'green';
    this.btnstate = true;
    this.delay(3000).then(any=>{
    this.router.navigate(['/']);
  });
  }


  onClickMe1(score='score') {
    this.backgroundStyle = 'green';
    localStorage.setItem(score, '30');
    this.score = localStorage.getItem('score')
    this.redirect();
  }
  

  onClickMe2() {
    this.backgroundStyle = 'red';
    this.redirect();
  }

  onClickMe3() {
    this.backgroundStyle = 'red';
    this.redirect();
  }
}



