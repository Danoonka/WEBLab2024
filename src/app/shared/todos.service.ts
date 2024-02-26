import {Injectable} from "@angular/core";

export interface Todo{
  id: number
  title: string
  completed: boolean
  date?: any
}

@Injectable({providedIn:'root'})
export class TodosService{

  todos: Todo[] = [
    {id: 1, title: 'study Angular', completed: false, date: new Date},
    {id: 2, title: 'complete test', completed: true, date: new Date},
    {id: 3, title: 'find a job', completed: false, date: new Date}
  ]
  onToggle(id:number){
    const idx = this.todos.findIndex(t => t.id === id)
    this.todos[idx].completed = !this.todos[idx].completed
  }

  removeTodo(id:number){
    this.todos = this.todos.filter(t => t.id !== id)
  }
  onSubmit(value: string) {
    const newTodo = {
      id: this.todos.length + 1,
      title: value,
      completed: false,
      date: new Date
    }
    this.todos.push(newTodo)
  }
}
