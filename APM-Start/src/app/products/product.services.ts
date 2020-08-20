import {Injectable } from '@angular/core'
import{IProduct} from './product'
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn:'root'
})
export class ProductService{
  _link:string;

  constructor(private http: HttpClient){
    this._link="./api/products/products.json"
  }

  getProducts():Observable<IProduct[]>{

   return  this.http.get<IProduct[]>(this._link);

    // return   [
    //   {
    //     "productId": 1,
    //     "productName": "Leaf Rake",
    //     "productCode": "GDN-0011",
    //     "releaseDate": new Date("March 19, 2019"),
    //     "description": "Leaf rake with 48-inch wooden handle.",
    //     "price": 19.95,
    //     "starRating": 3.2,
    //     "imageUrl": "assets/images/leaf_rake.png"
    //   },
    //   {
    //     "productId": 2,
    //     "productName": "Garden Cart",
    //     "productCode": "GDN-0023",
    //     "releaseDate": new Date("March 18, 2019"),
    //     "description": "15 gallon capacity rolling garden cart",
    //     "price": 32.99,
    //     "starRating": 4.2,
    //     "imageUrl": "assets/images/garden_cart.png"
    //   },
    //   {
    //     "productId": 5,
    //     "productName": "Hammer",
    //     "productCode": "TBX-0048",
    //     "releaseDate": new Date("May 21, 2019"),
    //     "description": "Curved claw steel hammer",
    //     "price": 8.9,
    //     "starRating": 4.8,
    //     "imageUrl": "assets/images/hammer.png"
    //    },
    //   {
    //     "productId": 8,
    //     "productName": "Saw",
    //     "productCode": "TBX-0022",
    //     "releaseDate": new Date("May 15, 2019"),
    //     "description": "15-inch steel blade hand saw",
    //     "price": 11.55,
    //     "starRating": 3.7,
    //     "imageUrl": "assets/images/saw.png"
    //   },
    //   {
    //     "productId": 10,
    //     "productName": "Video Game Controller",
    //     "productCode": "GMG-0042",
    //     "releaseDate": new Date("October 15, 2018"),
    //     "description": "Standard two-button video game controller",
    //     "price": 35.95,
    //     "starRating": 4.6,
    //     "imageUrl": "assets/images/xbox-controller.png"
    //   }
    // ];

  }
}

