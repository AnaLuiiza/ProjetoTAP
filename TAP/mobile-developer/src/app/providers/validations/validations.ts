import { AbstractControl, Validators } from '@angular/forms';
import { isComponent } from '@angular/core/src/render3/util';

function isNumeric(input) {
  var er = /^[0-9]+$/;
  return (!er.test(input));
}
function isText(input) {
  var inputText = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\ \s]+$/;
  return (!input.match(inputText));
}

function isPhone(input){
  var inputPhone = /^\([1-9]{2}\) [2-9][0-9]{3,4}\-[0-9]{4}$/;
  return(!input.match(inputPhone))
}

function isCEP(input){
  var inputCEP = /^([0-9]{5}-[0-9]{3})$/;
  return(!input.match(inputCEP))
}


export class ValidationsProvider {

  static maxLength = (size) => (control: AbstractControl) => {
    return Validators.maxLength(size)(control) ? { maxLength: true, message: `Tamanho maximo permitido ${size} caracteres` } : null;
  };

  static valideCEP(control: AbstractControl) {
    return isCEP(control) ? { valideCEP: true, message: `Formato de CEP inválido! Ex. 00000-000` } : null;
  };

  static minLength = (size) => (control: AbstractControl) => {
    return Validators.minLength(size)(control) ? { minLength: true, message: `Tamanho mínimo permitido ${size} caracteres!` } : null;
  };

  static email(control: AbstractControl) {
    return Validators.email(control) ? { email: true, message: `Formato de email inválido! Ex. joao@gmail.com` } : null;
  };

  static required(control: AbstractControl) {
    return Validators.required(control) ? { required: true, message: `Campo obrigatório!` } : null;
  };

  static inputTexValidator(control: AbstractControl) {
    return isText(control.value) ? { inputTexValidator: true, message: `O campo deve conter apenas letras!` } : null;
  };

  static inputNumberValidator(control: AbstractControl) {
    return isNumeric(control.value) ? { inputNumberValidator: true, message: `O campo deve conter apenas números!` } : null;
  };

  static phoneNumber(control: AbstractControl){
    return isPhone(control.value) ? { phoneNumber: true, message: `Formato de telefone inválido! Ex. (xx) xxxx-xxxx`} :null;
  }

}
