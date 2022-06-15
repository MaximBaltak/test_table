import {orderSort} from "../../components/Filter/FilterValue/types";
import {colum} from "../../types/typesTable";

export interface IProduct {
    id: number,
    date: Date,
    title: string,
    count: number,
    distance: number
}

export interface IProductsState {
    filterInput: string,
    filterColumn: colum,
    filterValue: orderSort,
    filterProducts: IProduct[],
    products: IProduct[],
    onePage: number
    pages: number,

}
