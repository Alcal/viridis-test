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
} from "@angular/material";
import { ClassComponent } from './class/class.component';

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
  ],
  exports: [PortfolioComponent],
  entryComponents: [PortfolioComponent]
})
export class PortfolioModule { }
