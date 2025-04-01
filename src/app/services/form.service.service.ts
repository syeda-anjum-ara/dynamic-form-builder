import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private forms: any[] = [];

  constructor() {}

  getForms(): any[] {
    return this.forms;
  }

  addForm(form: any) {
    this.forms.push(form);
  }

  deleteForm(form: any) {
    this.forms = this.forms.filter(f => f !== form);
  }
}