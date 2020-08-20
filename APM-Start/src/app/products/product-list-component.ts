
import{Component, OnInit} from '@angular/core';
import{IProduct} from './product'
import { from } from 'rxjs';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import {ProductService} from './product.services'
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector:'pm-products',
  templateUrl:'./product-list-component.html',
  styleUrls:['./product-list-component.css']
})
export class ProductListComponent implements OnInit{

  imageWidth:number=50;
  imageMargin:number= 10;
  isHidden:boolean=false;
  titre: string ="Ma liste de produits";
  rating_text: string;
  private _searchText: string;
  errOjb: HttpErrorResponse;

  public get searchText(): string {
    return this._searchText;
  }
  public set searchText(value: string) {
    this._searchText = value;
    this.filterProducts = this._searchText?this.filterSearch(value):this.products;
  }



  products:IProduct[];

  filterProducts:IProduct[];

  constructor(private service:ProductService){

  }


  ngOnInit(): void {
    console.log('oninit');
    //this.products = this.service.getProducts();
    this.service.getProducts().subscribe(
      response=>{
                this.products=response;
                this.filterProducts= this.products; },
      error => {this.errOjb = error; console.log("error sur http: request "+this.errOjb.message);});


  }

  onClickHide():void{
    this.isHidden=!this.isHidden;
  }

  onNotif(chaine:string):void{
   // alert(chaine);
   this.rating_text=chaine
  }

  filterSearch(searchText: string): IProduct[] {
    searchText= searchText.toLocaleUpperCase()
    return this.products.filter(element => element.productName.toLocaleUpperCase().includes(searchText));
  }

}
