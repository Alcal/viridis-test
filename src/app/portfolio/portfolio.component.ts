import { Component, OnInit } from '@angular/core';
import { Class } from 'src/models/class.model';
import { ClassService } from "src/services/class.service";

@Component({
  selector: 'viridis-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  public classes: Class[];
  constructor(private classService: ClassService) { }

  ngOnInit() {
    this.classes = this.classService.getClasses();
  }

}
