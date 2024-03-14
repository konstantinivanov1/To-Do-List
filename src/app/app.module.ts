import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ToDoListComponent } from "./to-do-list/to-do-list.component";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { FormComponent } from "./form/form.component";
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
    declarations: [AppComponent, ToDoListComponent, FormComponent],
    imports: [BrowserModule,
        CommonModule,
        ReactiveFormsModule,
        MatDialogModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})


export class AppModule { }