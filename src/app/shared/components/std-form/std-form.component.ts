import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Istd } from '../../model/std';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {

  @Output() formObj : EventEmitter<Istd> = new EventEmitter<Istd>()
  constructor() { }

  fname !: string
  lname !: string
  email !: string
  contact !: string
  ngOnInit(): void {
  }

  // onAddStd(fname : HTMLInputElement,lname : HTMLInputElement,email : HTMLInputElement,contact : HTMLInputElement){
    onAddStd(eve : NgForm){ 
  let obj : Istd = {
      fname : eve.value.fname,
      lname : eve.value.lname,
      email : eve.value.email,
      contact :eve.value.contact
    }
   if(eve.valid){
    console.log(obj)
    this.formObj.emit(obj)
    eve.resetForm()
  }
  else{
    alert('all fields are mandatory...')
  }

}

}
