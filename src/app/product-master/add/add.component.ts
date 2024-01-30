import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store, State, select } from "@ngrx/store";
import * as productActions from "../state/product.actions";
import * as fromProduct from "../state/product.reducer";
import { Product } from "../product.model";

@Component({
  selector: "app-product-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.sass"]
})
export class AddComponent implements OnInit {
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
      price: ["", Validators.required]
    });
  }

  createProduct() {
    const newProduct: Product = {
      name: this.productForm?.get("name")?.value,
      description: this.productForm?.get("description")?.value,
      price: this.productForm?.get("price")?.value,
      image: this.fileName,
    };

    this.store.dispatch(new productActions.CreateProduct(newProduct));

    this.productForm?.reset();
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;
    }
  }
}
