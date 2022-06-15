import React from 'react';
import styles from './Navigation.module.css'
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {nextPage} from "../../store/slices/products";

const Navigation = () => {
    const pages: number = useAppSelector(state => state.reducerProducts.pages)
    //создаём массив кнопок из колличества страниц
    const pagesArray: number[] = Array.from({length: pages})
        .map((_, i, arr) => arr[i] = i + 1)
    const dispatch = useAppDispatch()

    return (
        <div className={styles.navigation}>
            {pagesArray.map((number) => <button
                key={number}
                className={styles.button}
                onClick={() => dispatch(nextPage(number))}>{number}</button>)}
        </div>
    );
};

export default Navigation;
