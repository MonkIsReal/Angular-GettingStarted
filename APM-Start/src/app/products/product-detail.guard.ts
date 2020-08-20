import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {
constructor(private router:Router){

}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let id:number = + next.url[1].path;
      if(isNaN(id) || id<1 ){
        alert("url invalide "+next.url)
        this.router.navigate(['/products']);
        return false;
      }

      return true;
  }

  //on peut utiliser Location
/*   constructor(private _location: Location)
  {}

  backClicked() {
    this._location.back();
  } */

}
