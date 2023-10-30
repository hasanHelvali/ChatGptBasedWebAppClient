import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent } from 'src/app/common/base/base.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BaseComponent {
  /**
   *
   */
  constructor(spinner:NgxSpinnerService) {
    super(spinner);
// this.showSpinner()
// this.hideSpinner()
  }
    ngOnInit(): void {
  }
}
