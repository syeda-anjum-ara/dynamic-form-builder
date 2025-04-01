import { Component } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent {
  formBuilderForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formBuilderForm = this.fb.group({
      formFields: this.fb.array([])
    });
  }

  get formFields(): FormArray {
    return this.formBuilderForm.get('formFields') as FormArray;
  }

  addField(type: string) {
    this.formFields.push(this.fb.group({
      type: [type],
      label: [''],
      required: [false]
    }));
  }

  saveForm() {
    console.log(this.formBuilderForm.value);
  }
}