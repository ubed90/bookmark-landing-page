import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSubmit(subscribeForm: NgForm) {
    console.log(subscribeForm.value);
  }
}
