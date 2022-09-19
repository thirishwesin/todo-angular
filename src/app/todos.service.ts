import { Injectable } from '@angular/core';
import { Init } from './init-todos';
import {Todo} from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService extends Init{

  constructor() {
    super();
    this.load();
   }

   getTodos(){
    let todos = JSON.parse(localStorage.getItem('todos')||'');
    return todos;
   }
   
   addTodo(newTodo:any) {
    let todos = JSON.parse(localStorage.getItem('todos')||'');
    todos.push(newTodo);
    localStorage.setItem('todos',JSON.stringify(todos))
   }

  //  updateTodo(oldText:any,newText:any) {
  //   let todos = JSON.parse(localStorage.getItem('todos')||'');
  //   for(let i = 0; i< todos.length;i++) 
  //   {
  //     if(todos[i].text == oldText){
  //       todos[i].text = newText;
  //     }
  //   } 
  //   localStorage.setItem('todos',JSON.stringify(todos));
  //  }
   
  //  deleteTodo(todo:any) {
  //   let todos = JSON.parse(localStorage.getItem('todos')||'')
  //   for(let i=0 ; i<todos.length ; i++) {
  //     if(todos[i].text == todo) {
  //       todos.splice(i,1);
  //     }
  //   }
  //   localStorage.setItem('todos',JSON.stringify(todos));
  //  }

  
}
