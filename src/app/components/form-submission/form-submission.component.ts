import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-submission',
  templateUrl: './form-submission.component.html',
  styleUrls: ['./form-submission.component.css']
})
export class FormSubmissionComponent {
  @Input() formData: any;
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    const controls = this.formData.formFields.reduce((acc: any, field: any) => {
      acc[field.label] = [''];
      return acc;
    }, {});
    this.form = this.fb.group(controls);
  }

  submitForm() {
    console.log(this.form.value);
  }
}