import {Component, OnInit, ViewChild} from '@angular/core';
import { Class } from 'src/models/class.model';
import { ClassService } from "src/services/class.service";
import {MatRipple} from "@angular/material";

@Component({
  selector: 'viridis-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  @ViewChild(MatRipple) ripple: MatRipple;
  public classes: Class[];
  constructor(private classService: ClassService) { }

  ngOnInit() {
    setTimeout(() =>
      this.ripple.launch({centered: true, persistent: false}),
      2000
    );
    this.classes = this.classService.getClasses();
  }

  addClass() {
    this.classes.push({name: '', description: ''});
  }

}
