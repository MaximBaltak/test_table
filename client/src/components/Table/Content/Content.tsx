import React from 'react';
import {IProps} from "./types";
import styles from './Content.module.css'
import {formatDate} from "../../../utils/format";

const Content: React.FC<IProps> = ({isEven, data}) => {
   const date:Date = new Date(data.date)

    return (
            isEven ? <tr>
                    <td className={[styles.td, styles.red].join(' ')}>{formatDate(date)}</td>
                    <td className={[styles.td, styles.red].join(' ')}>{data.title}</td>
                    <td className={[styles.td, styles.red].join(' ')}>{`${data.count} кг.`}</td>
                    <td className={[styles.td, styles.red].join(' ')}>{`${data.distance} км.`}</td>
                </tr> :
                <tr>
                    <td className={styles.td}>{formatDate(date)}</td>
                    <td className={styles.td}>{data.title}</td>
                    <td className={styles.td}>{`${data.count} кг.`}</td>
                    <td className={styles.td}>{`${data.count} км.`}</td>
                </tr>
    );
};

export default Content;
