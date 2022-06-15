import {IProduct} from "../store/slices/type";
import {colum} from "../types/typesTable";
import {orderSort} from "../components/Filter/FilterValue/types";
//функция для сортировки объектов в массиве по параметрам для таблицы
export function sortProducts(productA: IProduct, productB: IProduct, col: colum, type: orderSort): number {
    if (type === orderSort.ASCENDING) {
        if (col === colum.TITLE) {
            if (productA.title < productB.title) return -1
            if (productA.title === productB.title) return 0
            if (productA.title > productB.title) return 1
        } else if (col === colum.COUNT) {
            if (productA.count < productB.count) return -1
            if (productA.count === productB.count) return 0
            if (productA.count > productB.count) return 1
        } else if (col === colum.DISTANCE) {
            if (productA.distance < productB.distance) return -1
            if (productA.distance === productB.distance) return 0
            if (productA.distance > productB.distance) return 1
        }
    } else {
        if (col === colum.TITLE) {
            if (productA.title > productB.title) return -1
            if (productA.title === productB.title) return 0
            if (productA.title < productB.title) return 1
        } else if (col === colum.COUNT) {
            if (productA.count > productB.count) return -1
            if (productA.count === productB.count) return 0
            if (productA.count < productB.count) return 1
        } else if (col === colum.DISTANCE) {
            if (productA.distance > productB.distance) return -1
            if (productA.distance === productB.distance) return 0
            if (productA.distance < productB.distance) return 1
        }
    }
    return 0
}
