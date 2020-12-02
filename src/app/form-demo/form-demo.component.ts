import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css']
})
export class FormDemoComponent implements OnInit {
  formDemo: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) {
    this.formDemo = this.createForm();
  }

  ngOnInit() {
  }

  createForm(): FormGroup {
    return this._formBuilder.group({
      id: [undefined],
      name: [null, Validators.required],
      phono: [null]
    })
  }

  doSubmit() {
    console.log(this.formDemo.value);
  }
}