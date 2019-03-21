import { Component, Input, OnInit } from '@angular/core';
import {UserInfo} from "src/models/user-info.model";
import { UserInfoService } from "src/services/user-info.service";
import cloneDeep from 'lodash.clonedeep';

@Component({
  selector: 'viridis-edit-personal-info',
  templateUrl: './edit-personal-info.component.html',
  styleUrls: ['./edit-personal-info.component.css']
})
export class EditPersonalInfoComponent implements OnInit {

  @Input () userInfo: UserInfo;
  @Input () onSave: () => void;
  @Input () onEditCancel: (isEditing: boolean) => void;
  temporaryUserInfo: UserInfo;
  constructor(private userInfoService: UserInfoService) { }

  ngOnInit() {
    this.temporaryUserInfo = cloneDeep(this.userInfo);
  }

  save() {
    console.log(JSON.stringify(this.temporaryUserInfo));
    this.userInfoService.updateUserInfo(this.temporaryUserInfo);
    this.onSave();
  }

  addEmail(email: string) {
    this.temporaryUserInfo.alternateEmails.push(email);
  }
  deleteEmail(i: number) {
    this.temporaryUserInfo.alternateEmails.splice(i, 1);
  }

  cancelEdit() {
    this.onEditCancel(false);
  }

}
