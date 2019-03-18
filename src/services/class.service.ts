import { Injectable } from '@angular/core';
import { Class } from "../models/class.model";

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor() { }

  getClasses(): Class[] {
    return [
      new Class('Dark Arts', 'Learn how to handle obscure wizarding skills', ['flight', 'power']),
      new Class('Marxism', 'Actually, there will be no class here', ['equality', 'empowerment'])
    ];
  }
}
