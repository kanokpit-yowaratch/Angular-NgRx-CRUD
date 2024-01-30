import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";

import { Observable } from "rxjs";

import * as productActions from "../state/product.actions";
import * as fromProduct from "../state/product.reducer";
import { Product } from "../product.model";

@Component({
  selector: 'app-product-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit {
  productForm!: FormGroup;
  fileName: string = '';

  constructor(
    private fb: FormBuilder,
    private store: Store<fromProduct.AppState>
  ) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      price: ["", Validators.required],
      id: null
    })

    const product$: Observable<Product | undefined> = this.store.select(
      fromProduct.getCurrentProduct
    )

    product$.subscribe(currentProduct => {
      if (currentProduct) {
        this.productForm.patchValue({
          name: currentProduct.name,
          description: currentProduct.description,
          price: currentProduct.price,
          image: currentProduct.image,
          id: currentProduct.id
        });
        this.fileName = currentProduct.image;
      }
    })
  }

  updateProduct() {
    const updatedProduct: Product = {
      name: this.productForm?.get("name")?.value,
      description: this.productForm?.get("description")?.value,
      price: this.productForm?.get("price")?.value,
      image: this.fileName,
      id: this.productForm?.get("id")?.value
    };

    this.store.dispatch(new productActions.UpdateProduct(updatedProduct))
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;
    }
  }

}
