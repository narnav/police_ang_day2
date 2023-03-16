import { Component } from '@angular/core';
import { Prod } from 'src/app/models/prod';
import { ProdService } from 'src/app/services/prod.service';

@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.css']
})
export class ProdComponent {
products:Prod[]=[]
  constructor(private prdSrv:ProdService) {
    this.getData()

  }

  getData(){
    this.prdSrv.getProducts().subscribe(res => this.products=res)
  }
  addProduct(){
    this.prdSrv.addProduct({
      "desc": "test product",
      "price": 5
    }).subscribe(res => this.getData()    )

  }

}
