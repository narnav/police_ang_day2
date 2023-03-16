import { Component, OnInit, Input } from '@angular/core';
import { Prod } from 'src/app/models/prod';

@Component({
  selector: 'app-det',
  templateUrl: './det.component.html',
  styleUrls: ['./det.component.css'],
})
export class DetComponent {
  editFlag: boolean = false;
  @Input() myProduct?: Prod;
  setEdit() {
    this.editFlag = !this.editFlag;
  }
}
