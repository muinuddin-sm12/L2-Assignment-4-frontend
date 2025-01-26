export type TCar = {
    _id: string;
    brand: string;
    model: string;
    year: number;
    price: number;
    category: 'Sedan' | 'SUV' | 'Truck' | 'Coupe' | 'Convertible';
    description: string;
    quantity: number;
    inStock: boolean;
}