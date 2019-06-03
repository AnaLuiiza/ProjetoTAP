import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationsProvider } from 'src/app/providers/validations/validations';
import { RegisterService } from 'src/app/services/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  formRegister: FormGroup;

  constructor(
    private fb: FormBuilder,
    private rest: RegisterService 
  ) { }
  
  ngOnInit(): void {
    this.createFormsGroup();
  }
  createFormsGroup() {
    this.formRegister = this.fb.group({
      name: ['', Validators.compose([ValidationsProvider.required, ValidationsProvider.inputTexValidator, ValidationsProvider.minLength(6)])],
      phone: ['', Validators.compose([ValidationsProvider.required,  ValidationsProvider.phoneNumber])],
      zipCode: ['', Validators.compose([ValidationsProvider.required,ValidationsProvider.minLength(8)])],
      adress: ['', Validators.compose([ValidationsProvider.required, ValidationsProvider.minLength(8)])],
      neighborhood: ['', Validators.compose([ValidationsProvider.required, ValidationsProvider.minLength(6)])],
      complement: [''],
      user: ['', Validators.compose([ValidationsProvider.required, ValidationsProvider.email])]
    });
  }

  getError(field) {
    const fieldGroup = this.formRegister.get(field);
    if (fieldGroup.errors && fieldGroup.dirty && fieldGroup.touched) {
      return fieldGroup.errors.message;
    } else if (this.formRegister.errors) {
      return fieldGroup.errors.message;
    }
  }

  register(){
    this.rest.register(this.formRegister.value)
  }

}
