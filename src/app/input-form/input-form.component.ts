import {Component, OnInit} from '@angular/core';
import {TodosService} from "../shared/todos.service";

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})
export class InputFormComponent implements OnInit{
  inputValue: string = '';
  submitted: boolean = false;

  constructor(private todosService: TodosService) {

  }
  onSubmit(value:string) {
    this.todosService.onSubmit(value)
  }

  ngOnInit(): void {
  }
}
