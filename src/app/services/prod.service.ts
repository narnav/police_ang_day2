import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prod } from '../models/prod';
@Injectable({
  providedIn: 'root',
})
export class ProdService {
  MY_SERVER = '  http://localhost:3000/products';
  constructor(private prdSrv: HttpClient) {}

  getProducts(): Observable<Prod[]> {
    return this.prdSrv.get<Prod[]>(this.MY_SERVER);
  }
  addProduct(prd:Prod): Observable<any> {
    return this.prdSrv.post<any>(this.MY_SERVER,prd);
  }
}
