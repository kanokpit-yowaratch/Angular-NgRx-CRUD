import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule, Actions } from "@ngrx/effects";
import { StoreModule } from '@ngrx/store';

import { productReducer } from './state/product.reducer';
import { ProductEffect } from "./state/product.effects";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

const productRoutes: Routes = [
  { path: "", component: ProductComponent }
];

@NgModule({
  declarations: [
    ProductComponent,
    FormComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(productRoutes),
    StoreModule.forFeature("product", productReducer),
    EffectsModule.forFeature([ProductEffect])
  ]
})
export class ProductModule { }
