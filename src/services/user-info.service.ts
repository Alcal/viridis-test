import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from 'src/models/user-info.model';
import cloneDeep from 'lodash.clonedeep';
import merge from 'lodash.merge';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  userInfo: UserInfo = new UserInfo(
    'New',
    'User',
    'main@email.com',
    []);

  constructor(private http: HttpClient) { }

  getUserInfo(): UserInfo {
    return cloneDeep(this.userInfo);
  }

  updateUserInfo(newInfo: UserInfo) {
    this.userInfo = merge({} , this.userInfo, newInfo);
  }
}
