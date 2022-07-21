import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  firstName: string  = '';
  totalPrice: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data => {
      this.firstName = data.get('firstName');
      this.totalPrice = Number(data.get('totalPrice'));
    })
  }



}
