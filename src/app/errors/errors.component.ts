import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: '[app-errors]',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent implements OnInit {

  @Input()  control: FormControl = new FormControl(null);
  @Input()  submit: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
