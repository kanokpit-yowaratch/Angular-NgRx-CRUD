import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { Product } from "./product.model";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: "root"
})
export class ProductService {
    private productUrl = `${environment.SERVER}/products`;

    constructor(private http: HttpClient) { }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.productUrl);
    }

    getProductById(payload: string): Observable<Product> {
        return this.http.get<Product>(`${this.productUrl}/${payload}`);
    }

    createProduct(payload: Product): Observable<Product> {
        return this.http.post<Product>(this.productUrl, payload);
    }

    updateProduct(product: Product): Observable<Product> {
        return this.http.patch<Product>(
            `${this.productUrl}/${product.id}`,
            product
        );
    }

    deleteProduct(payload: string) {
        return this.http.delete(`${this.productUrl}/${payload}`);
    }
}
