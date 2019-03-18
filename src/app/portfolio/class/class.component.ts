import {Component, Input, OnInit} from '@angular/core';
import { Class } from 'src/models/class.model';

@Component({
  selector: 'viridis-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  @Input() class: Class;
  constructor() { }

  ngOnInit() {
  }

}
