import React from 'react';
import styles from './Table.module.css'
import {useAppSelector} from "../../store/hooks";
import {IProduct} from "../../store/slices/type";
import Content from "./Content/Content";

const Table = () => {
    const products: IProduct[] = useAppSelector(state => state.reducerProducts.filterProducts)
    return (
        <table cellSpacing={0} className={styles.table}>
            <thead>
            <tr>
                <td className={styles.title}>Дата</td>
                <td className={styles.title}>Название</td>
                <td className={styles.title}>Количество</td>
                <td className={styles.title}>Расстояние</td>
            </tr>
            </thead>
            <tbody>
            {products.length === 0 ? <tr>
                    <td colSpan={4}><p className={styles.alt}>Ни чего нет</p></td>
                </tr> :
                products.map((data, i) => {
                    //красим фон у чётных строк
                    if ((i + 1) % 2 === 0) {
                        return <Content isEven={true} data={data} key={i}></Content>
                    } else {
                        return <Content isEven={false} data={data} key={i}></Content>
                    }

                })
            }
            </tbody>
        </table>
    );
};

export default Table;
