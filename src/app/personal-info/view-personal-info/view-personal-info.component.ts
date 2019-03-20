import {Component, Input, OnInit} from '@angular/core';
import { UserInfo } from "src/models/user-info.model";

@Component({
  selector: 'viridis-view-personal-info',
  templateUrl: './view-personal-info.component.html',
  styleUrls: ['./view-personal-info.component.css']
})
export class ViewPersonalInfoComponent implements OnInit {
  @Input () userInfo: UserInfo;
  @Input () onEdit: (isEditing: boolean) => void;
  public defaultProfile: string = "assets/img/default-profile.png";
  constructor() { }

  ngOnInit() {
  }

  edit() {
    this.onEdit(true);
  }

}
