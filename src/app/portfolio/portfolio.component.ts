import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import { Class } from 'src/models/class.model';
import { ClassService } from "src/services/class.service";
import {MatRipple} from "@angular/material";
import {MatSnackBar} from '@angular/material';
import {MAT_SNACK_BAR_DATA} from '@angular/material';
import cloneDeep from 'lodash.clonedeep';

@Component({
  selector: 'viridis-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  @ViewChild(MatRipple) ripple: MatRipple;
  public classes: Class[];
  public snackBarRef: any;
  constructor(private classService: ClassService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    setTimeout(() =>
      this.ripple.launch({centered: true, persistent: false}),
      2000
    );
    this.classes = this.classService.getClasses();
  }

  print() {
    window.print();
  }
  addClass() {
    this.classes.push({name: '', description: '', skills: []});
    setTimeout(() => window.scrollTo({top: document.body.scrollHeight, behavior: "smooth"}), 500);
  }

  undoDelete = (classData: Class, index: number) => {
    this.classes.splice(index, 0, classData);
    this.snackBarRef.dismiss();
  }

  deleteClass = (index: number) => {
    console.log(cloneDeep(this.classes[index]));
    this.snackBarRef = this.snackBar.openFromComponent(ClassDeleteSnackBarComponent, {
      data: {
        undoDelete: this.undoDelete,
        classData: cloneDeep(this.classes[index]),
        classIndex: index,
      },
      duration: 5000,
  });
    this.classes.splice(index, 1);
  }

}

@Component({
  selector: 'viridis-class-delete-snack-bar',
  templateUrl: './class-delete-snack-bar/class-delete-snack-bar.component.html',
  styleUrls: ['./class-delete-snack-bar/class-delete-snack-bar.component.css']
})
export class ClassDeleteSnackBarComponent implements OnInit {

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) {}

  ngOnInit() {
  }

  onUndo () {
    const {classData, classIndex, undoDelete} = this.data;
    undoDelete(classData, classIndex);
  }

}
