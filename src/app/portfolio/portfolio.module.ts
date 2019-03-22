import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
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
} from "@angular/material";
import { ClassComponent } from './class/class.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [PortfolioComponent, ClassComponent],
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
  ],
  exports: [PortfolioComponent],
  entryComponents: [PortfolioComponent]
})
export class PortfolioModule { }
