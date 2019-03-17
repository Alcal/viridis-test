import { Component, OnInit } from '@angular/core';
import { UserInfo } from 'src/models/user-info.model';

@Component({
  selector: 'viridis-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  userInfo = new UserInfo(null, null);

  constructor() { }

  ngOnInit() {
  }

  showValues() {
    console.log(this.userInfo.firstName, this.userInfo.lastName);
  }

}
