import { Component } from '@angular/core';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  scrollPoint(id:any){
    console.log(id);
    const element   = document.getElementById(id)
    if(element){
      element.scrollIntoView({behavior:'smooth'});
    }


  }



}
