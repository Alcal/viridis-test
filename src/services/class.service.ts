import { Injectable } from '@angular/core';
import { Class } from "../models/class.model";

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor() { }

  getClasses(): Class[] {
    return [
      new Class('Example Class', 'This is just an example description, feel free to erase this class when you get started', ['example skill'])
    ];
  }
}
