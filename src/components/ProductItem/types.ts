interface IItem {
    id: number;
    title: string;
    image: string;
    rating: string | number | any;
    price: number;
}

export interface IProductProps {
    item: IItem
}

export interface ICardProps {
    id: number;
    title: string;
    image: string;
    price: number;
}