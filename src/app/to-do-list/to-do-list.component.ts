import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

interface ToDo {
  id: string,
  status: 'done' | 'pending',
  title: string,
  editExpanded: boolean
}

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  toDoList$: ToDo[] = [];
  editOpened: boolean = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    const storedToDoList = localStorage.getItem('To-Do');
    this.toDoList$ = storedToDoList ? JSON.parse(storedToDoList) : [];
  }

  markAsDone(id: string) {
    const itemToUpdate = this.toDoList$.find(obj => obj.id === id);

    if (itemToUpdate) {
      if (itemToUpdate.status != 'done') {
        itemToUpdate.status = 'done';
      }
      else {
        itemToUpdate.status = 'pending';
      }
    } else {
      const message = `Object not found with ID: ${id}`;
      alert(message);
    }

    localStorage.setItem('To-Do', JSON.stringify(this.toDoList$));
  }

  edit(id: string){
    
    const indexToExpand = this.toDoList$.findIndex(obj => obj.id === id);

    if(indexToExpand > -1){
      this.toDoList$[indexToExpand].editExpanded = !this.toDoList$[indexToExpand].editExpanded;
    }
    else{
      alert(`Object not found with ID: ${id}`);
    }
  }

  save(id: string, newTitle: string) {

    const indexToEdit = this.toDoList$.findIndex(obj => obj.id === id);

    if(indexToEdit > -1){
      this.toDoList$[indexToEdit].title = newTitle;
      this.editOpened = false;
    }else{
      alert(`Object not found with ID: ${id}`);
      this.editOpened = false;
    }
  }

  delete(id:string){

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
    });


    dialogRef.afterClosed().subscribe(result => {
      if(result){
        const indexToDelete = this.toDoList$.findIndex(object =>  object.id === id);

        if(indexToDelete !== -1){
          this.toDoList$.splice(indexToDelete, 1);
        }else{
          const message = `Object not found with ID: ${id}`;
          alert(message);
        }
    
        localStorage.setItem('To-Do', JSON.stringify(this.toDoList$));
      }
    })


  }
}
