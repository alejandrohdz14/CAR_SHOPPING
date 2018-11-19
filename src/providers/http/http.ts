import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable }     from 'rxjs/Observable';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

              //    direccion  IP 
  //url = "http://xxxx.xxxx.xxxx.xxxx:8080/CRUD_NOTES/"; 
  url = "http://localhost:8080/SHOPPING_CAR/"; 

  constructor(public http: HttpClient) {
    console.log('Hello HttpProvider Provider');
  }

  login(path,user):Observable<any>{
	return this.http.post(`${this.url}${path.path}`, {user}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  }

  signUp(user):Observable<any>{
    return this.http.post(`${this.url}/`, {user}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
    }

}
