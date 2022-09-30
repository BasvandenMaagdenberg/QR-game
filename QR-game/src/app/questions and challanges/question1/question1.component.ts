import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component {  

  constructor(private router: Router) {
  }

  btnstate: boolean=false;
  score = localStorage.getItem('score')
  backgroundStyle = '';
  btnred = '';
  btngreen = '';

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

  onClickMe1() {
    this.backgroundStyle = 'red';
    this.redirect();
  }

  points= 1;
  

  onClickMe2(score='score') {
    this.backgroundStyle = 'green';
    localStorage.setItem(score, '10');
    this.score = localStorage.getItem('score')
    this.redirect();
  }

  onClickMe3() {
    this.backgroundStyle = 'red';
    this.redirect();
  }
}




