interface IProps {
    cartProducts: [];
}

export interface ICartProductsProps {
    cart : IProps;
}

export interface ISingleProduct {
    id: number;
    image: string;
    price: number;
    quantity: number;
    title: string;
}