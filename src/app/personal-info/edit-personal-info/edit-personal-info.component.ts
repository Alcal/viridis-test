import { Component, Input, OnInit } from '@angular/core';
import {UserInfo} from "src/models/user-info.model";

@Component({
  selector: 'viridis-edit-personal-info',
  templateUrl: './edit-personal-info.component.html',
  styleUrls: ['./edit-personal-info.component.css']
})
export class EditPersonalInfoComponent implements OnInit {

  @Input () userInfo: UserInfo;
  @Input () onEdit: (isEditing: boolean) => void;
  constructor() { }

  ngOnInit() {
  }

  showValues() {
    console.log(JSON.stringify(this.userInfo));
  }


  cancelEdit() {
    this.onEdit(false);
  }

}
