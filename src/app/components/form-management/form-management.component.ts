import { Component } from '@angular/core';

@Component({
  selector: 'app-form-management',
  templateUrl: './form-management.component.html',
  styleUrls: ['./form-management.component.css']
})
export class FormManagementComponent {
  savedForms = JSON.parse(localStorage.getItem('savedForms') || '[]');

  deleteForm(index: number) {
    this.savedForms.splice(index, 1);
    localStorage.setItem('savedForms', JSON.stringify(this.savedForms));
  }
}