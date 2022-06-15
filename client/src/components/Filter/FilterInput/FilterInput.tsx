import React from 'react';
import styles from './FilterInput.module.css'
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {setFilterInput} from "../../../store/slices/products";
//поле фильтра по значению
const FilterInput = () => {
    const value: string = useAppSelector(state => state.reducerProducts.filterInput)
    const dispatch = useAppDispatch()
    return <input value={value} onChange={(e) => dispatch(setFilterInput(e.target.value))}
                  className={styles.filterInput} type="text" placeholder="Фильтр:"/>
}


export default FilterInput;
