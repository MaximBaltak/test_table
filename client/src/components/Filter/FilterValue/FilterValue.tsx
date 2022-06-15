import React from 'react';
import styles from './FilterValue.module.css'
import {IProps, orderSort, typeFilter} from "./types";
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {setFilterColumn, setFilterValue} from "../../../store/slices/products";
import {colum} from "../../../types/typesTable";
//поле фильтра по калонке и по способу
const FilterValue: React.FC<IProps> = ({type}) => {
    const value: orderSort = useAppSelector(state => state.reducerProducts.filterValue)
    const column: number = useAppSelector(state => state.reducerProducts.filterColumn)
    const dispatch = useAppDispatch()
    return (
        type === typeFilter.CULUM ?
            <select onChange={(e) => dispatch(setFilterColumn(+e.target.value as colum))}
                    className={styles.filterValue} value={column}>
                <option value={colum.TITLE}>2</option>
                <option value={colum.COUNT}>3</option>
                <option value={colum.DISTANCE}>4</option>
            </select> :
            <select onChange={(e) => dispatch(setFilterValue(e.target.value as orderSort))}
                    className={styles.filterValue} value={value}>
                <option value={orderSort.ASCENDING}>по возраст.</option>
                <option value={orderSort.DESCENDING}>по убыв.</option>
            </select>
    )
}

export default FilterValue;
