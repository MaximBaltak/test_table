import {IProductsState} from "../store/slices/type";
//функция для вычисления количества страниц и вывода данных для первой страницы
export function pagination(state: IProductsState): void {
    state.pages = Math.ceil(state.products.length / state.onePage)
    let i: number = 0;
    while (i <= state.onePage) {
        if (state.products[i]?.id) {
            state.filterProducts.push(state.products[i])
            i++
        } else {
            break
        }
    }
}
