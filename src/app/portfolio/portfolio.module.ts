import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent, ClassDeleteSnackBarComponent } from './portfolio.component';
import {
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatGridListModule,
  MatExpansionModule,
  MatIconModule,
  MatTooltipModule,
  MatRippleModule,
  MatChipsModule,
  MatSnackBarModule,
} from "@angular/material";
import { ClassComponent } from './class/class.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [PortfolioComponent, ClassComponent, ClassDeleteSnackBarComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatExpansionModule,
    MatIconModule,
    MatTooltipModule,
    MatRippleModule,
    FormsModule,
    MatChipsModule,
    MatSnackBarModule,
  ],
  exports: [PortfolioComponent],
  entryComponents: [PortfolioComponent, ClassDeleteSnackBarComponent]
})
export class PortfolioModule { }
