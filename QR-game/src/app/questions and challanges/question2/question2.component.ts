import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component {

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


  onClickMe1() {
    this.backgroundStyle = 'red';
    this.redirect();
  }
  

  onClickMe2() {
    this.backgroundStyle = 'red';
    this.redirect();
  }

  onClickMe3(score='score') {
    this.backgroundStyle = 'green';
    localStorage.setItem(score, '20');
    this.score = localStorage.getItem('score')
    this.redirect();
  }
}



