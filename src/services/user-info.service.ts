import { Injectable } from '@angular/core';
import { UserInfo } from 'src/models/user-info.model';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor() { }

  getUserInfo(): UserInfo {
    return new UserInfo('Donca', 'Matic', 'magictavern@puppies.supplies');
  }
}
