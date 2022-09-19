import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todoForm!:FormGroup;
  todos:any;
  text:any;
  oldText:any;
  formSubmitted: boolean = false;
  appState = 'default';
  constructor(private service:TodosService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      
      text: ['', [Validators.required]]
    })
    
    this.todos = this.service.getTodos();
  }
  addTodo() {
    this.formSubmitted = true;
    this.markFormTouched(this.todoForm);

    if (this.todoForm.invalid) return;
    let newTodo = {
      text:this.text,
    };
    
    this.todos.push(newTodo);
    this.markFormUntouched(this.todoForm);
    console.log('Field Is Empty');
    
  }

  markFormTouched(group: FormGroup): void {
    Object.keys(group.controls).forEach((key: string) => {
      const control = group.controls[key];
      control.markAsTouched();
      control.markAsPristine();
    })
  }

  markFormUntouched(group: FormGroup): void {
    Object.keys(group.controls).forEach((key: string) => {
      const control = group.controls[key];
      control.markAsUntouched();
    })
  }

  updateTodo(){
    console.log(this.text);
    for(let i= 0;i<this.todos.length;i++)
    {
      if(this.todos[i].text == this.oldText) {
        this.todos[i].text = this.text;
      }
    } 
  }

  editTodo(todo:any) {
    this.appState = 'edit';
    this.oldText = todo.text;
    this.text = todo.text;
  }


  deleteTodo(todo:any) {
   
    for(let i = 0;i < this.todos.length;i++) {
     
      if(this.todos[i].text == todo) {
        this.todos.splice(i,1);
      }
    
    }
  
  }

}
