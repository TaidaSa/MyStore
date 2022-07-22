import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-succes-form',
  templateUrl: './succes-form.component.html',
  styleUrls: ['./succes-form.component.css']
})
export class SuccesFormComponent implements OnInit {

  @Output() formSucces: EventEmitter <string> = new EventEmitter();

  firstName: string='';
  address: string='';
  creditCard: number | string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(){
    this.formSucces.emit(this.firstName);
  }

}
