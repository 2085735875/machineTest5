import { Component } from '@angular/core';
import { stdArray } from './shared/const/std';
import { Istd } from './shared/model/std';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  
  skillsArray : Array<string> = ['HTML', 'CSS', 'JS']

 studentArr : Array<Istd> = stdArray

  getTodo(eve : string){
    this.skillsArray.push(eve)
  }

  getFormObj(eve : Istd){
    this.studentArr.push(eve)
  }

}
