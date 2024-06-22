import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  @Output() todoEve : EventEmitter<string> = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {

  }

  onClickTodo(item : HTMLInputElement){
    if(item.value){
      console.log(item.value)
      this.todoEve.emit(item.value)
    item.value = ''
    }
    else{
      alert('Please insert todo value...')
    }
  }

}
