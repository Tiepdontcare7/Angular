import { ProductsService } from '../../services/products.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  searchText: string = "";
  products!: IProduct[];

  constructor(private productS: ProductsService) {
    this.productS.getAll().subscribe({
      next: (data) => {this.products = data},
      error: (error) => {console.log(error.message)}
    });
  }

  hihi(id: any){
    console.log(id)
  }
}
