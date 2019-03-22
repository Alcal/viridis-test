import {Component, Input, OnInit} from '@angular/core';
import { Class } from 'src/models/class.model';
import {MatChipInputEvent} from "@angular/material";

@Component({
  selector: 'viridis-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  @Input() class: Class;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

  addSkill(event: MatChipInputEvent) {
    const { input, value: skill } = event;
    if((skill||'').trim())
      this.class.skills.push(skill.trim());
    input.value = '';
  }

  removeSkill(index: number) {
    this.class.skills.splice(index, 1);
  }

}
