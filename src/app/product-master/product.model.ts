export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    file?: File | undefined | null;
}
