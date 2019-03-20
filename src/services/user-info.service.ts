import { Injectable } from '@angular/core';
import { UserInfo } from 'src/models/user-info.model';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor() { }

  getUserInfo(): UserInfo {
    return new UserInfo(
      'Donca',
      'Matic',
      'magictavern@puppies.supplies',
      ['acalo91@gmail', 'google@google.google', 'alex@alex.alex', 'el@señor.com', 'a@b.c', 'acalo91@gmail', 'google@google.google', 'alex@alex.alex', 'el@señor.com', 'a@b.c', 'acalo91@gmail', 'google@google.google', 'alex@alex.alex', 'el@señor.com', 'a@b.c', 'acalo91@gmail', 'google@google.google', 'alex@alex.alex', 'el@señor.com', 'a@b.c']);
  }
}
