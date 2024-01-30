import { Action } from "@ngrx/store";

import { Update } from "@ngrx/entity";

import { Product } from "../product.model";

export enum ProductActionTypes {
    LOAD_PRODUCTS = "[Product] Load products",
    LOAD_PRODUCTS_SUCCESS = "[Product] Load products success",
    LOAD_PRODUCTS_FAIL = "[Product] Load products fail",
    LOAD_PRODUCT = "[Product] Load Product",
    LOAD_PRODUCT_SUCCESS = "[Product] Load product success",
    LOAD_PRODUCT_FAIL = "[Product] Load product fail",
    CREATE_PRODUCT = "[Product] Create product",
    CREATE_PRODUCT_SUCCESS = "[Product] Create product success",
    CREATE_PRODUCT_FAIL = "[Product] Create product fail",
    UPDATE_PRODUCT = "[Product] Update product",
    UPDATE_PRODUCT_SUCCESS = "[Product] Update product success",
    UPDATE_PRODUCT_FAIL = "[Product] Update product fail",
    DELETE_PRODUCT = "[Product] Delete product",
    DELETE_PRODUCT_SUCCESS = "[Product] Delete product Success",
    DELETE_PRODUCT_FAIL = "[Product] Delete product Fail"
}

export class LoadProducts implements Action {
    readonly type = ProductActionTypes.LOAD_PRODUCTS;
}

export class LoadProductsSuccess implements Action {
    readonly type = ProductActionTypes.LOAD_PRODUCTS_SUCCESS;

    constructor(public payload: Product[]) { }
}

export class LoadProductsFail implements Action {
    readonly type = ProductActionTypes.LOAD_PRODUCTS_FAIL;

    constructor(public payload: string) { }
}

export class LoadProduct implements Action {
    readonly type = ProductActionTypes.LOAD_PRODUCT;

    constructor(public payload: string) { }
}

export class LoadProductSuccess implements Action {
    readonly type = ProductActionTypes.LOAD_PRODUCT_SUCCESS;

    constructor(public payload: Product) { }
}

export class LoadProductFail implements Action {
    readonly type = ProductActionTypes.LOAD_PRODUCT_FAIL;

    constructor(public payload: string) { }
}

export class CreateProduct implements Action {
    readonly type = ProductActionTypes.CREATE_PRODUCT;

    constructor(public payload: Product) { }
}

export class CreateProductSuccess implements Action {
    readonly type = ProductActionTypes.CREATE_PRODUCT_SUCCESS;

    constructor(public payload: Product) { }
}

export class CreateProductFail implements Action {
    readonly type = ProductActionTypes.CREATE_PRODUCT_FAIL;

    constructor(public payload: string) { }
}

export class UpdateProduct implements Action {
    readonly type = ProductActionTypes.UPDATE_PRODUCT;

    constructor(public payload: Product) { }
}

export class UpdateProductSuccess implements Action {
    readonly type = ProductActionTypes.UPDATE_PRODUCT_SUCCESS;

    constructor(public payload: Update<Product>) { }
}

export class UpdateProductFail implements Action {
    readonly type = ProductActionTypes.UPDATE_PRODUCT_FAIL;

    constructor(public payload: string) { }
}

export class DeleteProduct implements Action {
    readonly type = ProductActionTypes.DELETE_PRODUCT;

    constructor(public payload: string) { }
}

export class DeleteProductSuccess implements Action {
    readonly type = ProductActionTypes.DELETE_PRODUCT_SUCCESS;

    constructor(public payload: string) { }
}

export class DeleteProductFail implements Action {
    readonly type = ProductActionTypes.DELETE_PRODUCT_FAIL;

    constructor(public payload: string) { }
}

export type ProductAction =
    | LoadProducts
    | LoadProductsSuccess
    | LoadProductsFail
    | LoadProduct
    | LoadProductSuccess
    | LoadProductFail
    | CreateProduct
    | CreateProductSuccess
    | CreateProductFail
    | UpdateProduct
    | UpdateProductSuccess
    | UpdateProductFail
    | DeleteProduct
    | DeleteProductSuccess
    | DeleteProductFail;
