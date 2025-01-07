import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { Product } from "./product.model";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: "root"
})
export class ProductService {
    private productUrl = `${environment.SERVER}/api/products`;

    constructor(private http: HttpClient) { }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.productUrl}/admin`);
    }

    getProductById(payload: number): Observable<Product> {
        return this.http.get<Product>(`${this.productUrl}/${payload}`);
    }

    createProduct(payload: Product | FormData): Observable<Product> {
        return this.http.post<Product>(`${this.productUrl}/stock`, payload);
    }

    updateProduct(product: Product | FormData): Observable<Product> {
        //@ts-ignore
        const id = product?.id || product.get("id");
        return this.http.patch<Product>(`${this.productUrl}/${id}`, product);
    }

    deleteProduct(payload: number) {
        return this.http.delete(`${this.productUrl}/${payload}`);
    }
}
