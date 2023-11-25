import { Component } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
export class BaseComponent {
  /**
   *
   */
  constructor(private spinner:NgxSpinnerService) {
  }

  showSpinner(){
    this.spinner.show();
  }
  hideSpinner(){
    setTimeout(() => {
      this.spinner.hide()
      }, 1000);
  }
}
