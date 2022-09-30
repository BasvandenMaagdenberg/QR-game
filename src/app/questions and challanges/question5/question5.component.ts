import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'question5',
  templateUrl: './question5.component.html',
  styleUrls: ['./question5.component.css']
})
export class Question5Component {

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
    localStorage.setItem(score, '50');
    this.score = localStorage.getItem('score')
    this.redirect();
  }
}



