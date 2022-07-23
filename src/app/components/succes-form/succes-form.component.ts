import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { formValid } from 'src/app/models/form';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-succes-form',
  templateUrl: './succes-form.component.html',
  styleUrls: ['./succes-form.component.css']
})
export class SuccesFormComponent implements OnInit {

  @Output() formSucces: EventEmitter <string> = new EventEmitter();

  myFirstName: string='';
  myAddress: string='';
  myCreditCard: number | string = '';

  constructor() { }
  

  // formV = new formValid('', '', '');

  formV = new FormGroup({
    firstName: new FormControl('',[Validators.required, Validators.minLength(3)]),
    address: new FormControl('',[Validators.required, Validators.minLength(6)]),
    creditCard: new FormControl('',[Validators.required, Validators.minLength(16),Validators.maxLength(16),Validators.pattern("^[0-9]*$") ])
  })

  
  ngOnInit(): void {

  }

  get firstName() { return this.formV.get('firstName'); }
  get address() { return this.formV.get('address'); }
  get creditCard() { return this.formV.get('creditCard'); }
  

  

  onFormSubmit(){
    this.formSucces.emit(this.myFirstName);
  }

}
