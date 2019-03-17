import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfoComponent } from './personal-info.component';
import { FormsModule} from "@angular/forms";
import {
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatGridListModule,
} from "@angular/material";

@NgModule({
  declarations: [PersonalInfoComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    FormsModule,
  ],
  exports: [PersonalInfoComponent],
  entryComponents: [PersonalInfoComponent]
})
export class PersonalInfoModule { }
