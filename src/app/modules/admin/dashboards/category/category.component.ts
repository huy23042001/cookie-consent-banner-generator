import {Component, Injector, Input, OnInit} from '@angular/core';
import {FormArray} from "@angular/forms";
import {BaseComponent} from "../../../../core/base.component";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent extends BaseComponent implements OnInit {
    @Input() formArray: FormArray;
    @Input() readonly = false;
    @Input() categoryName: String;
  constructor(injector: Injector) {
      super(injector);
  }

  ngOnInit(): void {
  }
    add() {
        const lessonForm = this.fb.group({
            name: ['', ],
            value: ['',]
        });

        this.formArray.push(lessonForm);
    }
    delete(index: number) {
        this.formArray.removeAt(index);
    }
}
