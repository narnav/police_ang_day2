import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Prod } from 'src/app/models/prod';

@Component({
  selector: 'app-det',
  templateUrl: './det.component.html',
  styleUrls: ['./det.component.css'],
})
export class DetComponent {
  editFlag: boolean = false;
  @Input() myProduct?: Prod;
  @Output() saveProd = new EventEmitter<Prod>();

  onSave(desc:string,price:number) {
    if (this.myProduct){
      // this.myProduct.desc=desc
      // this.myProduct.price=price
      this.saveProd.emit({id:this.myProduct.id,desc,price});
    }
    this.editFlag =false
  }

  setEdit() {
    this.editFlag = !this.editFlag;
  }
}
