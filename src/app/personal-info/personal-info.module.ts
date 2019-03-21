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
  MatIconModule,
  MatListModule,
  MatChipsModule,
  MatTooltipModule,
} from "@angular/material";
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { EditPersonalInfoComponent } from './edit-personal-info/edit-personal-info.component';
import { ViewPersonalInfoComponent } from './view-personal-info/view-personal-info.component';

@NgModule({
  declarations: [PersonalInfoComponent, EditPersonalInfoComponent, ViewPersonalInfoComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    FormsModule,
    MatIconModule,
    MatListModule,
    MatChipsModule,
    MatTooltipModule,
    MaterialFileInputModule
  ],
  exports: [PersonalInfoComponent],
  entryComponents: [PersonalInfoComponent]
})
export class PersonalInfoModule { }
