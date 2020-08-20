import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { Observable } from 'rxjs/internal/Observable';
import { of, Observable, scheduled } from 'rxjs';
import { IProduct } from './product';



@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  private _myProduct: IProduct;
  public get myProduct(): IProduct {
    return this._myProduct;
  }
  public set myProduct(value: IProduct) {
    this._myProduct = value;
  }
  constructor(private route:ActivatedRoute,private router:Router) {

   }

  ngOnInit(): void {
    let id:number = +this.route.snapshot.paramMap.get('id');
    // we are supposed to get the product via http
    // tslint:disable-next-line:deprecation
    const httpFakeObservable:Observable<IProduct> = of({
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": new Date("March 19, 2019"),
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/leaf_rake.png"
    });
    httpFakeObservable.subscribe(product => {this.myProduct=product; })
    //const myObservable:Observable = scheduled<string>("");
  }

  onBack():void{
    this.router.navigate(['/products']);
  }

}
