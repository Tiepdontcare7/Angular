import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  API_URL = `https://6110f09bc38a0900171f0ed0.mockapi.io/product`;

  constructor(private http: HttpClient) { }

  getAll():Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.API_URL)
  }

  getOne(id: number):Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.API_URL + `/${id}`)
  }

  editProduct(id: number, product: IProduct):Observable<IProduct[]> {
    return this.http.put<IProduct[]>(this.API_URL + `${id}`, product)
  }

  deleteProduct(id: number):Observable<IProduct[]> {
    return this.http.delete<IProduct[]>(this.API_URL + `${id}`)
  }


}
