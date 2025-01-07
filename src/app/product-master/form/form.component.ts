import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import * as productActions from "../state/product.actions";
import * as fromProduct from "../state/product.reducer";
import { Product } from "../product.model";
import { environment } from "../../../environments/environment";

@Component({
  selector: "app-product-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.sass"]
})
export class FormComponent implements OnInit {
  productForm!: FormGroup;
  fileName: string = '';
  previewUrl: string | null = null;
  buttonText: string = 'Add Product';
  productId: number = 0;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromProduct.AppState>,
  ) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      price: ["", Validators.required],
      stock: ["", Validators.required],
      file: [null, Validators.required],
      id: null
    });

    const product$: Observable<Product | undefined> = this.store.select(
      fromProduct.getCurrentProduct
    )

    product$.subscribe(product => {
      const currentProduct: any = { ...product };
      this.productId = currentProduct.id;
      if (currentProduct) {
        if (currentProduct.id && currentProduct.id > 0) {
          this.buttonText = 'Edit Product';
        }
        if (currentProduct?.cover) {
          this.fileName = currentProduct?.cover.split('/')[2];
          this.previewUrl = `${environment.SERVER}/${currentProduct?.cover}`;
        }
        this.productForm.patchValue({
          name: currentProduct.name,
          description: currentProduct.description,
          price: currentProduct.price,
          stock: currentProduct.stock,
          id: currentProduct.id
        });
      }
    });
  }

  createUpdateProduct() {
    if (this.productForm.get('file')?.value) {
      const formData = new FormData();
      formData.append('file', this.productForm.get('file')?.value);
      formData.append('name', this.productForm.get('name')?.value);
      formData.append('description', this.productForm.get('description')?.value);
      formData.append('price', this.productForm.get('price')?.value);
      formData.append('stock', this.productForm.get('stock')?.value);
      if (this.productId && this.productId > 0) {
        formData.append('id', `${this.productId}`);
        this.store.dispatch(new productActions.UpdateProduct(formData));
      } else {
        this.store.dispatch(new productActions.CreateProduct(formData));
      }
    } else {
      const newProduct: Product = {
        name: this.productForm?.get("name")?.value,
        description: this.productForm?.get("description")?.value,
        price: this.productForm?.get("price")?.value,
        stock: this.productForm?.get("stock")?.value,
        id: 0
      };
      if (this.productId && this.productId > 0) {
        const updateProduct: Product = {
          ...newProduct,
          id: this.productId
        };
        this.store.dispatch(new productActions.UpdateProduct(updateProduct));
      } else {
        this.store.dispatch(new productActions.CreateProduct(newProduct));
      }
    }

    this.productForm?.reset();
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;
      this.productForm.patchValue({ file });

      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previewUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
