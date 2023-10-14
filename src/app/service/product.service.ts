import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from '../commons/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'localhost:8080/products';

  constructor(private hhtpClient: HttpClient) { }

  /* Metoda va intoarce o metoda de tipul observable care printr-un apel GET
  va intoarce toate informatiile din API-ul de be, mapand obiectele de la 
  
  Maparea se face folosind o interfata GetResponse care are aceeasi ... raspunsul din be*/
  getProductList():Observable<Product[]> {
    return this.hhtpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.products)
    );
  }
}

/* Interfata preia lista de produse din interiorul obiectului Json embedded*/
interface GetResponse{
  _embedded:  {
    products: Product[];
  }
}