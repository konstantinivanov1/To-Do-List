import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({
    toDoTitle: new FormControl('', [Validators.required]),
  })

  toDoList: any;

  ngOnInit() {
  }

  generateRandomId(): string {
    return Math.random().toString(36).substring(2, 9);
  }

  addToDo() {
    if (this.formGroup.valid) {
      const newToDo = {
        id: this.generateRandomId(),
        status: 'pending',
        title: this.formGroup.get('toDoTitle')?.value,
        editExpanded: false
      }

      const storedToDos = localStorage.getItem('To-Do');
      const toDoList = storedToDos ? JSON.parse(storedToDos) : []

      toDoList.push(newToDo)

      localStorage.setItem('To-Do', JSON.stringify(toDoList));
      window.location.reload();
    }
  }
}
