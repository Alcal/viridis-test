import { Component, OnInit } from '@angular/core';
import { UserInfoService} from "src/services/user-info.service";
import { UserInfo } from 'src/models/user-info.model';

@Component({
  selector: 'viridis-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  userInfo: UserInfo;
  isEditing: boolean;

  constructor(private userInfoService: UserInfoService) {
  }

  ngOnInit() {
    this.userInfo = this.userInfoService.getUserInfo();
    this.isEditing = false;
  }

  getUserInfo = () => {
    this.userInfo = this.userInfoService.getUserInfo();
    this.isEditing = false;
  }

  setEdition= (isEditing: boolean) => {
    this.isEditing = isEditing;
  }

}
